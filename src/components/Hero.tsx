import React from 'react';
import { ArrowRight, Sparkles, MapPin, ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  return (
    <section id="hero" className="relative bg-[#163C32] text-[#F8F6F0] overflow-hidden">
      {/* Background radial gradient glow for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1f4f42] via-[#163C32] to-[#0e2720] opacity-90 pointer-events-none" />

      {/* Decorative luxury hairline accent lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C6A66B08_1px,transparent_1px),linear-gradient(to_bottom,#C6A66B08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Elegant luxury brand kicker */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A66B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>ABDULMEJID PERFUME · MERKATO, ADDIS ABABA</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight leading-[1.08] text-[#F8F6F0] font-normal text-balance">
              Luxury Has a <span className="italic font-serif text-[#C6A66B]">Fragrance.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[#F8F6F0]/80 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover exceptional scents, explore trending luxury fragrances, and find a fragrance that defines your presence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplore}
                className="w-full sm:w-auto px-8 py-4 bg-[#C6A66B] hover:bg-[#DFC89B] text-[#163C32] font-semibold text-xs tracking-[0.16em] uppercase rounded-sm transition-all duration-300 shadow-lg hover:shadow-[#C6A66B]/20 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContact}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-[#F8F6F0] hover:text-[#C6A66B] font-semibold text-xs tracking-[0.16em] uppercase rounded-sm border border-[#C6A66B]/60 hover:border-[#C6A66B] transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                CONTACT US
              </button>
            </div>

            {/* Store Highlights Strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#C6A66B]/20 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-[#C6A66B] text-xs font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Merkato</span>
                </div>
                <p className="text-[12px] text-[#F8F6F0]/70">Heart of Addis Ababa</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#C6A66B] text-xs font-semibold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Curated</span>
                </div>
                <p className="text-[12px] text-[#F8F6F0]/70">Trending Luxury Scents</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#C6A66B] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </div>
                <p className="text-[12px] text-[#F8F6F0]/70">Fast In-Person Ordering</p>
              </div>
            </div>

          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative golden frame */}
              <div className="absolute -inset-2 rounded-lg border border-[#C6A66B]/40 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-2 rounded-lg border border-[#B7C8B5]/20 rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-md overflow-hidden shadow-2xl bg-[#0e2720] border border-[#C6A66B]/30 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_luxury_perfume_1794041587888.jpg"
                  alt="ABDULMEJID PERFUME Luxury Fragrance Showcase"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle scrim overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F8F6F0]/90">
                  <span className="font-serif tracking-wider text-sm text-[#DFC89B]">Signature Masterpieces</span>
                  <span className="font-mono text-[11px] tracking-widest text-white/70">MERKATO, ADDIS ABABA</span>
                </div>
              </div>

              {/* Floating luxury badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#F8F6F0] text-[#163C32] p-4 rounded-sm border border-[#C6A66B] shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#163C32] text-[#C6A66B] flex items-center justify-center font-serif font-bold text-sm">
                  AP
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider uppercase font-serif">Trending Scents</div>
                  <div className="text-[11px] text-[#252525]/70">Available Today in Addis</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
