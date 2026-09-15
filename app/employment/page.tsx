import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employment | Sri Guru Singh Sabha',
  description: 'Employment opportunities at Sri Guru Singh Sabha Craigieburn.',
};

export default function EmploymentPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-12">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#8b6914' }}>
            Employment
          </h1>

          <div className="max-w-4xl mx-auto text-[#333] text-[13px] md:text-[14px]">
            <p className="mb-4">
              Eligibility and Required documents for the position of Ragi and Granthi
            </p>

            <h2 className="font-bold text-[14px] md:text-[15px] mb-2">Eligibility</h2>
            <ul className="list-disc pl-5 mb-6 space-y-0.5">
              <li>Minimum of 5 years' experience is essential.</li>
              <li>Gurmat education has to be obtained from a recognised institution.</li>
              <li>Computer knowledge an advantage.</li>
            </ul>

            <h2 className="font-bold text-[14px] md:text-[15px] mb-2">Required Documents</h2>
            <ul className="list-disc pl-5 mb-6 space-y-0.5">
              <li>Bio data- name, address, phone. No. e-mail id, passport no. qualification, professional qualification, experience, reference phone No of secretary or president for present duty. (with complete details of duties in different Gurudwara's in India and abroad if any)</li>
              <li>Educational certificates</li>
              <li>Gurmat Education certificates (required reference checks from college from where they have done the courses)</li>
              <li>Experience certificates from all the Gurudwara's.</li>
              <li>Present duty certificate stating the duration that how long serving the Gurudwara with position.</li>
              <li>Any other appreciation certificates from Gurudwara's or societies.</li>
              <li>Passport copies front and back page</li>
              <li>Visa copies if travelled to any country</li>
              <li>Any document in Punjabi or Hindi must be translated into English by notary need both</li>
              <li>You tube reference if any.</li>
            </ul>

            <p className="mb-6">
              All these documents have to be properly coloured scanned, the selection criteria is reference checks, performance and experience, if travelled overseas it is an advantage.
            </p>

            <h2 className="font-bold text-[14px] md:text-[15px] mb-2">How to Apply</h2>
            <p>
              Please email all the documents to <a href="mailto:contact@sgss.com.au" className="text-[#ff6a00] hover:underline">contact@sgss.com.au</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
