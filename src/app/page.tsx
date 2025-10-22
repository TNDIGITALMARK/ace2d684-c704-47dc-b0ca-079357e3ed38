import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/barber/Navigation';
import Footer from '@/components/barber/Footer';
import ServiceCard from '@/components/barber/ServiceCard';
import TestimonialCard from '@/components/barber/TestimonialCard';
import { Scissors, Sparkles, Coffee, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-barber-shop.jpg"
            alt="Gentleman's Cut Barber Shop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container-barber relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            MASTER YOUR LOOK.<br />REFINE STYLE.
          </h1>
          <p className="text-xl text-[#B8B8B8] mb-8 max-w-2xl mx-auto">
            Experience Unmatched Grooming at a Timeless Setting
          </p>
          <Link
            href="/services#booking"
            className="inline-block bg-[#D4824B] text-white px-10 py-4 font-bold uppercase tracking-wider text-base hover:bg-[#C4724B] transition-all duration-300 shadow-lg hover:shadow-barber"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <h2 className="text-4xl font-bold text-white text-center mb-4 uppercase tracking-wider">
            Services
          </h2>
          <p className="text-center text-[#B8B8B8] mb-12 max-w-2xl mx-auto">
            Premium grooming services tailored to the modern gentleman
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceCard
              icon={Scissors}
              title="Haircut & Style"
              duration="45 min"
              price="35"
              description="Consultation, wash, cut, and style"
            />
            <ServiceCard
              icon={Sparkles}
              title="Beard Trim & Shape"
              duration="20 min"
              price="25"
              description="Trim, shape, and oil treatment"
            />
            <ServiceCard
              icon={Coffee}
              title="Deluxe Package"
              duration="60 min"
              price="55"
              description="Cut, beard, and hot towel shave"
            />
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block border-2 border-[#D4824B] text-[#D4824B] px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#D4824B] hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container-barber">
          <h2 className="text-4xl font-bold text-white text-center mb-4 uppercase tracking-wider">
            Gallery
          </h2>
          <p className="text-center text-[#B8B8B8] mb-12">
            See our latest work and transformations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative aspect-square barber-image-border barber-image-hover overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/generated/gallery-${num}.jpg`}
                  alt={`Gallery image ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about#gallery"
              className="inline-block border-2 border-[#D4824B] text-[#D4824B] px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#D4824B] hover:text-white transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <h2 className="text-4xl font-bold text-white text-center mb-4 uppercase tracking-wider">
            Testimonials
          </h2>
          <p className="text-center text-[#B8B8B8] mb-12">
            What our clients say about us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard
              name="Mike Johnson"
              quote="Best cut in town. Tony knows exactly what I need every time I walk in. Professional atmosphere and attention to detail."
              rating={5}
              initials="MJ"
            />
            <TestimonialCard
              name="David Chen"
              quote="Professional atmosphere, reasonable prices, highly recommend. The hot towel shave is absolutely worth it!"
              rating={5}
              initials="DC"
            />
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container-barber">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                Location
              </h2>
              <p className="text-[#B8B8B8] mb-4 text-lg">
                123 Main Street<br />
                Downtown District
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#D4824B] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C4724B] transition-all duration-300"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">
                Hours
              </h2>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center pb-3 border-b border-[#444444]">
                  <span className="text-white font-semibold">Monday - Friday</span>
                  <span className="text-[#B8B8B8]">9am - 7pm</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#444444]">
                  <span className="text-white font-semibold">Saturday</span>
                  <span className="text-[#B8B8B8]">9am - 5pm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Sunday</span>
                  <span className="text-[#D4824B] font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B2B2B] border-t border-[#444444]">
        <div className="container-barber text-center">
          <Clock className="w-16 h-16 text-[#D4824B] mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wider">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-[#B8B8B8] mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Gentleman's Cut difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services#booking"
              className="inline-block bg-[#D4824B] text-white px-10 py-4 font-bold uppercase tracking-wider text-base hover:bg-[#C4724B] transition-all duration-300 shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="tel:555-287-7669"
              className="inline-block border-2 border-[#D4824B] text-[#D4824B] px-10 py-4 font-bold uppercase tracking-wider text-base hover:bg-[#D4824B] hover:text-white transition-all duration-300"
            >
              Call: 555-CUTS-NOW
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}