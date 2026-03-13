import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log(req)
  const { name, email, message,subject } = await req.json();

  if (!name || !email || !message || !subject) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

await transporter.sendMail({
  from: process.env.SMTP_USER, // organisations verified email
  to: process.env.CONTACT_EMAIL, // organisations verified email
  replyTo: email, // user's email
  subject: `New message: ${subject} | From ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
});

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || 'Email failed' }, { status: 500 });
  }
}