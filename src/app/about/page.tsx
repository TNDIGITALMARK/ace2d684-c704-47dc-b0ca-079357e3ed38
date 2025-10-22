import Image from 'next/image';
import Navigation from '@/components/barber/Navigation';
import Footer from '@/components/barber/Footer';
import TestimonialCard from '@/components/barber/TestimonialCard';
import { Award, Scissors, Users, TrendingUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'Tony Rodriguez',
    role: 'Master Barber & Owner',
    experience: '15 years',
    specialty: 'Classic cuts & fades',
    bio: 'Trained at Classic Barber Academy with over 15 years of experience crafting perfect styles.',
  },
  {
    name: 'Mike Anderson',
    role: 'Senior Barber',
    experience: '10 years',
    specialty: 'Modern styling & beards',
    bio: 'Specializes in contemporary men\'s grooming and beard sculpting with precision.',
  },
  {
    name: 'Carlos Martinez',
    role: 'Barber & Stylist',
    experience: '7 years',
    specialty: 'Hot towel shaves',
    bio: 'Expert in traditional barbering techniques including straight razor shaves.',
  },
];

const testimonials = [
  {
    name: 'Mike Johnson',
    quote: 'Best cut in town. Tony knows exactly what I need every time I walk in. Professional atmosphere and attention to detail.',
    rating: 5,
    initials: 'MJ',
  },
  {
    name: 'Sarah Martinez',
    quote: 'My husband always looks sharp after visiting here. The quality is consistently excellent and the vibe is great.',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'David Chen',
    quote: 'Professional atmosphere, reasonable prices, highly recommend. The hot towel shave is absolutely worth it!',
    rating: 5,
    initials: 'DC',
  },
  {
    name: 'James Wilson',
    quote: 'Been coming here for 3 years. Never disappointed. The attention to detail is unmatched in the area.',
    rating: 5,
    initials: 'JW',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1A1A1A] border-b border-[#444444]">
        <div className="container-barber text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            ABOUT US
          </h1>
          <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
            Crafting distinguished looks for the modern gentleman since 2010
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-wider">
                  Our Story
                </h2>
                <p className="text-[#B8B8B8] mb-4 leading-relaxed">
                  Founded in 2010, Gentleman's Cut has been the premier destination for men's grooming in the Downtown District. What started as a single chair operation has grown into a full-service barber shop that maintains the timeless traditions of classic barbering while embracing modern techniques.
                </p>
                <p className="text-[#B8B8B8] mb-4 leading-relaxed">
                  Our philosophy is simple: every client deserves a personalized experience that leaves them looking and feeling their absolute best. We believe in the power of a great haircut to boost confidence and make a lasting impression.
                </p>
                <p className="text-[#B8B8B8] leading-relaxed">
                  From classic cuts to contemporary styles, hot towel shaves to beard sculpting, we provide a full range of services in an atmosphere that combines old-world charm with modern comfort.
                </p>
              </div>
              <div className="relative aspect-square barber-image-border overflow-hidden">
                <Image
                  src="/generated/hero-barber-shop.jpg"
                  alt="Gentleman's Cut Barber Shop Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-[#1A1A1A] border border-[#444444]">
                <Award className="w-10 h-10 text-[#D4824B] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-[#B8B8B8] text-sm uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center p-6 bg-[#1A1A1A] border border-[#444444]">
                <Users className="w-10 h-10 text-[#D4824B] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">5000+</div>
                <div className="text-[#B8B8B8] text-sm uppercase tracking-wide">Clients</div>
              </div>
              <div className="text-center p-6 bg-[#1A1A1A] border border-[#444444]">
                <Scissors className="w-10 h-10 text-[#D4824B] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-[#B8B8B8] text-sm uppercase tracking-wide">Barbers</div>
              </div>
              <div className="text-center p-6 bg-[#1A1A1A] border border-[#444444]">
                <TrendingUp className="w-10 h-10 text-[#D4824B] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <div className="text-[#B8B8B8] text-sm uppercase tracking-wide">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container-barber">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              Meet The Team
            </h2>
            <p className="text-[#B8B8B8] max-w-2xl mx-auto">
              Skilled craftsmen dedicated to the art of barbering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className="bg-[#2B2B2B] border border-[#444444] overflow-hidden hover:border-[#D4824B] transition-all duration-300"
              >
                <div className="relative aspect-square barber-image-border overflow-hidden">
                  <Image
                    src={`/generated/gallery-${((idx % 4) + 1)}.jpg`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-[#D4824B] font-semibold mb-2 uppercase text-sm">
                    {member.role}
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <p className="text-[#B8B8B8]">
                      <span className="text-white font-semibold">Experience:</span> {member.experience}
                    </p>
                    <p className="text-[#B8B8B8]">
                      <span className="text-white font-semibold">Specialty:</span> {member.specialty}
                    </p>
                  </div>
                  <p className="text-[#B8B8B8] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              Gallery
            </h2>
            <p className="text-[#B8B8B8]">
              Recent work and transformations from our skilled barbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 1, 2, 3, 4].map((num, idx) => (
              <div
                key={idx}
                className="relative aspect-square barber-image-border barber-image-hover overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/generated/gallery-${num}.jpg`}
                  alt={`Gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#B8B8B8] mb-6">
              Follow us on Instagram to see more of our latest work
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#D4824B] text-[#D4824B] px-8 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#D4824B] hover:text-white transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container-barber">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              Client Reviews
            </h2>
            <p className="text-[#B8B8B8]">
              Hear what our satisfied clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
                initials={testimonial.initials}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#B8B8B8] mb-6">
              Ready to experience the Gentleman's Cut difference?
            </p>
            <a
              href="/services#booking"
              className="inline-block bg-[#D4824B] text-white px-10 py-4 font-bold uppercase tracking-wider text-base hover:bg-[#C4724B] transition-all duration-300 shadow-lg"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
