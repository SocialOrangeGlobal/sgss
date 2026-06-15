import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daily and Weekly Programs | Sri Guru Singh Sabha',
  description: 'Daily and weekly programs at Sri Guru Singh Sabha Craigieburn.',
};

export default function DailyWeeklyPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-12">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#8b6914' }}>
            Daily and Weekly
          </h1>

          <div className="max-w-6xl mx-auto text-[#333] text-[13px] md:text-[14px]">
            <p className="mb-4">
              Details of daily routine, Wednesday and Sunday program
            </p>

            <div className="border border-gray-200 overflow-x-auto">
              <table className="w-full text-left min-w-[800px]">
                <thead>
                  <tr className="bg-[#f4faf9] border-b border-gray-300">
                    <th colSpan={2} className="py-3 px-4 font-normal text-[#555]">Daily Programme</th>
                    <th colSpan={2} className="py-3 px-4 font-normal text-[#555]">Wednesday Diwan</th>
                    <th colSpan={2} className="py-3 px-4 font-normal text-[#555]">Sunday Diwan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Parkash</td>
                    <td className="py-2 px-4">4:30 am</td>
                    <td className="py-2 px-4">Rehras</td>
                    <td className="py-2 px-4">6:00 pm</td>
                    <td className="py-2 px-4">Sampooran Asa Di Vaar</td>
                    <td className="py-2 px-4">7:00 am to 8:30 am</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Nitnem</td>
                    <td className="py-2 px-4">5:00 to 6:30 am</td>
                    <td className="py-2 px-4">Katha</td>
                    <td className="py-2 px-4">6:30 pm</td>
                    <td className="py-2 px-4">Keertan & Katha</td>
                    <td className="py-2 px-4">10.00 to 12:30 am</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Asa Di Vaar</td>
                    <td className="py-2 px-4">6:30 to 7:30 am</td>
                    <td className="py-2 px-4">Keertan</td>
                    <td className="py-2 px-4">7:00 to 8:00 pm</td>
                    <td className="py-2 px-4">Ardas & Hukamnama</td>
                    <td className="py-2 px-4">12:30 to 1:00 pm</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Rehras</td>
                    <td className="py-2 px-4">6:00 pm</td>
                    <td className="py-2 px-4">Ardas & Sukhasan</td>
                    <td className="py-2 px-4">8:00 to 8:30 pm</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Katha</td>
                    <td className="py-2 px-4">6:30 to 7:10 pm</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-4">Keertan</td>
                    <td className="py-2 px-4">7:10 to 8:10 pm</td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Sukhasan</td>
                    <td className="py-2 px-4">8:15 pm</td>
                    <td className="py-2 px-4">Guru Ka Langar</td>
                    <td className="py-2 px-4">7:00 pm</td>
                    <td className="py-2 px-4">Guru Ka Langar</td>
                    <td className="py-2 px-4">12:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
