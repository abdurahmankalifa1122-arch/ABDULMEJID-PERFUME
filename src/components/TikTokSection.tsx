import React from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

export const TikTokSection: React.FC = () => {
  const tiktokVideos = [
    {
      id: 'video-1',
      title: 'Trending Perfumes at Merkato Store',
      tag: 'Store Walkthrough',
      views: '12.4K',
      image: '/src/assets/images/hero_luxury_perfume_1794041587888.jpg',
    },
    {
      id: 'video-2',
      title: 'Unboxing Lead Storm by Assaf',
      tag: 'New Arrival',
      views: '24.1K',
      image: '/src/assets/images/product_assaf_lead_storm_1794041590040.jpg',
    },
    {
      id: 'video-3',
      title: 'The Sparkle of Diamond Collection',
      tag: 'Customer Favorite',
      views: '18.9K',
      image: '/src/assets/images/product_diamond_collection_1794041589345.jpg',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FDFAF5] relative border-t border-[#163C32]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold mb-2">
              {/* TikTok SVG Icon */}
              <svg className="w-4 h-4 fill-current text-[#163C32]" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.86-4.47V8.78a8.27 8.27 0 0 0 4.91 1.6V6.93a4.85 4.85 0 0 1-1-.24z" />
              </svg>
              <span>CONNECT ON SOCIAL MEDIA</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#163C32] font-normal tracking-tight">
              Discover More on TikTok
            </h2>
            <p className="mt-2 text-[#252525]/70 text-sm sm:text-base font-light">
              Watch fragrance reveals, store arrivals, and customer favorites on our official account{' '}
              <span className="font-semibold text-[#163C32]">{STORE_CONTACT.tikTokHandle}</span>.
            </p>
          </div>

          <a
            href={STORE_CONTACT.tikTokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold tracking-wider uppercase rounded-sm border border-[#C6A66B] flex items-center justify-center gap-2 transition-all shadow-sm group w-full md:w-auto"
          >
            <svg className="w-4 h-4 fill-current text-[#C6A66B]" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.3 6.3 0 0 0 1.86-4.47V8.78a8.27 8.27 0 0 0 4.91 1.6V6.93a4.85 4.85 0 0 1-1-.24z" />
            </svg>
            <span>Follow @abdulmejidperfume</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Video Preview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {tiktokVideos.map((video) => (
            <a
              key={video.id}
              href={STORE_CONTACT.tikTokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-md overflow-hidden bg-white border border-[#163C32]/10 hover:border-[#C6A66B] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-9/16 sm:aspect-3/4 w-full bg-[#0e2720] overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#163C32] group-hover:text-[#C6A66B] group-hover:border-[#C6A66B] transition-all duration-300 shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Tag and Views */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/20 uppercase tracking-wider font-semibold">
                    {video.tag}
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-xs font-mono">
                    <Eye className="w-3 h-3 text-[#C6A66B]" />
                    {video.views}
                  </span>
                </div>

                {/* Bottom Title on Video */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-[#C6A66B] font-mono uppercase tracking-wider mb-1">
                    @abdulmejidperfume
                  </p>
                  <h4 className="font-serif text-base font-semibold leading-snug line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              </div>

              <div className="p-3 bg-white flex items-center justify-between text-xs text-[#163C32] font-semibold group-hover:text-[#C6A66B] transition-colors">
                <span>Watch on TikTok</span>
                <span className="font-mono">↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
