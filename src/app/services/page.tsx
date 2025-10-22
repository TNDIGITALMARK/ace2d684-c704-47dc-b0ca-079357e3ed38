'use client';

import { useState } from 'react';
import Navigation from '@/components/barber/Navigation';
import Footer from '@/components/barber/Footer';
import { Scissors, Sparkles, Coffee, Users, Calendar, Clock, User } from 'lucide-react';

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  duration: string;
  price: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 'classic-cut',
    icon: Scissors,
    title: 'Signature Classic Cut',
    description: 'Consultation, wash, cut, and style',
    duration: '45 minutes',
    price: '35',
    details: [
      'Personal consultation',
      'Premium wash and conditioning',
      'Precision cut',
      'Professional styling'
    ]
  },
  {
    id: 'beard-sculpting',
    icon: Sparkles,
    title: 'Beard Sculpting Package',
    description: 'Trim, shape, and oil treatment',
    duration: '20 minutes',
    price: '25',
    details: [
      'Beard trim and shaping',
      'Edge line-up',
      'Premium beard oil treatment',
      'Styling advice'
    ]
  },
  {
    id: 'executive',
    icon: Coffee,
    title: 'Executive Package',
    description: 'Cut, beard, and hot towel',
    duration: '60 minutes',
    price: '55',
    details: [
      'Signature Classic Cut',
      'Beard Sculpting',
      'Traditional hot towel shave',
      'Complimentary beverage'
    ]
  },
  {
    id: 'kids',
    icon: Users,
    title: 'Kids Cuts',
    description: 'Ages 12 and under',
    duration: '30 minutes',
    price: '20',
    details: [
      'Child-friendly environment',
      'Quick and efficient service',
      'Age-appropriate styling',
      'Patient and caring barbers'
    ]
  }
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
];

const barbers = ['Tony', 'Mike', 'Carlos'];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed!\n\nService: ${selectedService}\nBarber: ${selectedBarber}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nWe'll send a confirmation to ${formData.email}`);
  };

  return (
    <div className="min-h-screen bg-[#2B2B2B]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#1A1A1A] border-b border-[#444444]">
        <div className="container-barber text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            OUR SERVICES
          </h1>
          <p className="text-xl text-[#B8B8B8] max-w-2xl mx-auto">
            Premium grooming services for the modern gentleman
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#2B2B2B]">
        <div className="container-barber">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#1A1A1A] border border-[#444444] p-8 hover:border-[#D4824B] transition-all duration-300 shadow-md"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-[#D4824B]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-[#B8B8B8] mb-4">{service.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-[#B8B8B8]">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                      <span className="text-[#D4824B] font-bold text-2xl">
                        ${service.price}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-[#B8B8B8] flex items-start gap-2">
                          <span className="text-[#D4824B] mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#booking"
                      className="inline-block bg-[#D4824B] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#C4724B] transition-all duration-300"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-[#1A1A1A]">
        <div className="container-barber max-w-4xl">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-[#D4824B] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-wider">
              Online Booking
            </h2>
            <p className="text-[#B8B8B8]">
              Book your appointment in just a few clicks
            </p>
          </div>

          <div className="bg-[#2B2B2B] border border-[#444444] p-8 shadow-barber">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-white font-semibold mb-3 uppercase tracking-wide text-sm">
                  Select Service *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full bg-[#1A1A1A] text-white border border-[#444444] p-3 focus:border-[#D4824B] outline-none"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title} - ${service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Barber Selection */}
              <div>
                <label className="block text-white font-semibold mb-3 uppercase tracking-wide text-sm">
                  Select Barber *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {barbers.map((barber) => (
                    <button
                      key={barber}
                      type="button"
                      onClick={() => setSelectedBarber(barber)}
                      className={`p-4 border-2 transition-all duration-300 ${
                        selectedBarber === barber
                          ? 'border-[#D4824B] bg-[#D4824B] text-white'
                          : 'border-[#444444] bg-[#1A1A1A] text-[#B8B8B8] hover:border-[#D4824B]'
                      }`}
                    >
                      <User className="w-8 h-8 mx-auto mb-2" />
                      <span className="font-semibold uppercase text-sm">{barber}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-white font-semibold mb-3 uppercase tracking-wide text-sm">
                  Select Date *
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#1A1A1A] text-white border border-[#444444] p-3 focus:border-[#D4824B] outline-none"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-white font-semibold mb-3 uppercase tracking-wide text-sm">
                  Select Time *
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-60 overflow-y-auto p-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 border transition-all duration-200 text-sm ${
                        selectedTime === time
                          ? 'border-[#D4824B] bg-[#D4824B] text-white'
                          : 'border-[#444444] bg-[#1A1A1A] text-[#B8B8B8] hover:border-[#D4824B]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-[#444444] pt-6">
                <h3 className="text-white font-semibold mb-4 uppercase tracking-wide">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#B8B8B8] mb-2 text-sm">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#1A1A1A] text-white border border-[#444444] p-3 focus:border-[#D4824B] outline-none placeholder:text-[#666666]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#B8B8B8] mb-2 text-sm">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="(555) 123-4567"
                      className="w-full bg-[#1A1A1A] text-white border border-[#444444] p-3 focus:border-[#D4824B] outline-none placeholder:text-[#666666]"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-[#B8B8B8] mb-2 text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#1A1A1A] text-white border border-[#444444] p-3 focus:border-[#D4824B] outline-none placeholder:text-[#666666]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#D4824B] text-white py-4 font-bold uppercase tracking-wider text-base hover:bg-[#C4724B] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedService || !selectedBarber || !selectedDate || !selectedTime}
              >
                Confirm Booking
              </button>

              <p className="text-center text-[#B8B8B8] text-sm">
                You will receive a confirmation email and SMS reminder 24 hours before your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
