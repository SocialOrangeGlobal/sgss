import Layout from '@/src/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keertan Classes | Sri Guru Singh Sabha Craigieburn',
  description: 'Information about Keertan classes at Sri Guru Singh Sabha Craigieburn.',
};

export default function KeertanClassesPage() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8">
          
          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            Keertan Classes
          </h1>

          <div className="max-w-5xl mx-auto text-[#333] space-y-6 text-[14px] md:text-[15px] leading-relaxed">
            <p>
              Keertan is the language of the spirit that breaks the barriers of creed and religions, that awakens the Amrit Naam in the soul and fills the heart with humility. Practicing, listening and performing keertan takes people on a journey where they merge into the divine compositions of Sri Guru Granth Sahib Ji, the eternal guru of the Sikhs. Guru Arjan Dev Ji compiled Gurbani into 31 different ragas or musical signatures and 17 different Ghars or rhythms.
            </p>

            <p>
              Although the present Raagi Jatha already teaches harmonium and tabla at the Gurdwara Sahib, we are planning to start a Keertan School where people will be able to learn <strong>Keertan on Tanti Saajs (String Instuments)</strong>. This traditional way of Kirtan was started by Guru Nanak Dev Ji and was continued by the other Gurus as well. The Tanti Saajs which will be taught in these classes are Rabab, Saranda, Sarangi, Taus, Dilruba and many more. By learning this type of Keertan, you will also learn about music in general.
            </p>

            <p className="font-bold">
              Please contact us for keertan classes.
            </p>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
