import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  initials?: string;
}

export default function TestimonialCard({ name, quote, rating, initials }: TestimonialCardProps) {
  const displayInitials = initials || name.split(' ').map(n => n[0]).join('');

  return (
    <div className="bg-[#1A1A1A] border border-[#444444] p-6 shadow-md relative">
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 text-[#D4824B] opacity-20 text-5xl font-serif leading-none">
        "
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4 relative z-10">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#D4824B] text-[#D4824B]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#B8B8B8] mb-6 relative z-10 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#2B2B2B] border-2 border-[#D4824B] flex items-center justify-center">
          <span className="text-[#D4824B] font-bold text-sm">
            {displayInitials}
          </span>
        </div>
        <span className="text-white font-semibold">
          {name}
        </span>
      </div>
    </div>
  );
}
