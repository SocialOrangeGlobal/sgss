import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Language | Sri Guru Singh Sabha',
  description: 'Learn about the Punjabi language and Gurmukhi script used in Sikh scripture.',
};

export default function LanguagePage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Language
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              It is used in the Sikh scripture and in contemporary India. It is an evolute from the old Brahmi script like Devanagari and other scripts of the area like Sharda, Takri, Mahajani etc. Gurmukhi characters are even older than Devanagari. The word Gurmukhi seems to have gained currency from the use of these letters to record the sayings coming from the mukh (literally mouth or lips) of the (Sikh) Gurus.<br />
              The letters no doubt existed before the time of Guru Angad Dev(even of Guru Nanak) as they had their origin in the Brahmi, but the origin of the script is attributed to Guru Angad Dev
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
