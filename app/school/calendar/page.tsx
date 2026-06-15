import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calender 2019 | Sri Guru Singh Sabha Craigieburn',
  description: 'School calendar and term dates.',
};

export default function CalendarPage() {
  const terms = [
    {
      term: 'Term 1',
      dates: '3 February – 5 April',
      holidays: 'Labour Day (11 March)',
    },
    {
      term: 'Term 2',
      dates: '23 April – 28 June',
      holidays: 'Queen\'s Birthday (10 June)',
    },
    {
      term: 'Term 3',
      dates: '15 July – 20 September',
      holidays: 'No Public Holidays',
    },
    {
      term: 'Term 4',
      dates: '7 October – 20 December',
      holidays: 'Melbourne Cup (5 November)',
    },
  ];

  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8 min-h-[500px]">
          
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Calender 2019
          </h1>

          {/* The main layout box from the screenshot */}
          <div className="max-w-4xl mx-auto border border-[#cfcfcf] p-4 md:p-8" style={{ minHeight: '400px' }}>
            
            <h2 className="text-xl font-bold mb-6 text-center" style={{ color: '#ff6a00' }}>
              Punjabi School Term Dates
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse" style={{ backgroundColor: '#f0f9fa' }}>
                <thead>
                  <tr className="border-b" style={{ borderColor: '#e2e8f0', backgroundColor: '#e9f5f5' }}>
                    <th className="py-3 px-4 font-semibold text-sm" style={{ color: '#5a6b78' }}>Term</th>
                    <th className="py-3 px-4 font-semibold text-sm" style={{ color: '#5a6b78' }}>Dates</th>
                    <th className="py-3 px-4 font-semibold text-sm" style={{ color: '#5a6b78' }}>Public Holidays</th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((t, i) => (
                    <tr key={i} className="border-b border-dashed" style={{ borderColor: '#cbd5e1' }}>
                      <td className="py-3 px-4 font-medium text-sm" style={{ color: '#8b6508' }}>{t.term}</td>
                      <td className="py-3 px-4 text-sm text-[#333]">{t.dates}</td>
                      <td className="py-3 px-4 text-sm text-[#333]">{t.holidays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 border rounded-sm" style={{ backgroundColor: '#fdfaf6', borderColor: '#f5e6d3' }}>
              <h3 className="font-bold mb-2 text-sm" style={{ color: '#8b6508' }}>Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#444]">
                <li>School classes are held every Sunday from 10:00 AM to 1:00 PM.</li>
                <li>There are no classes during the school holidays between terms.</li>
                <li>Please arrive 10 minutes early to ensure classes start on time.</li>
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </Layout>
  );
}
