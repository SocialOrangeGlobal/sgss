import Layout from '@/src/components/layout/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found | Sri Guru Singh Sabha',
};

export default function EnglishClassesNotFound() {
  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-24 md:px-8 min-h-[400px] flex flex-col justify-center items-center">
          
          <h1 className="text-[17px] md:text-[19px] font-bold text-center mb-10 font-serif" style={{ color: '#000' }}>
            Not Found anything related to your search.
          </h1>

          <p className="text-center font-bold text-[15px]" style={{ color: '#000' }}>
            Go Back To{' '}
            <Link href="/" className="hover:underline transition-colors font-medium" style={{ color: '#ff6a00' }}>
              Home
            </Link>
          </p>
          
        </div>
      </div>
    </Layout>
  );
}
