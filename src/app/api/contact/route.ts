import resend from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { name, email, website, message } = await req.json();

    // Send email
    await resend.emails.send({
      from: "AyeZee Website <noreply@aaronsoto.io>",
      to: "aaron.m.soto1@gmail.com",
      subject: "New Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
              <p><strong>Website:</strong> ${website || "N/a"}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
