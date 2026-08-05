import nodemailer from 'nodemailer';

// Create SMTP Transporter using environment variables
const getTransporter = () => {
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'smtp.hostinger.com';
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT || '465', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

export interface MailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  icalEvent?: {
    filename: string;
    method: string;
    content: string;
  };
}

/**
 * Core email sender function.
 */
export async function sendEmail(options: MailOptions): Promise<boolean> {
  try {
    const user = process.env.SMTP_USER || process.env.EMAIL_USER;
    const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.warn('[MailService] SMTP credentials not provided. Simulating email send.');
      console.log('[MailService] Would have sent email to:', options.to, 'Subject:', options.subject);
      return true;
    }

    const transporter = getTransporter();
    const fromEmail = process.env.SMTP_FROM || process.env.EMAIL_FROM || '"RekrutIQ" <info@rekrutiq.io>';
    const info = await transporter.sendMail({
      from: fromEmail,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text || '',
      replyTo: options.replyTo,
      ...(options.icalEvent && { icalEvent: options.icalEvent }),
    });
    console.log('[MailService] Email sent successfully. MessageId:', info.messageId);
    return true;
  } catch (error) {
    console.error('[MailService] Error sending email:', error);
    return false;
  }
}

/**
 * Sends consultation notification to the internal team (info@rekrutiq.io).
 */
