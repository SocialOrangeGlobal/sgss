"use client";

import Link from 'next/link';

const quickLinks = [
  { label: 'Marriage Undertaking', href: '/documents/MarriageUndertaking.pdf', external: true },
  { label: 'Guidelines', href: '/about/guidelines' },
  { label: 'Facilities', href: '/about/facilities' },
  { label: 'Contact Information', href: '/contact/information' },
  { label: 'Employment', href: '/employment' },
  { label: 'Keertan Classes', href: '/school/keertan-classes' },
  { label: 'Punjabi School', href: '/school/punjabi-school' },
  // { label: 'CAV Letter', href: '/contact/constitution' },
];

export default function QuickLinks() {
  return (
    <div className="md:mr-30">
      {/* Section Title */}
      <h3 className="text-2xl font-serif mb-3 flex items-center gap-2" style={{ color: '#5a3e0a' }}>
        Quick Links
        <img src="/images/logos/tool.png" alt="" className="h-6 w-auto inline-block" />
      </h3>

      {/* Container: orange border, flex layout */}
      <div
        className="flex rounded transition-shadow duration-200"
        style={{ border: '2px solid #e67e22' }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px 5px rgba(230,126,34,0.6)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
        }}
      >
        {/* Scrollable link rows — flex-1, default scrollbar shows between list and orange bar */}
        <ul className="flex-1 overflow-y-auto" style={{ maxHeight: '300px' }}>
          {quickLinks.map((link, i) => (
            <li key={i} style={{ borderBottom: i < quickLinks.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center px-3 py-2.5 text-sm transition-colors"
                style={{
                  color: '#e67e22',
                  backgroundColor: '#ebebeb',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffd9b3';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ebebeb';
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
