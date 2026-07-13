"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScheduleConsultationProps {
  onScheduleChange?: (date: Date | null, time: string | null) => void;
}

export function ScheduleConsultation({ onScheduleChange }: ScheduleConsultationProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Time slots from 11:00 AM to 5:30 PM
  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM",
    "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM",
    "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM"
  ];

  // Helper to parse "hh:mm A" to 24hr decimal for easy comparison (e.g., 01:30 PM -> 13.5)
  const parseTime = (timeStr: string) => {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    return hours + minutes / 60;
  };

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
    if (onScheduleChange) onScheduleChange(newDate, null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    if (onScheduleChange) onScheduleChange(selectedDate, time);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isPast = date < today;
      // Also optionally check if it's weekend: const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      
      const isSelected = selectedDate?.getDate() === i && 
                         selectedDate?.getMonth() === currentMonth.getMonth() &&
                         selectedDate?.getFullYear() === currentMonth.getFullYear();

      days.push(
        <button
          key={`day-${i}`}
          onClick={() => !isPast && handleDateSelect(i)}
          disabled={isPast}
          type="button"
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-all
            ${isPast ? "text-[#a39ca5] cursor-not-allowed" : "hover:bg-[#fbf0fc] hover:text-[#500088]"}
            ${isSelected ? "bg-[#500088] text-white font-bold shadow-md hover:text-white" : !isPast ? "text-[#4c4452]" : ""}
          `}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
    
    const now = new Date();
    const isToday = selectedDate.getDate() === now.getDate() && 
                    selectedDate.getMonth() === now.getMonth() && 
                    selectedDate.getFullYear() === now.getFullYear();

    if (!isToday) return timeSlots;

    const currentDecimalTime = now.getHours() + now.getMinutes() / 60;
    
    return timeSlots.filter(slot => {
      return parseTime(slot) > currentDecimalTime;
    });
  };

  const availableSlots = getAvailableTimeSlots();

  return (
    <div className="w-full bg-[#fbf0fc]/30 rounded-[1.5rem] border border-[#E5E7EB] shadow-sm overflow-hidden mt-8 text-[#1f1a22] font-sans">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#500088]" />
          <h3 className="text-lg font-semibold text-[#1f1a22]">Schedule a Consultation</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[300px]">
          {/* Calendar Section */}
          <div className="flex-1 max-w-[320px]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-[#1f1a22]">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h4>
              <div className="flex items-center gap-2 text-[#4c4452]">
                <button 
                  type="button" 
                  onClick={handlePrevMonth}
                  className="p-1 hover:text-[#500088] hover:bg-[#fbf0fc] rounded-full transition-colors disabled:opacity-50"
                  disabled={new Date() > new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  type="button" 
                  onClick={handleNextMonth}
                  className="p-1 hover:text-[#500088] hover:bg-[#fbf0fc] rounded-full transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-xs text-[#7e7383] mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="font-medium">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 gap-x-2 justify-items-center">
              {renderCalendar()}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-[#E5E7EB]" />

          {/* Time Slots Section */}
          <div className="flex-[1.5]">
            {!selectedDate ? (
              <div className="h-full flex flex-col items-center justify-center text-[#7e7383] space-y-4">
                <CalendarIcon className="w-12 h-12 opacity-50" />
                <p className="text-sm">Select a date to view available time slots</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="h-full flex flex-col"
              >
                <h4 className="font-semibold text-[#1f1a22] mb-6">Available Time (IST)</h4>
                
                {availableSlots.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center text-[#4c4452] text-sm">
                    No time slots available for today. Please select another date.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 pr-2 lg:pr-6">
                    {availableSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`py-1.5 md:py-2 px-1 md:px-2 rounded-lg text-[11px] md:text-xs font-medium transition-all text-center shadow-sm whitespace-nowrap
                          ${selectedTime === time 
                            ? "bg-[#500088] border border-[#500088] text-white" 
                            : "bg-white border border-[#E5E7EB] text-[#4c4452] hover:border-[#500088] hover:text-[#500088]"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
