import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, subject, message, selectedDate, selectedTime } = data;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required contact information.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Determine the subject line
    const emailSubject = subject || `New Consultation Request from ${firstName} ${lastName}`;

    const htmlContent = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided.'}</p>
      
      <br />
      <h3>Scheduling Request</h3>
      <p><strong>Date:</strong> ${selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Not selected'}</p>
      <p><strong>Time:</strong> ${selectedTime || 'Not selected'}</p>
    `;

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'info@rekrutiq.io',
      subject: emailSubject,
      html: htmlContent,
      replyTo: email,
    };

    // Verify SMTP configuration if not in development
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("SMTP credentials not provided. Simulating email send for development.");
        console.log("Would have sent:", mailOptions);
        return NextResponse.json({ message: 'Email request received (simulated due to missing credentials).' }, { status: 200 });
    }

    // 1. Send email to admin
    await transporter.sendMail(mailOptions);

    // 2. Send calendar invitation to the user (if date and time are selected)
    if (selectedDate && selectedTime) {
      let startUTC = "";
      let endUTC = "";
      
      const match = selectedTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (match) {
        let hours = parseInt(match[1]);
        const minutes = parseInt(match[2]);
        const ampm = match[3].toUpperCase();
        if (ampm === 'PM' && hours < 12) hours += 12;
        if (ampm === 'AM' && hours === 12) hours = 0;
        
        // Format YYYY-MM-DD in IST
        const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' });
        const dateStr = formatter.format(new Date(selectedDate)); 
        
        const isoString = `${dateStr}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00+05:30`;
        const startDt = new Date(isoString);
        const endDt = new Date(startDt.getTime() + 30 * 60 * 1000); // 30 minutes duration
        
        const formatToUTC = (dt: Date) => dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        startUTC = formatToUTC(startDt);
        endUTC = formatToUTC(endDt);
        
        const icalContent = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'PRODID:-//RekrutIQ//EN',
          'METHOD:REQUEST',
          'BEGIN:VEVENT',
          `UID:${require('crypto').randomUUID()}@rekrutiq.io`,
          `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}`,
          `DTSTART:${startUTC}`,
          `DTEND:${endUTC}`,
          `SUMMARY:Consultation with RekrutIQ`,
          `ORGANIZER;CN=RekrutIQ:mailto:${process.env.SMTP_FROM || 'info@rekrutiq.io'}`,
          `ATTENDEE;RSVP=TRUE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;CN=${firstName} ${lastName}:mailto:${email}`,
          `LOCATION:Online Meeting (Link to be provided)`,
          `DESCRIPTION:Consultation regarding: ${subject || 'N/A'}`,
          'STATUS:CONFIRMED',
          'SEQUENCE:0',
          'BEGIN:VALARM',
          'TRIGGER:-PT15M',
          'DESCRIPTION:Reminder',
          'ACTION:DISPLAY',
          'END:VALARM',
          'END:VEVENT',
          'END:VCALENDAR'
        ].join('\r\n');

        const userMailOptions = {
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: email,
          subject: `Invitation: Consultation with RekrutIQ`,
          html: `
            <p>Hi ${firstName},</p>
            <p>Thank you for scheduling a consultation with us.</p>
            <p>Please find the calendar invitation attached. We look forward to speaking with you!</p>
            <p>Best regards,<br/>RekrutIQ Team</p>
          `,
          icalEvent: {
            method: 'request',
            content: icalContent
          }
        };

        await transporter.sendMail(userMailOptions);
      }
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email.', details: error.message },
      { status: 500 }
    );
  }
}
