import React from 'react';
import { ProductCard } from './ProductCard';
import { Product, FragranceCategory } from '../types';
import { Sparkles, SlidersHorizontal, Search } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: FragranceCategory;
  onSelectCategory: (category: FragranceCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const CATEGORY_TABS: { id: FragranceCategory; label: string }[] = [
  { id: 'all', label: 'All Fragrances' },
  { id: 'trending', label: 'Trending at ABDULMEJID' },
  { id: 'luxury', label: 'Luxury Collections' },
  { id: 'mens', label: "Men's" },
  { id: 'womens', label: "Women's" },
  { id: 'unisex', label: 'Unisex' },
  { id: 'signature', label: 'Signature' },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onViewDetails,
  onAddToCart,
}) => {
  // Filter products based on category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category.includes(selectedCategory);

    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.scentProfile.topNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.scentProfile.heartNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.scentProfile.baseNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="shop" className="py-20 sm:py-24 bg-[#FDFAF5] relative border-t border-[#163C32]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISCOVER SOUGHT-AFTER BOTTLES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#163C32] font-normal tracking-tight">
              Trending at ABDULMEJID
            </h2>
            <p className="mt-2 text-[#252525]/70 text-sm sm:text-base font-light max-w-xl">
              Highlighting curated icons including Diamond Collection, Lead Storm by Assaf, and Hedonistic.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search scent, brand, notes..."
              className="w-full bg-white border border-[#163C32]/15 focus:border-[#C6A66B] rounded-sm py-2.5 pl-9 pr-4 text-xs text-[#252525] placeholder-[#252525]/40 outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#C6A66B] absolute left-3 top-3 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-xs text-[#252525]/50 hover:text-[#163C32]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1 text-xs text-[#252525]/50 pr-2 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span className="uppercase tracking-wider">Filter:</span>
          </div>

          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider whitespace-nowrap rounded-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#163C32] text-[#F8F6F0] border border-[#C6A66B] shadow-xs'
                    : 'bg-white hover:bg-[#F8F6F0] text-[#252525]/80 border border-[#163C32]/10 hover:border-[#C6A66B]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-md p-12 text-center border border-[#163C32]/10 max-w-md mx-auto">
            <p className="font-serif text-xl text-[#163C32]">No Fragrance Found</p>
            <p className="text-xs text-[#252525]/70 mt-2">
              We couldn't find any fragrances matching "{searchQuery}". Try searching for notes like "amber", "oud", or "rose".
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
              className="mt-5 px-5 py-2.5 bg-[#163C32] text-[#F8F6F0] text-xs font-semibold tracking-wider uppercase rounded-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Catalog Trust Disclaimer Footnote */}
        <div className="mt-12 p-4 bg-white rounded-sm border border-[#C6A66B]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#252525]/75">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#163C32]">ABDULMEJID CATALOG NOTE:</span>
            <span>All listed prices and batch stock are maintained transparently with editable catalog data. Inquire on WhatsApp for live store availability.</span>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="text-[#163C32] hover:text-[#C6A66B] font-semibold underline underline-offset-4 whitespace-nowrap"
          >
            View Complete Catalog ({products.length} Fragrances)
          </button>
        </div>

      </div>
    </section>
  );
};
