'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Sri Guru Singh Sabha (Craigieburn)',
    imageBg: 'url(/images/home/hero_image_1.jpg)',
    imageAlt: 'Sri Guru Singh Sabha Gurdwara daytime view',
  },
  {
    id: 2,
    title: 'Sri Guru Singh Sabha (Craigieburn)',
    imageBg: 'url(/images/home/hero_image_2.jpg)',
    imageAlt: 'Sri Guru Singh Sabha Gurdwara nighttime illuminated view',
  },
  {
    id: 3,
    title: 'Sri Guru Singh Sabha (Craigieburn)',
    imageBg: 'url(/images/home/hero_image_3.jpg)',
    imageAlt: 'Sri Guru Singh Sabha interior Darbar Sahib',
  },
];

interface HeroSliderProps {
  children?: React.ReactNode;
}

export default function HeroSlider({ children }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section aria-label="Hero image slideshow" className="bg-[#efeeed] pt-0 pb-6 overflow-hidden">
      <div className="mx-2 md:mx-6 bg-white rounded-[8px] pt-[3px] pb-[19px] px-0 border border-[#cfcfcf]">

        {/* Title — no bottom padding so image sits flush below */}
        <h2
          className="text-center text-xl md:text-2xl lg:text-[28px] pt-8 px-4 font-serif"
          style={{ color: '#333333' }}
        >
          {slides[current].title}
        </h2>

        {/* Carousel — mt-0 to touch title */}
        <div className="relative overflow-hidden mx-2 md:mx-6 h-[200px] sm:h-[280px] md:h-[480px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: slides[current].imageBg }}
              aria-label={slides[current].imageAlt}
            >
              {/* Slide dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="w-2 h-2 rounded-full transition-colors duration-200"
                    style={{ backgroundColor: i === current ? '#e67e22' : 'rgba(255,255,255,0.5)' }}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current ? 'true' : 'false'}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white rounded-full opacity-80 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '2px solid rgba(255,255,255,0.3)' }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white rounded-full opacity-80 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '2px solid rgba(255,255,255,0.3)' }}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* DiwanPrograms + QuickLinks rendered inside the white card */}
        {children && (
          <div className="pt-8 px-4 md:px-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
