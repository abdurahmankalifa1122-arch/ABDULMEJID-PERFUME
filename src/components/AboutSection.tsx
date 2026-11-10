import React from 'react';
import { ArrowRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';
import { IMAGES } from '../data/images';

interface AboutSectionProps {
  onContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContact }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-md overflow-hidden shadow-xl border border-[#163C32]/10 aspect-4/3 sm:aspect-1/1">
                <img
                  src={IMAGES.orientalOud}
                  alt="ABDULMEJID PERFUME Boutique in Merkato Addis Ababa"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163C32]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] uppercase tracking-widest font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Merkato, Addis Ababa</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#F8F6F0]">ABDULMEJID PERFUME</h4>
                </div>
              </div>

              {/* Decorative accent badge */}
              <div className="absolute -top-4 -right-4 bg-[#163C32] text-[#F8F6F0] p-4 rounded-sm border border-[#C6A66B] shadow-lg hidden sm:block text-center">
                <span className="block font-serif text-xl font-bold text-[#C6A66B]">Addis Ababa</span>
                <span className="text-[10px] uppercase tracking-widest text-[#B7C8B5]">Fragrance Destination</span>
              </div>

            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold">
              OUR BOUTIQUE STORY
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#163C32] font-normal tracking-tight text-balance">
              Welcome to ABDULMEJID PERFUME
            </h2>

            <div className="w-16 h-0.5 bg-[#C6A66B]" />

            {/* Exactly as requested in user specification */}
            <p className="text-base sm:text-lg text-[#252525]/85 font-light leading-relaxed">
              Discover a world of fragrances at ABDULMEJID PERFUME, located in the heart of Merkato, Addis Ababa. Explore trending luxury scents, discover popular fragrance collections, and contact our team for assistance with your next fragrance purchase.
            </p>

            <p className="text-sm sm:text-base text-[#252525]/70 font-light leading-relaxed">
              Whether you are looking for an everyday signature, an alluring evening fragrance, or an exquisite gift, our team is dedicated to offering personal assistance, transparent product details, and seamless WhatsApp ordering.
            </p>

            {/* Store details info box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#163C32]/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#163C32]/5 flex items-center justify-center text-[#163C32] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#163C32]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#163C32]">Location</h4>
                  <p className="text-xs text-[#252525]/70 mt-0.5">Merkato, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#163C32]/5 flex items-center justify-center text-[#163C32] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#163C32]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#163C32]">Direct Phone</h4>
                  <a href={`tel:${STORE_CONTACT.phoneTel}`} className="text-xs text-[#252525]/70 hover:text-[#163C32] font-mono mt-0.5 block">
                    {STORE_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onContact}
                className="px-8 py-3.5 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm border border-[#C6A66B] transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
              </button>

              <a
                href={`https://wa.me/${STORE_CONTACT.whatsAppNumber}?text=${encodeURIComponent('Hello ABDULMEJID PERFUME, I would like to learn more about your store in Merkato.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-[#FAF8F4] text-[#163C32] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm border border-[#163C32]/20 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#163C32]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
