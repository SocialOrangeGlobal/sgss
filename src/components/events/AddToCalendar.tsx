'use client';

import { useState, useRef, useEffect } from 'react';
import { CalendarPlus, Download, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';

interface AddToCalendarProps {
  event: {
    title: string;
    description: string;
    location: string;
    startDate: string; // ISO string
    endDate: string; // ISO string
    mainDate: string; // ISO string
  };
}

export default function AddToCalendar({ event }: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const handleGoogleCalendar = (type: 'full' | 'main') => {
    let start, end, titleSuffix;

    if (type === 'full') {
      start = new Date(event.startDate);
      end = new Date(event.endDate);
      titleSuffix = " (4-Day Celebration)";
    } else {
      start = new Date(event.mainDate);
      end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // 4 hours for main event
      titleSuffix = " (Main Gurpurab)";
    }

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title + titleSuffix
    )}&dates=${formatICSDate(start)}/${formatICSDate(end)}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
    setIsOpen(false);
  };

  const handleDownloadICS = (type: 'full' | 'main') => {
    let start, end, titleSuffix;

    if (type === 'full') {
      start = new Date(event.startDate);
      end = new Date(event.endDate);
      titleSuffix = " (4-Day Celebration)";
    } else {
      start = new Date(event.mainDate);
      end = new Date(start.getTime() + 4 * 60 * 60 * 1000); // 4 hours for main event
      titleSuffix = " (Main Gurpurab)";
    }

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${formatICSDate(start)}`,
      `DTEND:${formatICSDate(end)}`,
      `SUMMARY:${event.title}${titleSuffix}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/\s+/g, '_')}_${type}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full sm:w-auto gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-[#7c5c0a] font-medium rounded hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <CalendarPlus className="w-4 h-4" />
        <span>Add to Calendar</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:left-0 sm:right-auto bottom-full mb-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[100] overflow-hidden transform origin-bottom transition-all">
          <div className="py-1" role="menu" aria-orientation="vertical">

            <div className="px-4 py-2 bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Full Celebration (22-25 Nov)
            </div>
            <button
              onClick={() => handleGoogleCalendar('full')}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f9f5ee] hover:text-[#d97706] transition-colors text-left"
              role="menuitem"
            >
              <CalendarIcon className="w-4 h-4 mr-3" />
              Google Calendar
            </button>
            <button
              onClick={() => handleDownloadICS('full')}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f9f5ee] hover:text-[#d97706] transition-colors text-left"
              role="menuitem"
            >
              <Download className="w-4 h-4 mr-3" />
              Download (.ics)
            </button>

            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
              Main Gurpurab (24 Nov)
            </div>
            <button
              onClick={() => handleGoogleCalendar('main')}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f9f5ee] hover:text-[#d97706] transition-colors text-left"
              role="menuitem"
            >
              <CalendarIcon className="w-4 h-4 mr-3" />
              Google Calendar
            </button>
            <button
              onClick={() => handleDownloadICS('main')}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f9f5ee] hover:text-[#d97706] transition-colors text-left"
              role="menuitem"
            >
              <Download className="w-4 h-4 mr-3" />
              Download (.ics)
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
