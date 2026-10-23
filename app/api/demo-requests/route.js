
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function json(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

// Browser में endpoint जाँचने के लिए
export async function GET() {
  return json({
    success: true,
    message: "Demo requests API is deployed.",
    methods: ["GET", "POST"],
  });
}

// Homepage के demo form के लिए
export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return json({
        success: false,
        message: "Invalid JSON request.",
      }, 400);
    }

    const name = typeof body?.name === "string"
      ? body.name.trim().slice(0, 100)
      : "";

    const email = typeof body?.email === "string"
      ? body.email.trim().slice(0, 254)
      : "";

    const company = typeof body?.company === "string"
      ? body.company.trim().slice(0, 150)
      : "";

    const message = typeof body?.message === "string"
      ? body.message.trim().slice(0, 2000)
      : "";

    if (!name || !email || !message) {
      return json({
        success: false,
        message: "Name, email and project details are required.",
      }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({
        success: false,
        message: "Please enter a valid email address.",
      }, 400);
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.DEMO_REQUEST_TO_EMAIL;
    const sender = process.env.DEMO_REQUEST_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Demo request email environment variables are missing.");

      return json({
        success: false,
        message: "Demo requests are not configured yet. Please try again later.",
      }, 503);
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Nexa demo request from ${name}`,
        text: [
          "New Nexa demo request",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          "",
          "Project details:",
          message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);

      return json({
        success: false,
        message: "Email could not be sent. Please try again later.",
      }, 502);
    }

    return json({
      success: true,
      message: "Your demo request has been submitted successfully.",
    });
  } catch (error) {
    console.error("Demo request error:", error?.message);

    return json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }, 500);
  }
}
