import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Information | Sri Guru Singh Sabha',
  description: 'Contact details for Sri Guru Singh Sabha Craigieburn including address, phone, and email.',
};

export default function ContactInformationPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-lg px-4 py-8 md:px-8 md:py-8">
          <div className="mb-6">
            <h1 className="text-[22px] font-serif flex items-center gap-2" style={{ color: '#8b4513' }}>
              Contact Information
              <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
            </h1>
            <p className="text-[#ff6a00] text-[13px]">Get contact information of gurudwara</p>
          </div>

          <div className="bg-white rounded-lg border-[3px] border-[#ff6a00] p-4 md:p-8 hover:shadow-[0_0_30px_rgba(255,106,0,0.9)] transition-shadow duration-300">
            <div className="border border-[#fba45c] rounded-md overflow-x-auto mb-8">
              <table className="w-full text-[13px] md:text-[14px] text-left text-[#333] min-w-[350px]">
                <tbody>
                  <tr className="border-b border-dotted border-gray-400">
                    <td className="py-2 px-4 font-medium w-[120px] md:w-[150px]">NAME</td>
                    <td className="py-2 px-4">Gurdwara Sahib, Sri Guru Singh Sabha</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-400">
                    <td className="py-2 px-4 font-medium">ADDRESS</td>
                    <td className="py-2 px-4">344 Hume Highway, Craigieburn, VIC 3064, Australia</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-400">
                    <td className="py-2 px-4 font-medium">PHONE</td>
                    <td className="py-2 px-4">(03) 9305 6511</td>
                  </tr>
                  <tr className="border-b border-dotted border-gray-400">
                    <td className="py-2 px-4 font-medium">EMAIL</td>
                    <td className="py-2 px-4">contact@sgss.com.au</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">BUS</td>
                    <td className="py-2 px-4">Via Bus : 532 - Craigieburn - Broadmeado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-8">
              <h2 className="text-[20px] font-serif" style={{ color: '#8b6914' }}>
                Gurudwara Sahib, Sri Guru Singh Sabha
              </h2>
              <p className="text-[#ff6a00] text-[14px] mb-1">Sikh Cultural Society of Victoria Incorporated</p>
              <p className="text-gray-600 text-[12px] mb-4">ABN 13 553 721 764 | Registered Charity — Australian Charities and Not-for-profits Commission</p>

              <div className="text-[13px] md:text-[14px] text-[#333] space-y-1">
                <p>ADDRESS</p>
                <p>344 Hume Highway, Craigieburn, VIC 3064, Australia</p>

                <p className="pt-2">PH &amp; FAX:</p>
                <p>(03) 9305 6511</p>

                <p className="pt-2">EMAIL :</p>
                <p className="text-[#ff6a00]">contact@sgss.com.au</p>

                <p className="pt-2">FINANCIAL INQUIRIES:</p>
                <p className="text-[#ff6a00]">treasurer@sgss.com.au</p>

                <p className="pt-2">SCHOOL:</p>
                <p className="text-[#ff6a00]">school@sgss.com.au</p>

                <p className="pt-2">WEBMASTER:</p>
                <p className="text-[#ff6a00]">webmaster@sgss.com.au</p>
              </div>
            </div>

            <div className="text-[13px] md:text-[14px] text-[#333]">
              <p className="text-[#ff6a00] mb-2 pr-8">
                To make bookings at home or Gurudwara Sahib for Langar Sewa, Sahej Path, Akhand Path, Sukhmani Sahib Path and Keertan please contact
              </p>
              <p className="text-[#ff6a00] mb-4">0404 475 901</p>

              <p className="mb-1">To contact</p>
              <div className="space-y-1">
                <p>Granthi Singh</p>
                <p>PH: 0474 486 104</p>
                <p className="mt-2">Langri Singh</p>
                <p>0474 594 621</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
