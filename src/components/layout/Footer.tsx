"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GalleryStrip from '../sections/GalleryStrip';

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <footer className="w-full bg-transparent">
      {/* Photo Gallery Strip */}
      {isHomePage && <GalleryStrip />}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Links and Copyright */}
          <div>
            <div className="flex flex-wrap gap-3 text-sm mb-1">
              <Link
                href="/"
                className="transition-colors"
                style={{ color: '#7c5c0a' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#d97706'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7c5c0a'; }}
              >
                Home
              </Link>
              <span style={{ color: '#aaa' }}>|</span>
              <Link
                href="/about"
                className="transition-colors"
                style={{ color: '#7c5c0a' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#d97706'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7c5c0a'; }}
              >
                About Us
              </Link>
              {/* <span style={{ color: '#aaa' }}>|</span> */}
              {/* <Link
                href="/contact/leave-message"
                className="transition-colors"
                style={{ color: '#7c5c0a' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#d97706'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#7c5c0a'; }}
              >
                Leave a Message
              </Link> */}
            </div>
            <p className="text-xs" style={{ color: '#777' }}>
              Copyright &copy; 2020 and maintained by{' '}
              <span style={{ color: '#e67e22' }}>iGurudwara</span>
              {' '}. All rights reserved.
            </p>
          </div>

          {/* Right: App Store + Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* App Store Buttons */}
            <div className="flex gap-2">
              <a href="#" className="transition-transform hover:scale-105" aria-label="Download on Google Play">
                <img src="/images/logos/android-app.png" alt="Google Play Store" className="h-10 w-auto" />
              </a>
              <a href="#" className="transition-transform hover:scale-105" aria-label="Download on the App Store">
                <img src="/images/logos/iphone.png" alt="Apple App Store" className="h-10 w-auto" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 ml-2">
              <a href="https://www.facebook.com/igurudwara" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" aria-label="Facebook">
                <img src="/images/logos/icon_img2.png" alt="Facebook" className="w-8 h-8 rounded-full object-cover" />
              </a>
              <a href="https://x.com/igurudwara" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" aria-label="Twitter">
                <img src="/images/logos/icon_img.png" alt="Twitter" className="w-8 h-8 rounded-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
