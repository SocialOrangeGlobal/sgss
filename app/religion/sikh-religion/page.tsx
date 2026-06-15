import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sikh Religion | Sri Guru Singh Sabha',
  description: 'Learn about the Sikh religion and its principles.',
};

export default function SikhReligionPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Sikh Religion
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-8 text-[13px] md:text-[14px] leading-relaxed">
            <p>
              These words of Guru Nanak, who was born in an age where he was surrounded by people who believed in everything but Truth;who had forgotten the creator and the essence of life, explained the simple bond between the creator and his creation.
            </p>
            <p>
              The people who came to learn and realize this truth got to be known as his &lsquo;Sikhs &ndash; the Learners&rsquo;.
            </p>
            <p>
              The Sikh faith, found by Guru Nanak, in 15th century is the 5th largest religion on this planet . Founder of Sikhism, Guru Nanak was born in 1469 in Talwandi now called Nankana Sahib near Lahore in Pakistan. Guru Nanak was a very miraculous and gifted child by birth. He was gifted with a very sharp spiritual and divined intellect. Right from his childhood he did not accept the meaningless rituals and practices cropped up in, both the main societies of, Hindus and Muslims. Guru Nanak preached the world that there is only one almighty God, The Supreme True Entity. The whole creation that we can see, realize or think of, is created by God. He is the Supreme, from himself. People living in different geographical boundaries and speaking different languages may have given different names to Him but God is One. Guru Nanak astonished both Hindu and Muslim, the larger and dominant religious entities in India in those days, when he declared that no one is a Hindu or Muslim as all of us are the children of the same father, Almighty God.
            </p>
            <p>
              Guru Nanak was succeeded by nine Gurus after him. The Tenth Master Guru Gobind Singh put an end to the bodily and physical guruship tradition. However from Guru Nanak all the gurus emphasised on the &lsquo;Word&rsquo; as a guru. Not the body as physical bodies are mortal. It is the word that is immortal, ever existing and omnipresent. Guru Gobind Singh ji the Tenth Master declared that now onwards the Guru of the Sikhs will be Guru Granth Sahib, The holy scripture of the Sikhs, for the whole humanity. This ocean of spiritual and divine knowledge is an endless and limitless source of enlightenment to lead and direct every aspect of every one&rsquo;s life.
            </p>
            <p>
              Sikhism is a religion of humanity and mankind, love and affection. This is a religion of direct closeness and attachment with God. This is a religion of practices. There is no space for meaningless customs and rituals.
            </p>
            <p>
              The population of Sikhs today is approx. 23 Millions spread all over India and abroad. Sikhs have established a remarkable stone in every field of life . There are world famous Economists, Doctors, Scientists, Businessmen, brave Soldiers and Sportsmen, enlightening and astonishing their surroundings.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
