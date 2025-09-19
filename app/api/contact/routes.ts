// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const body: EmailRequest = await request.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // transporter setup
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // set true if port 465 or if you want TLS
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL!,
    to: process.env.TO_EMAIL!, 
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent messageId:', info.messageId);
    return NextResponse.json({ success: true, message: 'Email sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Could not send email' }, { status: 500 });
  }
}
