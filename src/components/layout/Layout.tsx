import Header from '@/src/components/navigation/Header';
import Footer from '@/src/components/layout/Footer';
import EventAnnouncementBar from '@/src/components/events/EventAnnouncementBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundImage: "url('/images/logos/bg_img.jpg')", backgroundRepeat: 'repeat' }}>
      <div className="max-w-6xl mx-auto px-4 pt-6 pb-8 md:pt-24 md:pb-12">
        {/* Main white content card */}
        <div className="bg-[#efeeed] shadow-md rounded-lg overflow-hidden">
          <Header />
          <EventAnnouncementBar />
          <main id="main-content" role="main">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
