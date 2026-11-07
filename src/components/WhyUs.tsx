import React from 'react';
import { Compass, Sparkles, UserCheck, MessageSquare } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Discover Trending Scents',
      description:
        'Stay ahead of modern perfumery trends with curated selections popular among fragrance lovers in Addis Ababa and internationally.',
    },
    {
      icon: Sparkles,
      title: 'Explore Luxury Collections',
      description:
        'Immerse yourself in multifaceted bottles, complex oud accords, and delicate floral compositions crafted for distinction.',
    },
    {
      icon: UserCheck,
      title: 'Personal Shopping Assistance',
      description:
        'Consult directly with our store team in Merkato to match fragrance families, longevity profiles, and gifting occasions to your tastes.',
    },
    {
      icon: MessageSquare,
      title: 'Convenient Ordering',
      description:
        'Review your curated shopping bag and seamlessly transition to direct WhatsApp chat with our team for quick order processing.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#163C32] text-[#F8F6F0] relative overflow-hidden">
      {/* Subtle luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1f4f42] via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold mb-3">
            THE ABDULMEJID EXPERIENCE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F8F6F0] font-normal tracking-tight text-balance">
            Your Destination for Exceptional Fragrances.
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-4 mb-4" />
          <p className="text-[#F8F6F0]/75 text-base sm:text-lg font-light leading-relaxed">
            Located in the vibrant center of Merkato, we provide a welcoming sanctuary for those who appreciate fine scents and effortless ordering.
          </p>
        </div>

        {/* 4 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => {
            const IconComponent = b.icon;
            return (
              <div
                key={b.title}
                className="bg-[#0e2720]/80 rounded-md p-7 border border-[#C6A66B]/20 hover:border-[#C6A66B] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#163C32] border border-[#C6A66B]/40 flex items-center justify-center text-[#C6A66B] mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <div className="text-[11px] font-mono text-[#C6A66B]/70 tracking-widest uppercase mb-1">
                    0{idx + 1}
                  </div>
                  
                  <h3 className="font-serif text-xl text-[#F8F6F0] font-semibold tracking-tight mb-3">
                    {b.title}
                  </h3>
                  
                  <p className="text-sm text-[#F8F6F0]/75 font-light leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C6A66B]/15 text-xs text-[#B7C8B5] flex items-center justify-between">
                  <span>Merkato Store</span>
                  <span className="text-[#C6A66B]">✦</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
