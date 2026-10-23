import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 150;
const MAX_MESSAGE_LENGTH = 2000;

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return jsonResponse(
        {
          success: false,
          message: "Invalid request. Please submit the form again.",
        },
        400
      );
    }

    const name = cleanText(body?.name, MAX_NAME_LENGTH);
    const email = cleanText(body?.email, MAX_EMAIL_LENGTH).toLowerCase();
    const company = cleanText(body?.company, MAX_COMPANY_LENGTH);
    const message = cleanText(body?.message, MAX_MESSAGE_LENGTH);

    // Required fields
    if (!name || !email || !message) {
      return jsonResponse(
        {
          success: false,
          message: "Please fill in your name, email and project details.",
        },
        400
      );
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return jsonResponse(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        400
      );
    }

    // Prevent email header injection
    if (/[\r\n]/.test(email)) {
      return jsonResponse(
        {
          success: false,
          message: "Invalid email address.",
        },
        400
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.DEMO_REQUEST_TO_EMAIL;
    const sender = process.env.DEMO_REQUEST_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error(
        "Demo request email configuration is missing."
      );

      return jsonResponse(
        {
          success: false,
          message:
            "Demo requests are temporarily unavailable. Please try again later.",
        },
        503
      );
    }

    const submittedAt = new Date().toISOString();

    const emailText = [
      "New Nexa Demo Request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      "Project details:",
      message,
      "",
      `Submitted at: ${submittedAt}`,
    ].join("\n");

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.7;color:#20221f">
        <h2>New Nexa Demo Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>

        <h3>Project details</h3>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>

        <hr />
        <p style="font-size:12px;color:#797c74">
          Submitted at: ${escapeHtml(submittedAt)}
        </p>
      </div>
    `;

    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          reply_to: email,
          subject: `New Nexa demo request from ${name}`,
          text: emailText,
          html: emailHtml,
        }),
        signal: AbortSignal.timeout(15000),
      }
    );

    const responseText = await emailResponse.text();

    let emailResult = {};

    try {
      emailResult = responseText
        ? JSON.parse(responseText)
        : {};
    } catch {
      emailResult = {};
    }

    if (!emailResponse.ok) {
      console.error(
        "Resend email error:",
        emailResponse.status,
        emailResult
      );

      return jsonResponse(
        {
          success: false,
          message:
            "We could not send your request right now. Please try again later.",
        },
        502
      );
    }

    return jsonResponse(
      {
        success: true,
        message: "Your demo request has been submitted successfully.",
        id: emailResult.id || null,
      },
      200
    );
  } catch (error) {
    console.error(
      "Demo request API error:",
      error?.message || "Unknown error"
    );

    return jsonResponse(
      {
        success: false,
        message:
          "Something went wrong while submitting your request. Please try again.",
      },
      500
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
