'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#about',   label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume',  label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false);
  const [visible, setVisible]   = useState(true);
  const lastScrollY              = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current <= lastScrollY.current || current < 10);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu  = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-20 backdrop-blur-md bg-white/90 border-b border-transparent transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <nav className="flex items-start max-w-site mx-auto px-6 py-3 gap-6">
        {/* Logo */}
        <Image
          src="/MsquaredLogo.png"
          alt="Logo for Malachi Muhic"
          width={85}
          height={85}
          className="rounded-md object-contain transition-transform duration-200 hover:scale-110"
          priority
        />

        {/* Desktop: name + links */}
        <div className="hidden md:flex flex-col gap-3">
          <a
            href="#hero"
            className="font-bold text-[1.75rem] tracking-[0.1em] text-[#111] no-underline"
          >
            Malachi Muhic
          </a>

          <ul className="flex gap-10 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-underline text-[#111] font-medium text-[1.2rem] no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden ml-auto p-1.5 border-none bg-transparent cursor-pointer flex flex-col justify-center"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="block w-5 h-0.5 bg-[#111] rounded-full" />
          <span className="block w-5 h-0.5 bg-[#111] rounded-full mt-1" />
          <span className="block w-5 h-0.5 bg-[#111] rounded-full mt-1" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-3 px-5 py-3 bg-white/[0.98] border-b border-black/5 max-w-site mx-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="nav-mobile-link-underline text-[#111] font-medium text-base no-underline hover:text-accent transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
