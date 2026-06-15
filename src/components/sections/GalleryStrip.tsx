'use client';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from '@/src/components/common/LazyImage';

const galleryItems = [
  { id: 1, alt: 'Darbar sahib', src: '/images/footer/footer1.jpg' },
  { id: 2, alt: 'Gurdwara dome', src: '/images/footer/footer2.jpg' },
  { id: 3, alt: 'Gurdwara activity', src: '/images/footer/footer3.jpg' },
  { id: 4, alt: 'Langar preparation', src: '/images/footer/footer4.jpg' },
  { id: 5, alt: 'Darbar sahib', src: '/images/footer/footer1.jpg' },
  { id: 6, alt: 'Gurdwara dome', src: '/images/footer/footer2.jpg' },
  { id: 7, alt: 'Gurdwara activity', src: '/images/footer/footer3.jpg' },
  { id: 8, alt: 'Langar preparation', src: '/images/footer/footer4.jpg' },
];

export default function GalleryStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="py-10 mt-10 relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/logos/slide_bg.png)' }}
      aria-label="Photo gallery carousel"
    >
      <div className="max-w-6xl mx-auto px-10 md:px-16 relative group">
        {/* Navigation arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-hidden snap-x snap-mandatory scroll-smooth"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden cursor-pointer flex-shrink-0 snap-start h-[130px] w-[calc(50%-24px)] sm:w-[calc(25%-36px)]"
              role="img"
              aria-label={item.alt}
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                wrapperClassName="w-full h-full"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <p className="text-white text-xs text-center px-2 font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
