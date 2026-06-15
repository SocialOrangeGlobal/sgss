import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookings | Sri Guru Singh Sabha',
  description: 'Bookings for Sri Guru Singh Sabha Craigieburn',
};

export default function BookingsPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-12">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#8b6914' }}>
            Bookings
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-4 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              For Langar and any program bookings (Anand Karaj, Sukhmani Sahib, Akhand Path Sahib. etc.)<br />
              Please contact:
            </p>
            <p className="text-[18px] md:text-[20px] font-bold" style={{ color: '#8b6914' }}>
              040 4475 901
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