export async function sendNewConsultationNotification(data: {
  fullName: string;
  workEmail: string;
  phoneNumber: string;
  primaryInterest: string;
  messageDetails: string;
  scheduledDate?: string | Date | null;
  scheduledTime?: string | null;
  createdAt: string;
}): Promise<boolean> {
  const formattedSchedule = data.scheduledDate
    ? `${typeof data.scheduledDate === 'string' ? data.scheduledDate : new Date(data.scheduledDate).toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${data.scheduledTime || 'N/A'} (IST)`
    : 'Not Scheduled';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Consultation Request</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #F8FAFC;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      background-color: #F8FAFC;
      padding: 40px 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #FFFFFF;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      border: 1px solid #E2E8F0;
    }
    .header {
      background-color: #500088;
      padding: 32px 24px;
      text-align: center;
      border-bottom: 4px solid #7c1fc6;
    }
    .header h1 {
      color: #FFFFFF;
      margin: 0;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 32px 24px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #1f1a22;
      margin-top: 0;
      margin-bottom: 24px;
      border-left: 3px solid #500088;
      padding-left: 10px;
    }
    .field-row {
      margin-bottom: 18px;
      border-bottom: 1px solid #F1F5F9;
      padding-bottom: 14px;
    }
    .field-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #64748B;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .value {
      font-size: 14px;
      color: #0F172A;
      font-weight: 500;
      line-height: 1.5;
    }
    .message-box {
      background-color: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 8px;
      padding: 16px;
      margin-top: 8px;
      white-space: pre-wrap;
      font-size: 14px;
      color: #334155;
      line-height: 1.6;
    }
    .footer {
      background-color: #F8FAFC;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #64748B;
      border-top: 1px solid #E2E8F0;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>RekrutIQ</h1>
      </div>
      <div class="content">
        <div class="section-title">New Consultation Request Received</div>
        
        <div class="field-row">
          <div class="label">Full Name</div>
          <div class="value">${data.fullName}</div>
        </div>
        
        <div class="field-row">
          <div class="label">Work Email</div>
          <div class="value"><a href="mailto:${data.workEmail}" style="color: #500088; text-decoration: none; font-weight: 600;">${data.workEmail}</a></div>
        </div>
        
        <div class="field-row">
          <div class="label">Phone Number</div>
          <div class="value">${data.phoneNumber}</div>
        </div>
        
        <div class="field-row">
          <div class="label">Subject / Primary Interest</div>
          <div class="value">${data.primaryInterest}</div>
        </div>
        
        <div class="field-row">
          <div class="label">Message</div>
          <div class="value message-box">${data.messageDetails || 'No message provided.'}</div>
        </div>
        
        ${data.scheduledDate ? `
        <div class="field-row">
          <div class="label">Scheduled Consultation</div>
          <div class="value">${formattedSchedule}</div>
        </div>
        ` : ''}

        <div class="field-row">
          <div class="label">Submitted At</div>
          <div class="value">${data.createdAt}</div>
        </div>
      </div>
      <div class="footer">
        This notification was automatically generated from the RekrutIQ website.
      </div>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
New Consultation Request Received

Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Phone Number: ${data.phoneNumber}
Subject: ${data.primaryInterest}
Message: ${data.messageDetails}
${data.scheduledDate ? `Scheduled: ${formattedSchedule}\n` : ''}
Submitted At: ${data.createdAt}

This notification was automatically generated from the RekrutIQ website.
  `.trim();

  const recipient = process.env.ADMIN_EMAIL || 'info@rekrutiq.io';

  return sendEmail({
    to: recipient,
    subject: `🔔 New Consultation Request - ${data.fullName}`,
    html,
    text,
    replyTo: data.workEmail,
  });
}

/**
 * Sends standard calendar invite to the user so they can confirm via RSVP buttons (Yes / No).
 * Their response status is automatically emailed to info@rekrutiq.io by their mail client.
 */
export async function sendMeetingInvitationToUser(data: {
  fullName: string;
  workEmail: string;
  primaryInterest: string;
  scheduledDate: string | Date;
  scheduledTime: string;
}): Promise<boolean> {
  let year: string, month: string, day: string;
  
  if (typeof data.scheduledDate === 'string' && data.scheduledDate.includes('-') && !data.scheduledDate.includes('T')) {
    [year, month, day] = data.scheduledDate.split('-');
  } else {
    const d = new Date(data.scheduledDate);
    const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' });
    const formatted = formatter.format(d);
    [year, month, day] = formatted.split('-');
  }

  const [time, modifier] = data.scheduledTime.split(' ');
  let [hoursStr, minutesStr] = time.split(':');
  let hours = parseInt(hoursStr, 10);
  const minutes = minutesStr;

  if (hours === 12) {
    hours = modifier?.toUpperCase() === 'AM' ? 0 : 12;
  } else if (modifier?.toUpperCase() === 'PM') {
    hours += 12;
  }

  const startDateIstStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${String(hours).padStart(2, '0')}:${minutes}:00+05:30`;
  const startDate = new Date(startDateIstStr);
  const endDate = new Date(startDate.getTime() + 30 * 60000); // 30 mins
  
  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const dtStart = formatICSDate(startDate);
  const dtEnd = formatICSDate(endDate);
  const now = formatICSDate(new Date());
  
  const organizerEmail = 'info@rekrutiq.io';
  const subjectTitle = data.primaryInterest || 'Consultation with RekrutIQ';
  const uid = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}@rekrutiq.io`;

  // RFC 5545 compliant calendar invite with RSVP requested
  const icsContent = [
    'BEGIN:VCALENDAR',
    'PRODID:-//RekrutIQ//EN',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${subjectTitle} - RekrutIQ`,
    `DESCRIPTION:Consultation regarding ${subjectTitle} with the RekrutIQ team.`,
    `ORGANIZER;CN=RekrutIQ:mailto:${organizerEmail}`,
    `ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=${data.fullName}:mailto:${data.workEmail}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'DESCRIPTION:Reminder: Consultation with RekrutIQ',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const weekday = startDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Kolkata' });
  const monthDay = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' });
  const yearStr = startDate.toLocaleDateString('en-US', { year: 'numeric', timeZone: 'Asia/Kolkata' });
  const dateStr = `${weekday}, ${monthDay} ${yearStr}`;
  const startTimeStr = startDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
  const endTimeStr = endDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f1a22; padding: 24px; border: 1px solid #E2E8F0; border-radius: 16px; background-color: #ffffff;">
      <div style="margin-bottom: 20px; border-bottom: 2px solid #f1dbff; padding-bottom: 16px;">
        <h2 style="color: #500088; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">
          RekrutIQ
        </h2>
      </div>
      
      <p style="color: #4c4452; font-size: 15px; margin-bottom: 14px; line-height: 1.5;">
        Hi <strong>${data.fullName}</strong>,
      </p>
      
      <p style="color: #4c4452; font-size: 15px; margin-bottom: 20px; line-height: 1.5;">
        You are invited to a consultation session with RekrutIQ. Please use the calendar participation buttons (<strong>Yes / Maybe / No</strong>) above to confirm your availability.
      </p>
      
      <div style="background-color: #fbf0fc; border: 1px solid #e9d5ff; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
        <h3 style="color: #500088; font-size: 18px; margin: 0 0 12px 0; font-weight: 700;">${subjectTitle}</h3>
        <p style="color: #1f1a22; font-size: 15px; font-weight: 600; margin: 0 0 6px 0;">
          📅 ${dateStr}
        </p>
        <p style="color: #4c4452; font-size: 14px; margin: 0;">
          ⏰ ${startTimeStr} – ${endTimeStr} (IST)
        </p>
      </div>
      
      <p style="color: #64748B; font-size: 13px; line-height: 1.5; margin: 0 0 20px 0;">
        When you respond, your participation status (Accepted / Declined) will be directly shared with our team at <a href="mailto:${organizerEmail}" style="color: #500088; text-decoration: none; font-weight: 600;">${organizerEmail}</a>.
      </p>
      
      <div style="border-top: 1px solid #E2E8F0; padding-top: 16px; font-size: 12px; color: #94A3B8; line-height: 1.5;">
        RekrutIQ • <a href="mailto:${organizerEmail}" style="color: #500088; text-decoration: none;">${organizerEmail}</a> • <a href="https://rekrutiq.io" style="color: #500088; text-decoration: none;">rekrutiq.io</a>
      </div>
    </div>
  `;

  return sendEmail({
    to: data.workEmail,
    subject: `Invitation: ${subjectTitle} - RekrutIQ`,
    html,
    icalEvent: {
      filename: 'invite.ics',
      method: 'REQUEST',
      content: icsContent
    }
  });
}
