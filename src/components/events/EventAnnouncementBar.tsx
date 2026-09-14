'use client';

import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import { featuredEvent } from '@/src/data/events';

export default function EventAnnouncementBar() {
  if (!featuredEvent.featured) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-[#6b5a1e] text-white border-b-2 border-[#e67e22] w-full"
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-center text-sm gap-1 md:gap-3 text-center md:text-left">
        <div className="flex items-center gap-2 font-bold text-[#f5f0e8]">
          <Sparkles className="w-4 h-4 text-[#e67e22]" />
          <span className="tracking-wider text-xs md:text-sm">UPCOMING GURPURAB</span>
        </div>
        <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
        <span className="font-semibold">{featuredEvent.occasion} of {featuredEvent.title}</span>
        <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
        <span className="text-[#e8d9b5] text-xs md:text-sm">{featuredEvent.day}, {featuredEvent.displayDate}</span>
        <div className="hidden md:block w-1 h-1 rounded-full bg-[#e67e22]/50" />
        <button className="inline-flex items-center gap-1 font-bold text-[#e67e22] hover:text-[#d97706] transition-colors group mt-1 md:mt-0">
          View Details
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
