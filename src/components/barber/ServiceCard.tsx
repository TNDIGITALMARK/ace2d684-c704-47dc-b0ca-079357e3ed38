import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  duration: string;
  price: string;
  description?: string;
}

export default function ServiceCard({ icon: Icon, title, duration, price, description }: ServiceCardProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#444444] p-6 group hover:border-[#D4824B] transition-all duration-300 shadow-md hover:shadow-barber">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 mb-4 flex items-center justify-center">
          <Icon className="w-12 h-12 text-[#D4824B]" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-[#B8B8B8] text-sm mb-4">
            {description}
          </p>
        )}

        {/* Duration & Price */}
        <div className="flex items-center justify-center gap-4 mb-6 text-[#B8B8B8]">
          <span className="text-sm">{duration}</span>
          <span className="text-[#D4824B] font-bold text-xl">${price}</span>
        </div>

        {/* Book Button */}
        <Link
          href="/services#booking"
          className="bg-transparent border-2 border-[#D4824B] text-[#D4824B] px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-[#D4824B] hover:text-white transition-all duration-300 w-full"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
