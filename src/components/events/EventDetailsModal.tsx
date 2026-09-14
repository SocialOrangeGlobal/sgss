'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CalendarDays, Clock } from 'lucide-react';
import AddToCalendar from './AddToCalendar';
import { featuredEvent } from '@/src/data/events';

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDetailsModal({ isOpen, onClose }: EventDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      // Simple focus management - focus modal when opened
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#fdfbf7] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-full outline-none"
          >
            {/* Header / Banner */}
            <div 
              className="relative text-white px-6 py-8 md:px-10 md:py-10 flex-shrink-0"
              style={{ 
                backgroundImage: "url('/images/logos/bg_img.jpg')", 
                backgroundRepeat: 'repeat',
                backgroundColor: '#6b5a1e',
                backgroundBlendMode: 'multiply'
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-block bg-[#e67e22] text-white px-3 py-1 rounded text-xs font-bold tracking-wider mb-4 shadow-sm uppercase">
                {featuredEvent.category}
              </div>
              
              <h2 id="modal-title" className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 leading-tight">
                {featuredEvent.title}
              </h2>
              <p className="text-[#e8d9b5] text-lg md:text-xl font-medium">
                {featuredEvent.occasion}
              </p>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6 md:p-10 text-[#333333]">
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Left Column: Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#8b6914] mb-3">About the Event</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {featuredEvent.description}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm space-y-4">
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 text-[#e67e22] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">{featuredEvent.day}, {featuredEvent.displayDate}</p>
                        <p className="text-sm text-gray-500">Mark your calendar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#e67e22] mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">{featuredEvent.location}</p>
                        <p className="text-sm text-gray-500">Main Darbar Hall</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <AddToCalendar event={featuredEvent} />
                  </div>
                </div>

                {/* Right Column: Program Schedule */}
                <div className="w-full md:w-[320px] flex-shrink-0">
                  <div className="bg-[#f9f5ee] rounded-lg p-6 border border-[#e8d9b5]/50">
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className="w-5 h-5 text-[#8b6914]" />
                      <h3 className="text-lg font-bold text-[#8b6914]">Program Schedule</h3>
                    </div>
                    
                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#e8d9b5] before:to-transparent hidden"></div>
                    
                    <ul className="space-y-4 relative">
                      {/* Decorative vertical line */}
                      <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[#e8d9b5]" />
                      
                      {featuredEvent.programSchedule.map((item, index) => (
                        <li key={index} className="relative pl-6">
                          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#e67e22] shadow-sm z-10" />
                          <div className="font-semibold text-[#5a3e0a]">{item.event}</div>
                          <div className="text-sm text-gray-500 mt-0.5">{item.time}</div>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-500 mt-6 italic bg-white/50 p-2 rounded">
                      Detailed timings will be announced closer to the event date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
