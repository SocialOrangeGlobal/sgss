import Layout from '@/src/components/layout/Layout';
import HeroSlider from '@/src/components/sections/HeroSlider';
import DiwanPrograms from '@/src/components/sections/DiwanPrograms';
import QuickLinks from '@/src/components/sections/QuickLinks';
import VideoSection from '@/src/components/sections/VideoSection';
import UpcomingEventsSection from '@/src/components/sections/UpcomingEventsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Guru Singh Sabha | Craigieburn',
  description: 'Sri Guru Singh Sabha Craigieburn - A Sikh Gurdwara serving the community in Craigieburn, Victoria, Australia.',
  keywords: 'Gurdwara, Sikh, Craigieburn, Sri Guru Singh Sabha, Melbourne',
  openGraph: {
    title: 'Sri Guru Singh Sabha | Craigieburn',
    description: 'Sri Guru Singh Sabha Craigieburn - A Sikh Gurdwara serving the community.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Slider — DiwanPrograms + QuickLinks inside the same white card */}
      <HeroSlider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DiwanPrograms />
          <QuickLinks />
        </div>
      </HeroSlider>

      {/* Video Section (Live Streaming) */}
      <VideoSection />

      {/* Upcoming Events Section (Featured Event + Others) */}
      <UpcomingEventsSection />
    </Layout>
  );
}
