import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Who is a Raagi | Sri Guru Singh Sabha',
  description: 'Learn about the role and significance of a Raagi in Sikhism.',
};

export default function WhoIsRaagiPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Who is a Raagi
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              A Raagi is a singer of sacred hymns. A professional Raagi must have a group called Raagi Jatha of at least three persons, the main singer (Head Raagi) the assistant singer/Side Raagi and a percussionist who usually plays Indian Tabla (two small drums placed side by side)
            </p>
            <p>
              Throughout the world a Raagi Jatha/group is always known by the name of main singer (head Raagi) with title/designation &ldquo;BHAI&rdquo;, e.g. Raagi Jatha/group of Bhai Satwinder Singh, even while selecting the Jatha/group he is the only personality who gets considered the most and he as a team leader is responsible for his group in all aspects, that how good are the other two in Gurmat Sangeet and the way they have attained their proficiency in Gurmat Sangeet.
            </p>
            <p>
              The head raagi/main singer has to be well qualified and professionally trained in Gurmat Sangeet, also he has to be proficient in all aspects of singing, narrating, the proper pronunciation of language and knowledge about Sikh History with a specialization in vocals, Ragas (musical scores) and Taals (musical rhythms). Also Head Raagi needs good literary, oratorical and personal skills.
            </p>
            <p>
              It is worth to mention that assistant raagi and percussionist can attain their training in Gurmat Sangeet privately under the tutorship of experienced raagi&rsquo;s in Gurudwara&rsquo;s and could be less proficient as compare to the Head Raagi. With an experience of 3 to 4 years minimum, they can become professional raagis to perform kirtan with head raagi.
            </p>
            <p>
              The Raagi Jatha should be proficient at singing of Gurmat Sangeet/Gurbani (sacred hymns) preferably to the musical scores and measures called Raga, in the manner they were originally composed and written as prescribed in Guru Granth Sahib (The Sacred Scripture of Sikhism).
            </p>
            <p>
              Two of the Raagis (main and his assistant) must be able to play harmonium or a string instrument. As beat is almost essential for Gurbani singing, so a Raagi Jatha always has a percussionist the third member of the Jatha/Group who plays Tabla.
            </p>
            <p>
              Raagi always acquire their training from a variety of sources &ndash; Gurmat Academies&rsquo;, Linguistic Study, private learning from experience Raagis and work experience.<br />
              Ability to speak local language, and narrate Gurbani meanings in Punjabi as well is essential for head raagi, so that they would be able to teach children and translate the hymns in between singing, for the benefit of young Sikh children and members of congregation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
