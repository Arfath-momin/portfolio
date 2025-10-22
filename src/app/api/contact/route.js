import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE) === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || 'arfathmominn@gmail.com',
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Email sending error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
