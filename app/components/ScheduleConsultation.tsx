"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, ArrowRight, Check } from "lucide-react";

interface ScheduleConsultationProps {
  onScheduleChange?: (date: Date | null, time: string | null) => void;
}

export function ScheduleConsultation({ onScheduleChange }: ScheduleConsultationProps) {
  // Time slots from 11:00 AM to 5:30 PM (IST)
  const timeSlots = useMemo(() => [
    "11:00 AM", "11:30 AM", "12:00 PM",
    "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM",
    "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM"
  ], []);

  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});

  // Keep a ref of onScheduleChange to prevent dependency re-trigger loops
  const onScheduleChangeRef = useRef(onScheduleChange);
  useEffect(() => {
    onScheduleChangeRef.current = onScheduleChange;
  }, [onScheduleChange]);

  const hasInitializedRef = useRef(false);

  // Helper: Format Date object to YYYY-MM-DD in Asia/Kolkata
  const formatDateKey = (date: Date): string => {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(date);
  };

  // Helper: Get current Date in Asia/Kolkata
  const getNowInIST = (): Date => {
    const now = new Date();
    const istString = now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    return new Date(istString);
  };

  // Helper: Parse "hh:mm A" to decimal hours (e.g. "05:30 PM" -> 17.5)
  const parseTime = (timeStr: string): number => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours + minutes / 60;
  };

  // Fetch already booked slots from backend
  useEffect(() => {
    let isMounted = true;
    async function fetchBookings() {
      try {
        const res = await fetch("/api/contact");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data.bookedSlots) {
            setBookedSlots(data.bookedSlots);
          }
        }
      } catch (err) {
        console.error("Failed to load booked slots:", err);
      }
    }
    fetchBookings();
    return () => {
      isMounted = false;
    };
  }, []);

  // Compute available slots for a given date
  const getSlotsForDate = useCallback((date: Date, bookings: Record<string, string[]>): string[] => {
    const dayOfWeek = date.getDay();
    // Saturday (6) and Sunday (0) are closed
    if (dayOfWeek === 0 || dayOfWeek === 6) return [];

    const nowIst = getNowInIST();
    const isToday =
      date.getDate() === nowIst.getDate() &&
      date.getMonth() === nowIst.getMonth() &&
      date.getFullYear() === nowIst.getFullYear();

    const dateKey = formatDateKey(date);
    const bookedForDay = bookings[dateKey] || [];
    const currentDecimalTime = nowIst.getHours() + nowIst.getMinutes() / 60;

    return timeSlots.filter(slot => {
      // If already booked, exclude it
      if (bookedForDay.includes(slot)) return false;

      // If today, exclude past slots
      if (isToday) {
        return parseTime(slot) > currentDecimalTime;
      }

      return true;
    });
  }, [timeSlots]);

  // Find next available working date that has slots
  const findNextAvailableDate = useCallback((startDate: Date, bookings: Record<string, string[]>): Date => {
    const probe = new Date(startDate);
    probe.setHours(0, 0, 0, 0);

    for (let i = 1; i <= 30; i++) {
      probe.setDate(probe.getDate() + 1);
      const dayOfWeek = probe.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const slots = getSlotsForDate(probe, bookings);
        if (slots.length > 0) {
          return new Date(probe);
        }
      }
    }
    return probe;
  }, [getSlotsForDate]);

  // Auto-initialize on load once or when bookedSlots arrive
  useEffect(() => {
    if (hasInitializedRef.current && selectedDate) return;

    const nowIst = getNowInIST();
    const todaySlots = getSlotsForDate(nowIst, bookedSlots);

    let initialDate: Date;
    if (todaySlots.length > 0 && nowIst.getDay() !== 0 && nowIst.getDay() !== 6) {
      initialDate = nowIst;
    } else {
      initialDate = findNextAvailableDate(nowIst, bookedSlots);
    }

    setSelectedDate(initialDate);
    setCurrentMonth(new Date(initialDate.getFullYear(), initialDate.getMonth(), 1));
    hasInitializedRef.current = true;

    if (onScheduleChangeRef.current) {
      onScheduleChangeRef.current(initialDate, null);
    }
  }, [bookedSlots, getSlotsForDate, findNextAvailableDate, selectedDate]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setSelectedTime(null);
    if (onScheduleChangeRef.current) {
      onScheduleChangeRef.current(newDate, null);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (onScheduleChangeRef.current) {
      onScheduleChangeRef.current(selectedDate, time);
    }
  };

  const handleJumpToNextAvailable = () => {
    const base = selectedDate || getNowInIST();
    const nextDate = findNextAvailableDate(base, bookedSlots);
    setSelectedDate(nextDate);
    setCurrentMonth(new Date(nextDate.getFullYear(), nextDate.getMonth(), 1));
    setSelectedTime(null);
    if (onScheduleChangeRef.current) {
      onScheduleChangeRef.current(nextDate, null);
    }
  };

  const availableSlots = selectedDate ? getSlotsForDate(selectedDate, bookedSlots) : [];

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const cells = [];

    const nowIst = getNowInIST();
    const today = new Date(nowIst.getFullYear(), nowIst.getMonth(), nowIst.getDate());

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="w-8 h-8 sm:w-9 sm:h-9" />);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isPast = date < today;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      const slots = getSlotsForDate(date, bookedSlots);
      const isFullyBookedOrPassed = !isPast && !isWeekend && slots.length === 0;
      const isDisabled = isPast || isWeekend || isFullyBookedOrPassed;

      const isSelected =
        selectedDate?.getDate() === i &&
        selectedDate?.getMonth() === currentMonth.getMonth() &&
        selectedDate?.getFullYear() === currentMonth.getFullYear();

      cells.push(
        <div key={`cell-${i}`} className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
          <button
            onClick={() => !isDisabled && handleDateSelect(i)}
            disabled={isDisabled}
            type="button"
            title={
              isWeekend
                ? "Closed on Weekends"
                : isFullyBookedOrPassed
                ? "No available slots"
                : isPast
                ? "Past date"
                : `Available (${slots.length} slots)`
            }
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm transition-all duration-150 relative select-none
              ${isSelected 
                ? "!bg-[#500088] !text-white font-bold shadow-md ring-2 ring-[#500088]/30" 
                : isDisabled
                ? "text-[#cbd5e1] cursor-not-allowed bg-transparent"
                : "text-[#334155] font-medium hover:bg-[#f3e8ff] hover:text-[#500088] cursor-pointer"
              }
            `}
          >
            {i}
          </button>
        </div>
      );
    }
    return cells;
  };

  const selectedDateFormatted = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: "Asia/Kolkata"
      })
    : "";

  const nextAvailableDateObj = selectedDate ? findNextAvailableDate(selectedDate, bookedSlots) : null;
  const nextAvailableFormatted = nextAvailableDateObj
    ? nextAvailableDateObj.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        timeZone: "Asia/Kolkata"
      })
    : "";

  return (
    <div className="w-full bg-[#faf5ff]/40 rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden mt-6 text-[#1f1a22] font-sans">
      <div className="p-5 sm:p-7">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#E2E8F0]/80">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#500088]" />
            <h3 className="text-base sm:text-lg font-bold text-[#1f1a22]">Schedule a Consultation</h3>
          </div>
          {selectedTime && selectedDate && (
            <div className="flex items-center gap-1.5 text-xs text-[#500088] font-semibold bg-white px-3 py-1.5 rounded-full border border-[#500088]/20 shadow-xs">
              <Check className="w-3.5 h-3.5 text-[#500088]" />
              <span>{selectedDateFormatted} at {selectedTime} (IST)</span>
            </div>
          )}
        </div>

        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Calendar Section (Left: 5 cols on desktop) */}
          <div className="md:col-span-5 flex flex-col">
            {/* Month & Year Navigation */}
            <div className="flex items-center justify-between mb-4 px-1">
              <h4 className="font-bold text-sm sm:text-base text-[#1f1a22]">
                {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
              </h4>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  className="p-1.5 hover:text-[#500088] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0] text-[#64748b]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  className="p-1.5 hover:text-[#500088] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#E2E8F0] text-[#64748b]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-[#64748b] mb-2 px-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                <div key={day} className="w-8 h-6 sm:w-9 sm:h-6 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 justify-items-center px-1">
              {renderCalendar()}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] text-[#64748b] flex items-center justify-between px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#500088]"></span> Mon – Fri Available
              </span>
              <span className="text-[#94a3b8]">Sat & Sun Closed</span>
            </div>
          </div>

          {/* Vertical Separator for desktop */}
          <div className="hidden md:block w-px bg-[#E2E8F0] self-stretch -my-2" />

          {/* Time Slots Section (Right: 6-7 cols on desktop) */}
          <div className="md:col-span-6 flex flex-col min-h-[260px]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-sm sm:text-base text-[#1f1a22] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#500088]" />
                <span>Available Time (IST)</span>
                {selectedDate && (
                  <span className="text-xs font-semibold text-[#500088] bg-[#f3e8ff] px-2 py-0.5 rounded-md">
                    {selectedDateFormatted}
                  </span>
                )}
              </h4>
            </div>

            {!selectedDate ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-[#64748b] space-y-2 border border-dashed border-[#E2E8F0] rounded-xl bg-white/60">
                <CalendarIcon className="w-8 h-8 text-[#500088]/40" />
                <p className="text-xs sm:text-sm">Select a date to view available time slots</p>
              </div>
            ) : availableSlots.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white rounded-xl border border-dashed border-[#E2E8F0] space-y-4 my-auto">
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed max-w-xs">
                  All consultation slots for <strong>{selectedDateFormatted}</strong> are fully booked or have passed.
                </p>
                {nextAvailableDateObj && (
                  <button
                    type="button"
                    onClick={handleJumpToNextAvailable}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#500088] text-white text-xs font-semibold rounded-xl hover:bg-[#3e006b] transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    <span>Next Available: {nextAvailableFormatted}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-between flex-1">
                {/* Responsive grid with comfortable, consistent button widths */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableSlots.map(time => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`h-10 px-3 rounded-xl text-xs font-semibold transition-all duration-150 text-center flex items-center justify-center select-none cursor-pointer
                          ${isSelected
                            ? "bg-[#500088] text-white shadow-md ring-2 ring-[#500088]/20"
                            : "bg-white border border-[#E2E8F0] text-[#334155] hover:border-[#500088] hover:text-[#500088] hover:bg-[#faf5ff] shadow-xs"
                          }
                        `}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>

                <p className="text-[11px] text-[#94a3b8] mt-5 pt-3 border-t border-[#E2E8F0]">
                  * Selected times are reserved in Indian Standard Time (IST).
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
