'use client';

import { useState, useEffect } from 'react';

interface EventCountdownProps {
  targetDate: string; // ISO string
}

export default function EventCountdown({ targetDate }: EventCountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();
    
    // Using 24 hours after target date as completed
    const completionTime = target + 24 * 60 * 60 * 1000; 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        if (now > completionTime) {
          setIsCompleted(true);
          setIsStarted(false);
        } else {
          setIsStarted(true);
          setIsCompleted(false);
        }
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

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

  if (isCompleted) {
    return (
      <div className="mt-4 inline-block bg-[#6b5a1e] text-white px-4 py-2 rounded font-bold border border-[#e67e22]">
        Event Completed
      </div>
    );
  }

  if (isStarted) {
    return (
      <div className="mt-4 inline-block bg-[#e67e22] text-white px-4 py-2 rounded font-bold shadow-[0_0_12px_rgba(230,126,34,0.6)]">
        Gurpurab Today
      </div>
    );
  }

  return (
    <div className="mt-4">
      <p className="text-xs font-bold text-[#8b6914] tracking-widest mb-2 uppercase">Gurpurab Begins In</p>
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
