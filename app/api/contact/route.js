// Alternative email route using Resend (https://resend.com — free tier: 100 emails/day)
// Usage: npm install resend   then add RESEND_API_KEY to .env.local
// In Contact.jsx, replace the Web3Forms fetch with:
//   fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, message}),
//                           headers: {'Content-Type':'application/json'} })

import { NextResponse } from 'next/server';

export async function POST(request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
        return NextResponse.json({ success: false, message: 'Email service not configured.' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'jayaramyasanikommu@yahoo.com',
            subject: `Portfolio enquiry from ${name}`,
            reply_to: email,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
        }),
    });

    if (res.ok) {
        return NextResponse.json({ success: true });
    }

    const error = await res.json();
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
}
