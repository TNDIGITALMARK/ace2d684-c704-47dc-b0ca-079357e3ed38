'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A] border-b border-[#444444]">
      <div className="container-barber">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full border-2 border-[#D4824B] flex items-center justify-center group-hover:bg-[#D4824B] transition-all duration-300">
              <Scissors className="w-6 h-6 text-[#D4824B] group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white uppercase tracking-wider">Gentleman's</span>
              <span className="text-sm text-[#D4824B] uppercase tracking-widest">Cut</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
            >
              Gallery
            </Link>
            <Link
              href="/services#booking"
              className="bg-[#D4824B] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C4724B] transition-all duration-300 shadow-barber"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#444444]">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
              >
                Home
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
              >
                About
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#D4824B] transition-colors duration-200 font-medium uppercase tracking-wide text-sm py-2"
              >
                Gallery
              </Link>
              <Link
                href="/services#booking"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#D4824B] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C4724B] transition-all duration-300 text-center mt-2"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
