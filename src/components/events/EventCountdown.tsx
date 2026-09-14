'use client';

import { useState, useEffect } from 'react';

interface EventCountdownProps {
  startDate: string; // ISO string
  endDate: string; // ISO string
  mainDate: string; // ISO string
}

export default function EventCountdown({ startDate, endDate, mainDate }: EventCountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // States for different phases
  const [phase, setPhase] = useState<'BEFORE' | 'DURING' | 'AFTER'>('BEFORE');
  const [currentDayLabel, setCurrentDayLabel] = useState<string>('');

  useEffect(() => {
    setMounted(true);
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const main = new Date(mainDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();

      if (now > end) {
        setPhase('AFTER');
        clearInterval(interval);
      } else if (now >= start && now <= end) {
        setPhase('DURING');

        // Determine which day it is
        const day22 = new Date("2026-11-22T00:00:00").getTime();
        const day23 = new Date("2026-11-23T00:00:00").getTime();
        const day24 = new Date("2026-11-24T00:00:00").getTime();
        const day25 = new Date("2026-11-25T00:00:00").getTime();

        // Let's dynamically calculate the day index
        const msPerDay = 24 * 60 * 60 * 1000;

        // We can just use the dates directly for our logic based on user spec
        const todayStr = new Date(now).toISOString().split('T')[0];

        if (todayStr === "2026-11-22") {
          setCurrentDayLabel("Day 1 of Gurpurab Celebrations");
        } else if (todayStr === "2026-11-23") {
          setCurrentDayLabel("Day 2 of Gurpurab Celebrations");
        } else if (todayStr === "2026-11-24") {
          setCurrentDayLabel("Main Gurpurab Today");
        } else if (todayStr === "2026-11-25") {
          setCurrentDayLabel("Final Day of Gurpurab Celebrations");
        } else {
          setCurrentDayLabel("Gurpurab Celebrations Are Underway");
        }

      } else {
        setPhase('BEFORE');
        const distance = start - now;
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate, mainDate]);

  if (!mounted) {
    return (
      <div className="flex gap-2 sm:gap-4 mt-4 opacity-0">
        <TimeUnit value="00" label="DAYS" />
        <TimeUnit value="00" label="HOURS" />
        <TimeUnit value="00" label="MIN" />
        <TimeUnit value="00" label="SEC" />
      </div>
    );
  }

  if (phase === 'AFTER') {
    return (
      <div className="mt-4">
        <p className="text-xs font-bold text-[#8b6914] tracking-widest mb-2 uppercase">Gurpurab Celebrations Concluded</p>
        <div className="inline-block bg-[#6b5a1e] text-white px-4 py-2 rounded font-bold border border-[#e67e22]">
          Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh
        </div>
      </div>
    );
  }

  if (phase === 'DURING') {
    return (
      <div className="mt-4">
        <p className="text-xs font-bold text-[#8b6914] tracking-widest mb-2 uppercase">Gurpurab Celebrations Are Underway</p>
        <div className="inline-block bg-[#e67e22] text-white px-4 py-2 rounded font-bold shadow-[0_0_12px_rgba(230,126,34,0.6)]">
          {currentDayLabel}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <p className="text-xs font-bold text-[#8b6914] tracking-widest mb-2 uppercase">Gurpurab Celebrations Begin In</p>
      <div className="flex gap-2 sm:gap-4">
        <TimeUnit value={timeLeft.days.toString().padStart(2, '0')} label="DAYS" />
        <TimeUnit value={timeLeft.hours.toString().padStart(2, '0')} label="HOURS" />
        <TimeUnit value={timeLeft.minutes.toString().padStart(2, '0')} label="MIN" />
        <TimeUnit value={timeLeft.seconds.toString().padStart(2, '0')} label="SEC" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white border border-[#e67e22] text-[#e67e22] font-mono text-xl sm:text-2xl lg:text-3xl font-bold w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded shadow-sm flex items-center justify-center">
        {value}
      </div>
      <span className="text-[10px] sm:text-xs font-bold text-[#7c5c0a] mt-1 tracking-wider">{label}</span>
    </div>
  );
}
