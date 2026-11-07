import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, Clock } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#163C32] text-[#F8F6F0] pt-16 pb-12 border-t-2 border-[#C6A66B]/30 relative overflow-hidden">
      
      {/* Decorative hairline grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f4f42] via-[#163C32] to-[#0e2720] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C6A66B]/20">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#0e2720] border border-[#C6A66B] flex items-center justify-center text-[#C6A66B]">
                <span className="font-serif font-bold text-xl tracking-wider">A</span>
              </div>
              <div>
                <span className="font-serif font-bold tracking-[0.2em] text-[#F8F6F0] text-xl block leading-tight">
                  ABDULMEJID
                </span>
                <span className="text-[10px] uppercase tracking-[0.34em] text-[#C6A66B] font-semibold">
                  PERFUME · MERKATO
                </span>
              </div>
            </div>

            <p className="text-sm text-[#F8F6F0]/75 font-light leading-relaxed max-w-sm">
              Your premier fragrance destination in Merkato, Addis Ababa. Discover curated luxury scents, popular trending perfumes, and enjoy direct WhatsApp ordering.
            </p>

            <div className="pt-2 flex items-center gap-4">
              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${STORE_CONTACT.whatsAppNumber}?text=${encodeURIComponent('Hello ABDULMEJID PERFUME, I am visiting your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0e2720] border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#C6A66B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Store"
                title="WhatsApp Store"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* TikTok direct */}
              <a
                href={STORE_CONTACT.tikTokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0e2720] border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#C6A66B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="TikTok Profile"
                title="TikTok Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.86-4.47V8.78a8.27 8.27 0 0 0 4.91 1.6V6.93a4.85 4.85 0 0 1-1-.24z" />
                </svg>
              </a>

              {/* Phone direct */}
              <a
                href={`tel:${STORE_CONTACT.phoneTel}`}
                className="w-9 h-9 rounded-full bg-[#0e2720] border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#C6A66B] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Call ABDULMEJID PERFUME"
                title="Call Store"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F6F0]/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shop')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Shop Fragrances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  About Our Boutique
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Store Location & Hours */}
          <div className="lg:col-span-4 space-y-3 text-sm text-[#F8F6F0]/80 font-light">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
              Visit Our Store
            </h4>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#F8F6F0]">Merkato, Addis Ababa, Ethiopia</p>
                <p className="text-xs text-[#F8F6F0]/60 mt-0.5">Physical retail store & fragrance orders</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
              <div>
                <a href={`tel:${STORE_CONTACT.phoneTel}`} className="hover:text-[#C6A66B] font-mono">
                  {STORE_CONTACT.phoneDisplay}
                </a>
                <span className="block text-xs text-[#F8F6F0]/60">Call or SMS</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
              <div className="text-xs text-[#F8F6F0]/70">
                <span>Mon – Sat: 8:30 AM – 7:30 PM</span>
                <span className="block">Sun: 9:00 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F6F0]/60">
          <p>© 2026 ABDULMEJID PERFUME. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[#C6A66B]">Addis Ababa, Ethiopia</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#C6A66B] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
