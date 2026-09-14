'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems, NavItem } from '@/src/data/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 top-full z-50 min-w-[210px] bg-[#efeeed] shadow-md py-2"
    >
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            target={item.href.endsWith('.pdf') ? '_blank' : undefined}
            rel={item.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
            className="block px-4 py-2.5 text-[13px] font-normal tracking-wide uppercase transition-colors duration-100"
            style={{ color: '#9e7110' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ff6a00'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#9e7110'; }}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

function NavItemDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLLIElement>(null);
  const isActive = (pathname !== '/' && pathname === item.href) || (item.children?.some(c => pathname.startsWith(c.href)));

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => item.children && setOpen(true)}
      onMouseLeave={() => item.children && setOpen(false)}
    >
      <Link
        href={item.href}
        onClick={(e) => {
          if (item.href === '#') e.preventDefault();
        }}
        className="flex items-center gap-0.5 px-[10px] py-[11px] text-[13px] font-medium tracking-wide text-white transition-colors duration-100 whitespace-nowrap rounded-t-sm"
        style={{
          backgroundColor: isActive || open ? '#ff6a00' : '#9e7110',
        }}
        onMouseEnter={(e) => {
          if (!isActive && !open) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ff6a00';
        }}
        onMouseLeave={(e) => {
          if (!isActive && !open) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#9e7110';
        }}
      >
        {item.label}
        {item.children && <ChevronDown size={10} className="ml-0.5" />}
      </Link>
      <AnimatePresence>
        {open && item.children && <DropdownMenu items={item.children} />}
      </AnimatePresence>
    </li>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <li className="border-b border-white/20">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={(e) => {
            if (item.href === '#') {
              e.preventDefault();
              setOpen(!open);
            } else {
              onClose();
            }
          }}
          className="flex-1 block px-4 py-3 text-[13px] font-medium tracking-wide text-white"
          style={{ backgroundColor: isActive ? '#ff6a00' : 'transparent' }}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-3 text-white"
            aria-label={`Toggle ${item.label} submenu`}
          >
            <ChevronDown
              size={14}
              className="transition-transform duration-200"
              style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
        )}
      </div>
      <AnimatePresence>
        {open && item.children && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-[#efeeed]"
          >
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  onClick={onClose}
                  target={child.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={child.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                  className="block px-6 py-2.5 text-[13px] font-normal tracking-wide uppercase border-b border-[#cfcfcf] last:border-b-0"
                  style={{ color: '#9e7110' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#ff6a00'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#9e7110'; }}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Logo + Nav wrapper */}
      <div className="bg-[#efeeed] rounded-t-lg">
        {/* Desktop Layout: logo left, nav right, bottom-aligned */}
        <div className="flex flex-row items-end justify-between pt-3 px-4 md:pt-4 md:px-6 pb-0">
          {/* Logo */}
          <Link href="/" className="flex items-center pb-3 flex-shrink-0" aria-label="Sri Guru Singh Sabha Craigieburn Home">
            <img src="/images/logos/new_logo_img.png" alt="Sri Guru Singh Sabha" className="h-[60px] lg:h-[100px] w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            className="hidden xl:flex items-end"
          >
            <ul className="flex flex-nowrap items-stretch gap-[2px]">
              {navigationItems.map((item) => (
                <NavItemDesktop key={item.label} item={item} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Nav Toggle */}
        <nav
          aria-label="Main navigation"
          className="xl:hidden mx-2 md:mx-6 rounded-lg"
          style={{ backgroundColor: '#9e7110' }}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-white text-xs font-bold tracking-wider">MENU</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-1"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
                style={{ backgroundColor: '#9e7110' }}
              >
                <ul>
                  {navigationItems.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
