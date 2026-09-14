'use client';

import LazyVideo from '@/src/components/common/LazyVideo';

export default function VideoSection() {
  return (
    <section className="px-4 md:px-8 pb-8" aria-label="Live streaming">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-serif mb-3 flex items-center gap-2" style={{ color: '#5a3e0a' }}>
          Live Streaming video
          <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
        </h3>
        <div
          className="w-full rounded transition-shadow duration-200"
          style={{
            height: '420px',
            border: '2px solid #e67e22',
            backgroundColor: '#ffffff',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px 5px rgba(230,126,34,0.6)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
          }}
          role="region"
          aria-label="Live streaming video placeholder"
        >
          <div className="w-full h-full bg-black overflow-hidden rounded-sm relative">
            <LazyVideo
              controls
              className="w-full h-full object-cover"
              poster="/images/home/hero_image_3.jpg"
              src="/images/news/news-video.mp4"
              wrapperClassName="w-full h-full"
            >
              Your browser does not support the video tag.
            </LazyVideo>
          </div>
        </div>
      </div>
    </section>
  );
}
