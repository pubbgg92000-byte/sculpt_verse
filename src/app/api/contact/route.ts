import { NextResponse } from "next/server";

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

    // TODO: Integrate with Resend for email delivery
    // For now, log the contact form submission
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      projectType,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    // When Resend API key is configured, uncomment:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'SculptVerse <noreply@sculptverse.in>',
    //   to: ['ragulakanakaraju@gmail.com'],
    //   subject: `New Inquiry from ${name} — ${projectType || 'General'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Email:</strong> ${email || 'Not provided'}</p>
    //     <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
    //     <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}
