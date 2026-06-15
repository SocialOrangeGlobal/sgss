import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities | Sri Guru Singh Sabha Craigieburn',
  description: 'Facilities offered by Sri Guru Singh Sabha Craigieburn including Transit Van, Kitchen, and Rooms for Stay.',
};

export default function FacilitiesPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Facilities
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-6 text-[14px] md:text-[15px] leading-relaxed">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>Van for Sri Guru Granth Sahib Ji</h2>
              <p>
                Gurdwara Sahib offers the Sangat to use the specially modified van to take and return the Swaroop of Sri Guru Granth Sahib. with full respect and dignity. To use the van the user must have a valid Australian driving license and will be fully resposible for any damage to the vehicle during that time. Fuel cost will be borne by the use.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>Sangat Transit Van</h2>
              <p className="mb-4">
                Free Bus Service is available from Craigieburn Train Station. Runs every 10 minutes between Gurudwara Sahib and Craigieburn Train Station
              </p>

              <div className="overflow-x-auto my-4 max-w-4xl">
                <table className="w-full text-left border-collapse" style={{ backgroundColor: '#f0f9fa' }}>
                  <thead>
                    <tr className="border-b" style={{ borderColor: '#e2e8f0', backgroundColor: '#e9f5f5' }}>
                      <th className="py-2 px-4 text-xs font-semibold" style={{ color: '#5a6b78' }}>Day</th>
                      <th className="py-2 px-4 text-xs font-semibold" style={{ color: '#5a6b78' }}>Starts</th>
                      <th className="py-2 px-4 text-xs font-semibold" style={{ color: '#5a6b78' }}>Ends</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-dashed" style={{ borderColor: '#cbd5e1' }}>
                      <td className="py-2 px-4 text-sm">Sundays</td>
                      <td className="py-2 px-4 text-sm">9.00 AM</td>
                      <td className="py-2 px-4 text-sm">5.00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm">Wednesdays</td>
                      <td className="py-2 px-4 text-sm">6.00 PM</td>
                      <td className="py-2 px-4 text-sm">9.30 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>Rooms For Stay</h2>
              <p>
                Gurdwara Sahib offers the Sikh Sangat to use the rooms for stay. If you are coming to Melbourne, you can stay in the rooms, but please confirm the booking before arriving
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>Kitchen</h2>
              <p>
                Gurdwara Sahib has a spacious and well equipped kitchen which the sangat can use during their weekly programmes. The families who would like to use the kitchen for their personal programme can contact the management committee prior to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
