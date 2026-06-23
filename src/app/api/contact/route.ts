import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || "arvindmangalarapu4632@gmail.com";
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "SculptVerse <onboarding@resend.dev>";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, budget, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Contact form email is not configured: RESEND_API_KEY is missing.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email || undefined,
      subject: `New Sculpture Inquiry - ${name}`,
      html: `
        <h2>New SculptVerse contact inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType || "Not specified")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
        <h3>Project Description</h3>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend delivery failed:", error);
      return NextResponse.json(
        { error: "We could not deliver your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, deliveredTo: CONTACT_EMAIL });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
