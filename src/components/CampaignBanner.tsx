import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CampaignBannerProps {
  onDiscoverMore: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onDiscoverMore }) => {
  return (
    <section className="relative bg-[#0e2720] text-[#F8F6F0] overflow-hidden py-24 sm:py-32">
      {/* Background Image with dramatic lighting and scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/campaign_editorial_scent_1794041588511.jpg"
          alt="ABDULMEJID PERFUME Luxury Campaign"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2720]/95 via-[#0e2720]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2720] via-transparent to-[#0e2720]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C6A66B] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL LUXURY CAMPAIGN</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F8F6F0] font-normal tracking-tight leading-[1.12] text-balance">
            Leave an Impression Without Saying a Word.
          </h2>

          <p className="text-base sm:text-lg text-[#F8F6F0]/80 font-light leading-relaxed">
            A bespoke fragrance is an invisible signature that lingers long after you depart. Experience olfactory craftsmanship designed to resonate with dignity and elegance.
          </p>

          <div className="pt-2">
            <button
              onClick={onDiscoverMore}
              className="px-8 py-4 bg-[#C6A66B] hover:bg-[#DFC89B] text-[#163C32] font-semibold text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 shadow-xl flex items-center gap-3 cursor-pointer group"
            >
              <span>DISCOVER MORE</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs font-mono text-[#C6A66B]/80 tracking-widest uppercase">
            <span>MERKATO</span>
            <span>·</span>
            <span>ADDIS ABABA</span>
            <span>·</span>
            <span>ETHIOPIA</span>
          </div>

        </div>
      </div>
    </section>
  );
};
