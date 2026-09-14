import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sri Guru Singh Sabha | Craigieburn',
  description: 'Sri Guru Singh Sabha Craigieburn - A Sikh Gurdwara serving the community in Craigieburn, Victoria, Australia.',
  generator: 'v0.app',
  keywords: 'Gurdwara, Sikh, Craigieburn, Sri Guru Singh Sabha, Melbourne',
  icons: {
    icon: '/images/logos/logo_img.png',
    shortcut: '/images/logos/logo_img.png',
    apple: '/images/logos/logo_img.png',
  },
  openGraph: {
    title: 'Sri Guru Singh Sabha | Craigieburn',
    description: 'Sri Guru Singh Sabha Craigieburn - A Sikh Gurdwara serving the community.',
    type: 'website',
    images: ['/images/logos/logo_img.png'],
  },
};

export const viewport = {
  themeColor: '#6b5a1e',
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundImage: "url('/images/logos/bg_img.jpg')", backgroundRepeat: 'repeat' }}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
