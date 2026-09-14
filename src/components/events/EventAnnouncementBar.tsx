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
        className="hidden lg:block bg-[#6b5a1e] text-white border-b-2 border-[#e67e22] w-full"
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center text-xs md:text-sm gap-2 md:gap-3 text-center">
          
          <div className="flex items-center gap-2 font-bold text-[#f5f0e8]">
            <Sparkles className="w-4 h-4 text-[#e67e22]" />
            <span className="tracking-wider">UPCOMING GURPURAB</span>
          </div>
          
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
          
          <span className="font-semibold">{featuredEvent.occasion} of {featuredEvent.title}</span>
          
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
          
          <span className="text-[#e8d9b5]">{featuredEvent.displayDate}</span>
          
          <div className="hidden sm:block w-1 h-1 rounded-full bg-[#e67e22]/50" />

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1 font-bold text-[#e67e22] hover:text-[#d97706] transition-colors group"
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
