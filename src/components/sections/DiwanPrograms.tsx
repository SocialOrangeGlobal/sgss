'use client';

import { useState } from 'react';
import Link from 'next/link';
import { dailyPrograms, weeklyPrograms, specialPrograms } from '@/src/data/programs';

type Tab = 'daily' | 'weekly' | 'special';

export default function DiwanPrograms() {
  const [activeTab, setActiveTab] = useState<Tab>('daily');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'special', label: 'Special' },
  ];

  return (
    <div className="md:ml-30">
      {/* Section Title */}
      <h3 className="text-2xl font-serif mb-3 flex items-center gap-2" style={{ color: '#5a3e0a' }}>
        List Of Regular Diwans
        <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
      </h3>

      {/* Orange glowing bordered box */}
      <div
        className="rounded-lg overflow-hidden group transition-shadow duration-200"
        style={{
          border: '2px solid #e67e22',
          boxShadow: '0 0 8px 2px rgba(230,126,34,0.35)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px 5px rgba(230,126,34,0.6)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 8px 2px rgba(230,126,34,0.35)';
        }}
      >
        {/* Tab row */}
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-4 py-1.5 text-xs font-semibold capitalize transition-colors border-r last:border-r-0"
              style={{
                backgroundColor: activeTab === tab.key ? '#e67e22' : '#ffffff',
                color: activeTab === tab.key ? '#ffffff' : '#333333',
                borderColor: '#e67e22',
              }}
              aria-pressed={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable content area */}
        <div className="overflow-y-auto bg-white" style={{ maxHeight: '280px' }}>
          {activeTab === 'daily' && (
            <ul>
              {dailyPrograms.map((program) => (
                <li
                  key={program.id}
                  className="px-3 py-2 text-sm"
                  style={{ borderBottom: '1px solid #f0a060', backgroundColor: '#e0e0e0' }}
                >
                  <p style={{ color: '#222' }}>{program.name}</p>
                  <p className="text-xs mt-0.5">
                    <span className="font-bold" style={{ color: '#e67e22' }}>Timings: </span>
                    <span style={{ color: '#555' }}>{program.timing}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'weekly' && (
            <div>
              {weeklyPrograms.map((day) => (
                <div key={day.id}>
                  <p className="text-xs font-bold px-3 pt-2 pb-1" style={{ color: '#8b6914' }}>{day.day}</p>
                  <ul>
                    {day.programs.map((program) => (
                      <li
                        key={program.id}
                        className="px-3 py-2 text-sm"
                        style={{ borderBottom: '1px solid #f0a060', backgroundColor: '#e0e0e0' }}
                      >
                        <p style={{ color: '#222' }}>{program.name}</p>
                        <p className="text-xs mt-0.5">
                          <span className="font-bold" style={{ color: '#e67e22' }}>Timings: </span>
                          <span style={{ color: '#555' }}>{program.timing}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'special' && (
            <ul>
              {specialPrograms.map((event) => (
                <li
                  key={event.id}
                  className="px-3 py-2 text-sm"
                  style={{ borderBottom: '1px solid #f0a060', backgroundColor: '#e0e0e0' }}
                >
                  <p style={{ color: '#222' }}>{event.name}</p>
                  <p className="text-xs mt-0.5">
                    <span className="font-bold" style={{ color: '#e67e22' }}>Date: </span>
                    <span style={{ color: '#555' }}>{event.date}</span>
                  </p>
                  <p className="text-xs">
                    <span className="font-bold" style={{ color: '#e67e22' }}>Timings: </span>
                    <span style={{ color: '#555' }}>{event.timing}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer links */}
        <div className="px-3 py-2 bg-white" style={{ borderTop: '1px solid #f0a060' }}>
          <Link href="/programs/daily-weekly" className="block text-xs mb-1 hover:underline" style={{ color: '#e67e22' }}>
            Regular Weekly Program
          </Link>
          <Link href="/programs/daily-weekly#special" className="block text-xs hover:underline" style={{ color: '#e67e22' }}>
            Special Program
          </Link>
        </div>
      </div>
    </div>
  );
}
