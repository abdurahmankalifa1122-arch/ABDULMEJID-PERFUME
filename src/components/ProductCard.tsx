import React from 'react';
import { Eye, ShoppingBag, MessageCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { formatETB, generateWhatsAppUrl } from '../utils/cart';
import { STORE_CONTACT } from '../data/products';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onAddToCart,
}) => {
  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = [
      `*✨ DIRECT WHATSAPP INQUIRY — ABDULMEJID PERFUME ✨*`,
      `_Store Location: Merkato, Addis Ababa_`,
      ``,
      `Hello! I would like to inquire about purchasing:`,
      `• *Fragrance:* ${product.name}`,
      `• *Brand:* ${product.brand}`,
      `• *Bottle Size:* ${product.bottleSize}`,
      `• *Catalog Price:* ${formatETB(product.priceETB)}`,
      ``,
      `Please let me know if this fragrance is currently available for pickup in Merkato or delivery in Addis Ababa. Thank you!`,
    ].join('\n');

    window.open(generateWhatsAppUrl(STORE_CONTACT.whatsAppNumber, message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative bg-white rounded-md border border-[#163C32]/10 hover:border-[#C6A66B] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Area */}
      <div className="relative aspect-4/3 sm:aspect-1/1 w-full bg-[#F8F6F0] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Status / Availability Badge */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className="bg-[#163C32]/90 backdrop-blur-xs text-[#F8F6F0] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-xs border border-[#C6A66B]/30">
            {product.stockStatus}
          </span>
          {product.trending && (
            <span className="bg-[#C6A66B] text-[#163C32] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
              Trending
            </span>
          )}
        </div>

        {/* Quick View Button overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-4 py-2 bg-white text-[#163C32] hover:bg-[#F8F6F0] rounded-sm text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
            aria-label={`View details of ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-[#163C32]" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Size Header */}
          <div className="flex items-center justify-between text-xs text-[#252525]/60 mb-1.5 font-medium">
            <span className="uppercase tracking-widest text-[#C6A66B] font-semibold">{product.brand}</span>
            <span>{product.bottleSize}</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#163C32] tracking-tight group-hover:text-[#C6A66B] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-[#252525]/70 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Editable Sample Note */}
        <div className="mt-4 pt-3 border-t border-[#163C32]/10">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#252525]/60 uppercase tracking-wider block">Price in ETB</span>
              <span className="text-lg sm:text-xl font-bold font-mono text-[#163C32] tabular-nums">
                {formatETB(product.priceETB)}
              </span>
            </div>
            <span className="text-[11px] text-[#252525]/50 italic">{product.concentration}</span>
          </div>

          {/* Sample Data Disclaimer Note */}
          {product.isSampleData && (
            <div className="mt-2 flex items-center gap-1 text-[10px] text-[#252525]/60 bg-[#F8F6F0] p-1.5 rounded-xs border border-[#163C32]/5">
              <Info className="w-3 h-3 text-[#C6A66B] shrink-0" />
              <span className="truncate" title={product.sampleDataNotice}>
                Editable catalog sample data · Inquire on WhatsApp
              </span>
            </div>
          )}

          {/* Action Buttons: Add to Cart & WhatsApp Order */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="w-full py-2.5 px-2 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold tracking-wider rounded-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#C6A66B]/30"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-2.5 px-2 bg-white hover:bg-[#F8F6F0] text-[#163C32] hover:text-[#0e2720] border border-[#163C32]/20 hover:border-[#163C32] text-xs font-semibold tracking-wider rounded-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              aria-label={`Order ${product.name} on WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#163C32]" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
