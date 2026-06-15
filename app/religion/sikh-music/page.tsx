import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sikh Music | Sri Guru Singh Sabha',
  description: 'Explore the rich tradition of Sikh Kirtan and Shabad Gurbani music.',
};

export default function SikhMusicPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Sikh Music
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              In Sikhism the Sikh Gurus have bestowed a unique and effective technology to be attached to God at every moment of our lives, to pick us up when we are down, to give us strength when we are weak, during time of happiness (like marriage and when a new born baby enters the family) and to help us train our minds to shy away from sin.
            </p>
            <p>
              This powerful technology in Sikhism is called &lsquo;GURMAT SANGEET&rsquo; which essentially is a detailed and scientific structure of Musicology to help someone harness the power of ones emotions such as sadness, happiness, longing, excitement, etc. and channel these emotions to unite our minds with the Ultimate Reality, God.
            </p>
            <p>
              All the hymns that have been written in Sri Guru Granth Sahib (the Holy Scripture of Sikhism) are meant to be sung in prescribed musical measures which are essentially meant to convey a specific emotion to the human psyche that is consistent with the theme of the hymn being sung. These musical measures can be called &lsquo;moods&rsquo; in English and in the language of Sikhism these musical measures called &lsquo;RAAG&rsquo;.
            </p>
            <p>
              It is important to mention that Sri Guru Granth Sahib has been compiled and indexed not accordingly to chronological order or by author but are categorized by musical measures.
            </p>
            <p>
              In Sri Guru Granth Sahib there are 31 RAAGA&rsquo;s and 31 sub-Raagas and is indexed according to these 31 Musical Measures/Raagas.
            </p>
            <p>
              Hence the essence of Gurmat Sangeet is the singing of Gurbani (sacred hymns/Guru&rsquo;s word) by RAAGI&rsquo;S in the manner prescribed in Sri Guru Granth Sahib (the Holy Scripture of Sikhism)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
