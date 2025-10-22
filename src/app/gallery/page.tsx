import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/barber/Navigation';
import Footer from '@/components/barber/Footer';
import { Instagram, Facebook } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1A1A1A] border-b border-[#444444]">
        <div className="container-barber text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            GALLERY
          </h1>
          <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
            Our latest cuts, styles, and transformations
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div
                key={idx}
                className="relative aspect-square barber-image-border barber-image-hover overflow-hidden cursor-pointer group"
              >
                <Image
                  src={`/generated/gallery-${((idx % 4) + 1)}.jpg`}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-bold uppercase tracking-wider text-sm">
                    View Full
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
          <div className="mt-16 text-center">
            <div className="bg-[#1A1A1A] border border-[#444444] p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wider">
                Follow Our Work
              </h2>
              <p className="text-[#B8B8B8] mb-8">
                Stay updated with our latest styles and special offers
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#D4824B] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C4724B] transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-[#D4824B] text-[#D4824B] px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#D4824B] hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-[#B8B8B8] mb-6 text-lg">
              Ready to get your own transformation?
            </p>
            <Link
              href="/services#booking"
              className="inline-block bg-[#D4824B] text-white px-10 py-4 font-bold uppercase tracking-wider text-base hover:bg-[#C4724B] transition-all duration-300 shadow-lg"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
