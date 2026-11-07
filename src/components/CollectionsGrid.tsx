import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COLLECTION_CATEGORIES } from '../data/products';
import { FragranceCategory } from '../types';

interface CollectionsGridProps {
  selectedCategory: FragranceCategory;
  onSelectCategory: (categoryId: FragranceCategory) => void;
}

export const CollectionsGrid: React.FC<CollectionsGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section id="collections" className="py-20 sm:py-24 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold mb-3">
            CURATED OLFACTORY CHAPTERS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#163C32] font-normal tracking-tight text-balance">
            Explore the World of Fragrance
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-4 mb-4" />
          <p className="text-[#252525]/70 text-base sm:text-lg leading-relaxed font-light">
            Each collection is thoughtfully assembled to express a unique persona, from commanding oriental ouds to radiant floral bouquets.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTION_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative text-left rounded-md overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 border flex flex-col cursor-pointer ${
                  isSelected ? 'border-[#163C32] ring-2 ring-[#C6A66B]/50' : 'border-[#163C32]/10 hover:border-[#C6A66B]'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#163C32]/5">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

                  {/* Corner Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#163C32]/90 backdrop-blur-xs text-[#F8F6F0] text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-xs border border-[#C6A66B]/40">
                      {cat.itemCount}+ Scents
                    </span>
                  </div>

                  {/* Hover Arrow Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F8F6F0]/90 text-[#163C32] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#163C32] font-semibold tracking-tight group-hover:text-[#C6A66B] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#252525]/70 font-light leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#163C32]/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#163C32] group-hover:text-[#C6A66B]">
                    <span>{isSelected ? 'Currently Viewing' : 'Explore Category'}</span>
                    <span className="text-[#C6A66B] font-mono">→</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
