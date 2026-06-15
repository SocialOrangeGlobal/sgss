import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sri Guru Singh Sabha Craigieburn',
  description: 'Learn about the history and facilities of Sri Guru Singh Sabha Craigieburn.',
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            About Us
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-6 text-[14px] md:text-[15px] leading-relaxed">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>Gurudwara</h2>
              <p>
                This Gurudwara Sahib is the center of the local Sikh community, spreading the values of sikhism and fulfilling the religious needs of the community. People from a radius of around 35Kms come here every Sunday and Wednesday, for the Diwans (Prayers). This Gurudwara Sahib offers some free facilities to the public, such as the Use of kitchen, Van for Sri Guru Granth Sahib Ji, and Rooms for stay.
              </p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2" style={{ color: '#8b6508' }}>History</h2>
              <p className="mb-4">
                Sri Guru Singh Sabha actually originated in 1977 and the weekly diwans of the SGSS Gurudwara started in High School Tyler Street, Preston. In 1989 the constitution of Sri Guru Singh Sabha was rewritten.
              </p>

              <p className="mb-4">
                The place where Gurudawara Sahib now stands was bought in April 1992, The Foundation stone of Gurudawara Sahib was laid in 1993 by the Congregation and then first Diwan was held at that Place in a tent.
              </p>

              <p className="mb-4">
                In the year 1991 the collection campaign for the construction started with the contributions from sangat in UK , New Zealand, Canada and Australia.<br />
                In 1994 as the kicthen and the Langar Hall were ready, the weekly Diwans started to be held in the Langar Hall. But the construction Plans had to be ammended further in 1996 so the construction of rest of the steel structure restarted in 1997 and are still in progress under the follow on committee elected every year
              </p>

              <p>
                This Gurudawara was designed keeping in mind the Traditional design and structure of the Indian Historical Gurudawaras which will be prominent in the special design of the Gurudawara Building. The completed Gurudawara building has a 25M x 40M hall, al library a small hall and an office on Level 1 and langar hall, kitchen and residence for raagis on the ground floor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
