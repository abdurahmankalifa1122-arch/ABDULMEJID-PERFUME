import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatETB } from '../utils/cart';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = products.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.scentProfile.topNotes.some((n) => n.toLowerCase().includes(q)) ||
      p.scentProfile.heartNotes.some((n) => n.toLowerCase().includes(q)) ||
      p.scentProfile.baseNotes.some((n) => n.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-start justify-center p-4 pt-20 animate-fadeIn">
      <div
        className="bg-[#F8F6F0] w-full max-w-2xl rounded-md shadow-2xl border border-[#C6A66B]/50 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 bg-white border-b border-[#163C32]/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C6A66B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search perfumes, brands (Assaf, Diamond Collection...), notes..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#163C32] placeholder-[#252525]/40 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#252525]/50 hover:text-[#163C32] px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#252525]/70 hover:text-[#163C32] rounded-full hover:bg-[#F8F6F0] transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-4 sm:p-6 space-y-3">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#252525]/60">
              <p className="font-serif text-base text-[#163C32] mb-1">Explore ABDULMEJID Fragrances</p>
              <p>Type to search by name (e.g. Lead Storm, Hedonistic), brand, or fragrance notes.</p>
              
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {['Diamond Collection', 'Assaf', 'Hedonistic', 'Oud', 'Amber', 'Vanilla'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-3 py-1 bg-white hover:bg-[#163C32] text-[#163C32] hover:text-[#F8F6F0] rounded-xs border border-[#163C32]/15 text-xs transition-colors cursor-pointer"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C6A66B] pb-1">
                Found {results.length} Fragrance{results.length > 1 ? 's' : ''}
              </div>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 bg-white hover:bg-[#FAF8F4] rounded-sm border border-[#163C32]/10 hover:border-[#C6A66B] transition-all flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xs overflow-hidden bg-[#F8F6F0] shrink-0 border border-[#163C32]/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-semibold text-[#C6A66B] tracking-wider">
                        {product.brand}
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-[#163C32] group-hover:text-[#C6A66B] transition-colors">
                        {product.name}
                      </h4>
                      <div className="text-[11px] text-[#252525]/60">{product.bottleSize} · {product.concentration}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#163C32] tabular-nums">
                      {formatETB(product.priceETB)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#C6A66B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-[#252525]/70">
              <p className="font-serif text-base text-[#163C32]">No matching fragrances</p>
              <p className="mt-1">Try another keyword or view our complete collection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
