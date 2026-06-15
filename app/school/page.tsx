import Layout from '@/src/components/layout/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School & Classes | Sri Guru Singh Sabha Craigieburn',
};

export default function SchoolClassesPage() {
  const classes = [
    { id: 1, name: 'Punjabi School', href: '/school/punjabi-school' },
    { id: 2, name: 'Keertan Classes', href: '/school/keertan-classes' },
    { id: 3, name: 'Calendar 2019', href: '/school/calendar' },
    // { id: 3, name: 'English Classes', href: '/school/english-classes' },
    // { id: 4, name: 'Computer Classes', href: '/school/computer-classes' },
  ];

  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8 min-h-[400px]">

          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            School & Classes
          </h1>

          <div className="max-w-4xl mx-auto mt-12">
            <ul className="space-y-4 pl-4 md:pl-16 list-disc" style={{ color: '#333' }}>
              {classes.map((cls) => (
                <li key={cls.id} className="font-bold text-lg marker:text-[#333]">
                  <span style={{ color: '#333' }}>{cls.id}.) </span>
                  <Link
                    href={cls.href}
                    className="text-left transition-colors hover:underline"
                    style={{ color: '#ff6a00' }}
                  >
                    {cls.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
