import Link from 'next/link';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#444444] py-12">
      <div className="container-barber">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4824B] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#B8B8B8]">123 Main Street</p>
                  <p className="text-[#B8B8B8]">Downtown District</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4824B] flex-shrink-0" />
                <a href="tel:555-287-7669" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  555-CUTS-NOW
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4824B] flex-shrink-0" />
                <a href="mailto:info@gentlemanscut.com" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  info@gentlemanscut.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#classic-cut" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  Signature Classic Cut
                </Link>
              </li>
              <li>
                <Link href="/services#beard-sculpting" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  Beard Sculpting Package
                </Link>
              </li>
              <li>
                <Link href="/services#executive" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  Executive Package
                </Link>
              </li>
              <li>
                <Link href="/services#kids" className="text-[#B8B8B8] hover:text-[#D4824B] transition-colors">
                  Kids Cuts
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Hours</h3>
            <div className="space-y-2 mb-6">
              <p className="text-[#B8B8B8]">Monday - Friday: 9am - 7pm</p>
              <p className="text-[#B8B8B8]">Saturday: 9am - 5pm</p>
              <p className="text-[#D4824B] font-semibold">Sunday: Closed</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#444444] flex items-center justify-center text-[#B8B8B8] hover:text-[#D4824B] hover:border-[#D4824B] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#444444] flex items-center justify-center text-[#B8B8B8] hover:text-[#D4824B] hover:border-[#D4824B] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#444444] pt-6">
          <p className="text-center text-[#B8B8B8] text-sm">
            © {new Date().getFullYear()} Gentleman's Cut. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
