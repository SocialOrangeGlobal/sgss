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
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-4">
               <span className="text-gray-800 font-bold text-lg">{featuredEvent.displayDate}</span>
               <span className="hidden sm:inline text-gray-400">•</span>
               <span className="text-[#e67e22] font-semibold">Main Gurpurab · {featuredEvent.mainDay}</span>
            </div>
            
            <p className="text-gray-700 max-w-2xl text-sm md:text-base leading-relaxed mb-8">
              {featuredEvent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center w-full sm:w-auto gap-2 bg-[#6b5a1e] hover:bg-[#e67e22] text-white px-6 py-2.5 rounded font-bold transition-colors"
              >
                View Full Program
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
            <div className="flex flex-col md:items-end w-full mb-8 md:mb-0">
               <div className="flex justify-between w-full md:w-auto md:gap-8 items-center border-b border-[#e67e22]/20 pb-4 mb-4">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-bold text-[#e67e22] leading-none">22</span>
                    <span className="text-sm font-bold text-[#5a3e0a] uppercase mt-1">Nov</span>
                  </div>
                  <span className="text-[#8b6914] text-xs font-bold tracking-widest mx-4">— TO —</span>
                  <div className="flex flex-col items-center">
                    <span className="text-4xl md:text-5xl font-bold text-[#e67e22] leading-none">25</span>
                    <span className="text-sm font-bold text-[#5a3e0a] uppercase mt-1">Nov</span>
                  </div>
               </div>
               
               <div className="text-center md:text-right w-full">
                 <span className="text-[#8b6914] text-sm md:text-base tracking-widest font-bold uppercase block mb-2">4 Day Celebration</span>
                 <span className="text-gray-500 text-xs font-bold tracking-wider uppercase block">Main Day</span>
                 <span className="text-[#5a3e0a] font-bold text-lg">24 Nov · Tuesday</span>
               </div>
            </div>
            
            {/* Countdown */}
            <div className="w-full">
              <EventCountdown 
                startDate={featuredEvent.startDate} 
                endDate={featuredEvent.endDate} 
                mainDate={featuredEvent.mainDate} 
              />
            </div>
            
          </div>
          
        </div>
      </motion.div>

      {/* Modal */}
      <EventDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
