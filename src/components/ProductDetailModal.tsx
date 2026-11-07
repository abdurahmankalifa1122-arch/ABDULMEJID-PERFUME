import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Info, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { formatETB, generateWhatsAppUrl } from '../utils/cart';
import { STORE_CONTACT } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleWhatsAppOrder = () => {
    const totalETB = product.priceETB * quantity;
    const message = [
      `*✨ DIRECT WHATSAPP ORDER — ABDULMEJID PERFUME ✨*`,
      `_Location: Merkato, Addis Ababa, Ethiopia_`,
      ``,
      `Hello! I would like to order:`,
      `• *Fragrance:* ${product.name}`,
      `• *Brand:* ${product.brand}`,
      `• *Bottle Size:* ${product.bottleSize}`,
      `• *Concentration:* ${product.concentration}`,
      `• *Quantity:* ${quantity}`,
      `• *Unit Price:* ${formatETB(product.priceETB)}`,
      `• *Total Price:* ${formatETB(totalETB)}`,
      ``,
      `Please let me know if this batch is available for pickup at your Merkato store or delivery across Addis Ababa. Thank you!`,
    ].join('\n');

    window.open(generateWhatsAppUrl(STORE_CONTACT.whatsAppNumber, message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog Card */}
      <div
        className="relative bg-[#F8F6F0] w-full max-w-4xl rounded-md shadow-2xl overflow-hidden border border-[#C6A66B]/40 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#163C32] flex items-center justify-center shadow-md transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left: Big Product Image */}
          <div className="md:col-span-5 bg-white relative p-6 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#163C32]/10">
            <div className="relative w-full aspect-1/1 sm:aspect-4/5 rounded-sm overflow-hidden bg-[#F8F6F0]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#163C32] text-[#F8F6F0] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#C6A66B]">
                  {product.stockStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Information & Purchase Controls */}
          <div className="md:col-span-7 p-6 sm:p-8 pt-10 md:pt-8 pr-12 md:pr-14 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Brand and Size Header */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-[#C6A66B] font-semibold uppercase tracking-[0.2em] font-sans">
                  {product.brand}
                </span>
                <span className="text-[#252525]/70 font-mono">{product.bottleSize} · {product.concentration}</span>
              </div>

              {/* Title */}
              <h2
                id="modal-product-title"
                className="font-serif text-2xl sm:text-3xl text-[#163C32] font-semibold tracking-tight"
              >
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 pt-1 border-b border-[#163C32]/10 pb-4">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-[#163C32] tabular-nums">
                  {formatETB(product.priceETB)}
                </span>
                <span className="text-xs text-[#252525]/60">ETB (Ethiopian Birr)</span>
              </div>

              {/* Sample Data Disclaimer Note */}
              {product.isSampleData && (
                <div className="flex items-start gap-2 bg-white p-3 rounded-xs border border-[#C6A66B]/30 text-xs text-[#252525]/75">
                  <Info className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#163C32]">Editable Catalog Data: </span>
                    {product.sampleDataNotice}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1">
                  About this Fragrance
                </h4>
                <p className="text-sm text-[#252525]/80 font-light leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Olfactory Notes Pyramid */}
              <div className="bg-white p-4 rounded-sm border border-[#163C32]/10 space-y-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A66B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Olfactory Profile</span>
                </div>

                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#163C32]">Top Notes: </span>
                    <span className="text-[#252525]/80">{product.scentProfile.topNotes.join(' · ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#163C32]">Heart Notes: </span>
                    <span className="text-[#252525]/80">{product.scentProfile.heartNotes.join(' · ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#163C32]">Base Notes: </span>
                    <span className="text-[#252525]/80">{product.scentProfile.baseNotes.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Store Service Trust Strip */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#252525]/70 pt-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#163C32]" />
                  <span>Merkato Store Pickup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#163C32]" />
                  <span>Direct WhatsApp Verification</span>
                </div>
              </div>

            </div>

            {/* Quantity Selector and Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#163C32]/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#163C32]">Quantity</span>
                <div className="flex items-center border border-[#163C32]/20 rounded-xs bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-semibold hover:bg-[#F8F6F0] text-[#163C32] transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-mono font-bold text-[#163C32] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-semibold hover:bg-[#F8F6F0] text-[#163C32] transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-4 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 border border-[#C6A66B] shadow-md transition-all cursor-pointer"
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4 text-[#C6A66B]" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#C6A66B]" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-4 bg-white hover:bg-[#FAF8F4] text-[#163C32] border border-[#163C32] hover:border-[#0e2720] text-xs font-semibold tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#163C32]" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
