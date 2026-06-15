import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Present Raagis | Sri Guru Singh Sabha Craigieburn',
  description: 'Get information of your local Ragi Singhs.',
};

const people = [
  { alt: 'Granthi and Raagi Ragi Jatha Bhai Tarsem Singh', src: '/images/news/news1.jpeg', name: 'Bhai Tarsem Singh' },
  { alt: 'Granthi and Raagi Bhai Boota Singh Ji', src: '/images/news/news2.jpeg', name: 'Bhai Boota Singh Ji' },
  { alt: 'Granthi and Raagi Bhai Diakaran Singh Ji', src: '/images/news/news4.jpg', name: 'Bhai Diakaran Singh Ji' },
];

export default function GranthisAndRaagisPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">

          <div className="mb-4">
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif flex items-center gap-2" style={{ color: '#5a3e0a' }}>
              Present Raagis
              <img src="/images/logos/tool.png" alt="" className="h-5 w-auto inline-block" />
            </h1>
            <p className="mt-1 text-[15px]" style={{ color: '#e67e22' }}>
              Get information of your local Ragi Singhs.
            </p>
          </div>

          <div
            className="rounded-md border p-1 mx-auto md:mx-0"
            style={{ borderColor: '#e67e22', width: '100%', maxWidth: '340px', height: '350px' }}
          >
            <div
              className="h-full overflow-y-auto pr-1 space-y-2 custom-scrollbar"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#93c5fd transparent'
              }}
            >
              <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background-color: #93c5fd;
                  border-radius: 20px;
                }
              `}</style>

              {people.map((person, index) => (
                <div key={index} className="bg-[#ebebeb] p-2 text-center flex flex-col justify-center min-h-[80px]">
                  <img
                    src={person.src}
                    alt={person.alt}
                    className="w-full h-auto object-cover rounded shadow-sm"
                    style={{ minHeight: '60px', maxHeight: '200px' }}
                  />
                  <p className="mt-2 font-medium text-[15px] text-[#e67e22]">{person.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
