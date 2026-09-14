'use client';

import FeaturedEventCard from '../events/FeaturedEventCard';

export default function UpcomingEventsSection() {
  return (
    <section className="px-4 md:px-8 pb-8" aria-label="Upcoming events">
      <h3 className="text-2xl font-serif mb-6 flex items-center gap-2" style={{ color: '#5a3e0a' }}>
        Upcoming Events
        <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
      </h3>

      {/* Featured Event */}
      <FeaturedEventCard />

      {/* Other Upcoming Events */}
      <div className="mt-8">
        <h4 className="text-xl font-serif mb-4 text-[#8b6914]">Other Upcoming Events</h4>
        <div
          className="w-full rounded overflow-hidden transition-shadow duration-200"
          style={{
            height: '340px',
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
          aria-label="Other upcoming events list"
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .upcoming-scroll::-webkit-scrollbar {
              width: 10px;
            }
            .upcoming-scroll::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-left: 1px solid #e0e0e0;
            }
            .upcoming-scroll::-webkit-scrollbar-thumb {
              background: #85C1E9;
              border-radius: 10px;
            }
            .upcoming-scroll {
              scrollbar-width: thin;
              scrollbar-color: #85C1E9 #f1f1f1;
            }
          `}} />
          <div className="upcoming-scroll h-full w-full overflow-y-auto bg-white">
            <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-6">
                <h4 className="text-[#e67e22] font-bold text-lg">Special Kirtan Darbar</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">Sunday, 25 June | 10:00 AM - 1:00 PM</p>
                <p className="text-sm mt-2 text-gray-700">Join us for a special weekend Diwan featuring prominent Raagi Jathas from overseas. Guru ka Langar will be served continuously.</p>
              </div>

              <div className="border-b md:border-b-0 border-gray-200 pb-4 md:pb-0">
                <h4 className="text-[#e67e22] font-bold text-lg">Youth Gurmat Camp</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">Saturday, 8 July | 9:00 AM - 4:00 PM</p>
                <p className="text-sm mt-2 text-gray-700">A one-day educational camp for children aged 7-15 to learn about Sikh history, Gurbani, and participate in fun community activities.</p>
              </div>

              <div className="border-b md:border-b-0 md:border-r md:border-t border-gray-200 pb-4 md:pb-0 md:pt-4 md:pr-6">
                <h4 className="text-[#e67e22] font-bold text-lg">Punjabi Classes Registration</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">Starting: 15 July</p>
                <p className="text-sm mt-2 text-gray-700">New term enrollments are now open for all age groups. Please visit the management office or check the school section to register online.</p>
              </div>

              <div className="pb-2 md:pt-4">
                <h4 className="text-[#e67e22] font-bold text-lg">Free Health Checkup</h4>
                <p className="text-sm text-gray-500 font-medium mt-1">Sunday, 30 July | 11:00 AM - 2:00 PM</p>
                <p className="text-sm mt-2 text-gray-700">A free general health checkup camp organized by volunteer doctors for the local community. Blood pressure, sugar levels, and general consultation provided.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
