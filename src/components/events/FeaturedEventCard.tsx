'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import EventCountdown from './EventCountdown';
import EventDetailsModal from './EventDetailsModal';
import AddToCalendar from './AddToCalendar';
import { featuredEvent } from '@/src/data/events';

export default function FeaturedEventCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!featuredEvent.featured) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full relative rounded overflow-hidden shadow-sm mb-8 group bg-white"
        style={{ border: '2px solid #e67e22' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px 5px rgba(230,126,34,0.6)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        }}
      >
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row h-full">
          
          {/* Main Info */}
          <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            
            <div className="inline-block bg-[#e67e22] text-white px-3 py-1 rounded text-xs font-bold tracking-widest mb-4 uppercase self-start">
              {featuredEvent.category}
            </div>
            
            <h3 className="text-[#8b6914] text-xl md:text-2xl font-bold mb-1">
              {featuredEvent.occasion}
            </h3>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#5a3e0a] mb-4 leading-tight">
              {featuredEvent.title}
            </h2>
            
            <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed mb-8">
              {featuredEvent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center w-full sm:w-auto gap-2 bg-[#6b5a1e] hover:bg-[#e67e22] text-white px-6 py-2.5 rounded font-bold transition-colors"
              >
                View Program
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <AddToCalendar event={featuredEvent} />
            </div>
          </div>
          
          {/* Right Side: Date & Countdown */}
          <div 
            className="md:w-[380px] lg:w-[420px] border-t md:border-t-0 md:border-l border-gray-200 p-6 md:p-10 lg:p-12 flex flex-col justify-between items-start md:items-end md:text-right"
            style={{ 
              backgroundImage: "url('/images/logos/bg_img.jpg')", 
              backgroundRepeat: 'repeat',
              backgroundColor: '#f9f5ee',
              backgroundBlendMode: 'multiply'
            }}
          >
            
            {/* Elegant Date Badge */}
            <div className="flex items-center md:items-end gap-4 md:flex-col md:gap-1 mb-8 md:mb-0">
              <div className="text-[#e67e22] mb-1 md:hidden">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-[#8b6914] text-lg uppercase tracking-widest font-bold">{featuredEvent.day}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-[#e67e22] leading-none">24</span>
                  <span className="text-xl md:text-2xl font-bold text-[#5a3e0a] uppercase">Nov</span>
                </div>
                <span className="text-gray-500 font-mono tracking-widest mt-1">2026</span>
              </div>
            </div>
            
            {/* Countdown */}
            <div className="w-full">
              <EventCountdown targetDate={featuredEvent.date} />
            </div>
            
          </div>
          
        </div>
      </motion.div>

      {/* Modal */}
      <EventDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
