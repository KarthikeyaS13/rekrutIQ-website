import { NextResponse } from 'next/server';
import { sendNewConsultationNotification, sendMeetingInvitationToUser } from '@/lib/mail';
import { getBookedSlots, addBooking } from '@/lib/bookings';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const bookedSlots = await getBookedSlots();
    return NextResponse.json({ bookedSlots }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching booked slots:', error);
    return NextResponse.json({ bookedSlots: {} }, { status: 200 });
  }
}

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

    const fullName = `${firstName} ${lastName}`.trim();
    const nowIst = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    // Format date string as YYYY-MM-DD
    let dateKey: string | null = null;
    if (selectedDate) {
      if (typeof selectedDate === 'string' && selectedDate.includes('-') && !selectedDate.includes('T')) {
        dateKey = selectedDate;
      } else {
        const d = new Date(selectedDate);
        const formatter = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' });
        dateKey = formatter.format(d);
      }
    }

    // If a time slot was chosen, record it so it cannot be booked again
    if (dateKey && selectedTime) {
      await addBooking({
        date: dateKey,
        time: selectedTime,
        fullName,
        email,
        createdAt: nowIst,
      });
    }

    // 1. Send detailed notification to admin (info@rekrutiq.io)
    await sendNewConsultationNotification({
      fullName,
      workEmail: email,
      phoneNumber: phone,
      primaryInterest: subject || 'Consultation Request',
      messageDetails: message || '',
      scheduledDate: selectedDate || null,
      scheduledTime: selectedTime || null,
      createdAt: nowIst,
    });

    // 2. Send meeting invitation to the user if date and time were selected
    if (selectedDate && selectedTime) {
      await sendMeetingInvitationToUser({
        fullName,
        workEmail: email,
        primaryInterest: subject || 'Consultation with RekrutIQ',
        scheduledDate: selectedDate,
        scheduledTime: selectedTime,
      });
    }

    return NextResponse.json(
      { message: 'Request submitted successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: 'Failed to process request.', details: error.message },
      { status: 500 }
    );
  }
}
