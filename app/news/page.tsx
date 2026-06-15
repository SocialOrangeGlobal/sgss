import Layout from '@/src/components/layout/Layout';
import LazyImage from '@/src/components/common/LazyImage';
import LazyVideo from '@/src/components/common/LazyVideo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | Sri Guru Singh Sabha Craigieburn',
  description: 'Latest news and updates from Sri Guru Singh Sabha Craigieburn.',
};

const newsImages = [
  'news1.jpeg',
  'news2.jpeg',
  'news3.png',
  'news4.jpg',
  'news5.jpg',
  'news6.jpg',
  'news7.jpg',
  'news8.jpg',
  'news9.jpg',
];

export default function NewsPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-4" style={{ color: '#5a3e0a' }}>
            News
          </h1>

          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            {/* Render all news images stacked vertically */}
            {newsImages.map((imageName, index) => (
              <LazyImage
                key={index}
                src={`/images/news/${imageName}`}
                alt={`News Update ${index + 1}`}
                className="w-full h-auto object-cover rounded hover:scale-[1.01] transition-transform duration-300"
                wrapperClassName="w-full h-auto overflow-hidden rounded shadow-md border border-[#cfcfcf]"
              />
            ))}

            {/* Render the video at the end */}
            <div className="w-full mt-4">
              <LazyVideo
                controls
                className="w-full h-auto shadow-md rounded border border-[#cfcfcf]"
                preload="metadata"
                poster="/images/home/hero_image_3.jpg"
                src="/images/news/news-video.mp4"
                wrapperClassName="w-full h-auto"
              >
                Your browser does not support the video tag.
              </LazyVideo>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
