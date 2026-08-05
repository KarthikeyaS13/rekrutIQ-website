import fs from 'fs';
import path from 'path';

export interface BookingRecord {
  date: string; // YYYY-MM-DD
  time: string; // e.g. "05:30 PM"
  fullName?: string;
  email?: string;
  createdAt?: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');

// In-memory fallback
let memoryBookings: BookingRecord[] = [];

function ensureDataFile() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(BOOKINGS_FILE)) {
      fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (error) {
    console.warn('[BookingsStore] Failed to create data directory or file:', error);
  }
}

export async function getBookedSlots(): Promise<Record<string, string[]>> {
  try {
    ensureDataFile();
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      const records: BookingRecord[] = JSON.parse(data);
      
      const map: Record<string, string[]> = {};
      for (const record of records) {
        if (!map[record.date]) {
          map[record.date] = [];
        }
        if (!map[record.date].includes(record.time)) {
          map[record.date].push(record.time);
        }
      }
      return map;
    }
  } catch (error) {
    console.error('[BookingsStore] Error reading bookings:', error);
  }

  // Fallback to memory
  const map: Record<string, string[]> = {};
  for (const record of memoryBookings) {
    if (!map[record.date]) {
      map[record.date] = [];
    }
    if (!map[record.date].includes(record.time)) {
      map[record.date].push(record.time);
    }
  }
  return map;
}

export async function addBooking(booking: BookingRecord): Promise<boolean> {
  try {
    ensureDataFile();
    let records: BookingRecord[] = [];
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      records = JSON.parse(data);
    }

    records.push(booking);
    memoryBookings.push(booking);

    try {
      fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(records, null, 2), 'utf-8');
    } catch (writeErr) {
      console.warn('[BookingsStore] File write failed, stored in memory:', writeErr);
    }

    return true;
  } catch (error) {
    console.error('[BookingsStore] Error saving booking:', error);
    memoryBookings.push(booking);
    return true;
  }
}
