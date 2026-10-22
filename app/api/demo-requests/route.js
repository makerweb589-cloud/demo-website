import { demoRequests } from "../../../lib/demo-store";

export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    success: true,
    requests: demoRequests
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const company =
      typeof body.company === "string"
        ? body.company.trim()
        : "";

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields."
        },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      message.length > 2000
    ) {
      return Response.json(
        {
          success: false,
          message: "One or more fields are too long."
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address."
        },
        { status: 400 }
      );
    }

    const demoRequest = {
      id: `DEMO-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 7)}`,
      name,
      email,
      company,
      message,
      status: "Pending",
      createdAt: new Date().toISOString()
    };

    demoRequests.unshift(demoRequest);

    return Response.json(
      {
        success: true,
        message: "Demo request submitted successfully.",
        request: demoRequest
      },
      { status: 201 }
    );
  } catch {
    return Response.json(
      {
        success: false,
        message: "Unable to process your request."
      },
      { status: 400 }
    );
  }
}
