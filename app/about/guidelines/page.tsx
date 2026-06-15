'use client';

import { useState } from 'react';
import Layout from '@/src/components/layout/Layout';

const guidelines = [
  { id: 1, title: 'Sikh Ceremonies', file: '/pdfs/Sikh_Ceremonies.pdf' },
  { id: 2, title: 'Sikh Birth and Naming Ceremonies', file: '/pdfs/Sikh_Birth_Ceremonies.pdf' },
  { id: 3, title: 'Dastar Bandhi Ceremonies', file: '/pdfs/Dastar_Bandhi.pdf' },
  { id: 4, title: 'Amrit Sanskar', file: '/pdfs/Amrit_Sanskar.pdf' },
  { id: 5, title: 'Sikh Marriage', file: '/pdfs/Sikh_Marriage.pdf' },
  { id: 6, title: 'Death Ceremonies', file: '/pdfs/Death_Ceremonies.pdf' },
  { id: 7, title: 'Akhand Paath at Home', file: '/pdfs/Akhand_Paath.pdf' },
  { id: 8, title: 'Make Kara Parshad at Home', file: '/pdfs/Kara_Parshad.pdf' },
  { id: 9, title: 'Sukhmani Sahib at Home', file: '/pdfs/Sukhmani_Sahib.pdf' },
  { id: 10, title: 'Sehaj Paath', file: '/pdfs/Sehaj_Paath.pdf' },
  { id: 11, title: 'What to do when we take Sri Guru Granth Sahib Ji home', file: '/pdfs/Take_Home.pdf' },
];

export default function GuidelinesPage() {
  const [selected, setSelected] = useState<typeof guidelines[0] | null>(null);

  return (
    <Layout>
      <div className="bg-[#efeeed] pt-0 pb-12 rounded-b-lg">
        <div className="mx-2 md:mx-6 bg-white rounded-[8px] border border-[#cfcfcf] px-4 py-8 md:px-8 md:py-8 min-h-[500px]">

          <h1 className="text-xl md:text-2xl lg:text-[28px] font-serif text-center mb-8" style={{ color: '#5a3e0a' }}>
            {selected ? selected.title : 'Guidelines'}
          </h1>

          <div className="max-w-4xl mx-auto">
            {!selected ? (
              <ul className="space-y-4 pl-4 md:pl-12 list-disc" style={{ color: '#333' }}>
                {guidelines.map((g) => (
                  <li key={g.id} className="font-bold text-lg marker:text-[#333]">
                    <span style={{ color: '#333' }}>{g.id}.) </span>
                    <button
                      onClick={() => setSelected(g)}
                      className="text-left transition-colors hover:underline inline"
                      style={{ color: '#ff6a00' }}
                    >
                      {g.title}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="w-full flex flex-col">
                <div className="mb-2 text-sm">
                  <a href={selected.file} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#e67e22' }}>
                    View Fullscreen
                  </a>
                </div>
                {/* PDF Viewer */}
                <div className="w-full border border-gray-300" style={{ height: '65vh', minHeight: '500px', backgroundColor: '#525659' }}>
                  <object
                    data={selected.file}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <iframe
                      src={selected.file}
                      className="w-full h-full border-none"
                      title={selected.title}
                    >
                      <p>This browser does not support PDFs. Please download the PDF to view it: <a href={selected.file}>Download PDF</a>.</p>
                    </iframe>
                  </object>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 text-sm hover:underline font-medium"
                  style={{ color: '#5a3e0a' }}
                >
                  &larr; Back to Guidelines
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
