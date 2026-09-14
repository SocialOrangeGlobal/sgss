'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { featuredEvent } from '@/src/data/events';
import EventDetailsModal from './EventDetailsModal';

export default function EventAnnouncementBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!featuredEvent.featured) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-[#6b5a1e] text-white border-b-2 border-[#e67e22] w-full"
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-center text-sm gap-1 md:gap-3 text-center md:text-left">

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center gap-2 font-bold text-[#f5f0e8]">
            <Sparkles className="w-4 h-4 text-[#e67e22]" />
            <span className="tracking-wider text-xs md:text-sm">UPCOMING GURPURAB</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
          <span className="hidden md:block font-semibold">{featuredEvent.occasion} of {featuredEvent.title}</span>
          <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
          <span className="hidden md:block text-[#e8d9b5] text-xs md:text-sm">{featuredEvent.displayDate}</span>
          <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center gap-1 mb-2">
            <div className="flex items-center gap-2 font-bold text-[#f5f0e8] mb-1">
              <Sparkles className="w-4 h-4 text-[#e67e22]" />
              <span className="tracking-wider text-xs">UPCOMING GURPURAB</span>
            </div>
            <span className="font-semibold text-[#e8d9b5]">{featuredEvent.occasion}</span>
            <span className="font-bold">{featuredEvent.title}</span>
            <span className="text-[#e8d9b5] text-xs font-bold tracking-widest mt-1 uppercase">22–25 NOV 2026</span>
            <div className="flex flex-col items-center mt-1 text-[#e8d9b5] text-xs">
              <span className="opacity-80">Main Gurpurab</span>
              <span className="font-bold text-white">24 November</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 font-bold text-[#e67e22] hover:text-[#d97706] transition-colors group mt-1 md:mt-0"
          >
            View Program
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <EventDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
