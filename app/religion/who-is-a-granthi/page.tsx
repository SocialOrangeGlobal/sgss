import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who is a Granthi | Sri Guru Singh Sabha',
  description: 'Learn about the role and responsibilities of a Granthi in a Sikh Gurdwara.',
};

export default function WhoIsGranthiPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Who is a Granthi
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              In Sikhism, a Granthi equates to a priest or &ldquo;minister of religion&rdquo;. A qualified Amritdhari (Baptised) Sikh can perform the duties of a Granthi. One appointed as a full time Granthi MUST be an Amritdhari (Baptised) practicing Sikh following the prescribed code of religious discipline, the Sikh Reht Maryada. He (or she) should have all the skills of a Paatthi (be able to read the holy Scriptures, Guru Granth Sahib), be able to interpret the Gurbani (sacred hymns in Guru Granth Sahib), deliver sermons to the holy congregation (Sangat) and do all the duties relating to the care of Guru Granth Sahib.
            </p>
            <p>
              At ceremonial occasions also able to do the other tasks associated with supplication (Ardaas) in the congregation (Sangat) and the morning evening ceremonies associated with Guru Granth Sahib e.g. first opening in the early morning and final closure of the holy Book in the evening. Preferably, a Granthi should be able to hold discourses, know the language of the country and carry out extrovert religious duties including those relating to the interfaith aspect. It is desirable but not essential that a Granthi be able to sing the sacred hymns i.e. musical proficiency is not a requirement.
            </p>
            <p>
              Also a Granthi must be able to teach reading and correct pronunciation of Guru Granth Sahib to any member of the congregation especially young children. Also, it is preferable that a Granthi should be married. A Granthi is a spiritual counsellor. He/She provides spiritual counselling to individuals and families as and when necessary
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
