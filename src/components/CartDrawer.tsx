import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { CartItem } from '../utils/cart';
import { calculateCartSubtotal, formatETB } from '../utils/cart';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToWhatsApp: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToWhatsApp,
}) => {
  if (!isOpen) return null;

  const subtotal = calculateCartSubtotal(items);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="w-full max-w-md bg-[#F8F6F0] h-full shadow-2xl flex flex-col justify-between border-l border-[#C6A66B]/30 animate-slideLeft"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-heading"
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#163C32] text-[#F8F6F0] border-b border-[#C6A66B]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#C6A66B]" />
            <div>
              <h2 id="cart-drawer-heading" className="font-serif text-lg font-semibold text-[#F8F6F0]">
                Your Fragrance Bag
              </h2>
              <span className="text-[11px] text-[#B7C8B5] font-mono">
                {items.length} {items.length === 1 ? 'scent' : 'scents'} selected
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#F8F6F0]/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Items or Empty State) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#163C32]/10 border border-[#163C32]/20 flex items-center justify-center text-[#163C32]">
                <ShoppingBag className="w-8 h-8 text-[#163C32]" />
              </div>
              <h3 className="font-serif text-xl text-[#163C32]">Your Bag is Empty</h3>
              <p className="text-xs text-[#252525]/70 max-w-xs font-light leading-relaxed">
                Explore our curated collections of trending luxury perfumes and add your favorite scents to begin your order.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Browse Collections
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white p-4 rounded-sm border border-[#163C32]/10 shadow-2xs flex gap-4 relative group"
                >
                  {/* Item Image */}
                  <div className="w-20 h-20 bg-[#F8F6F0] rounded-xs overflow-hidden shrink-0 border border-[#163C32]/10">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C6A66B]">
                            {item.product.brand}
                          </span>
                          <h4 className="font-serif text-sm font-semibold text-[#163C32] leading-tight">
                            {item.product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#252525]/40 hover:text-red-600 transition-colors p-1"
                          aria-label={`Remove ${item.product.name} from bag`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-[#252525]/60 mt-0.5">{item.product.bottleSize}</div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#163C32]/20 rounded-xs bg-[#F8F6F0]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-xs font-bold text-[#163C32] hover:bg-white"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-mono font-bold text-[#163C32] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#163C32] hover:bg-white"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Total for this line item */}
                      <div className="font-mono text-xs font-bold text-[#163C32] tabular-nums">
                        {formatETB(item.product.priceETB * item.quantity)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer with Subtotal & Actions */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#163C32]/10 space-y-4 shadow-lg">
            
            {/* Subtotal Calculation */}
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between text-xs text-[#252525]/70">
                <span>Estimated Subtotal</span>
                <span className="font-mono text-base font-bold text-[#163C32] tabular-nums">
                  {formatETB(subtotal)}
                </span>
              </div>
              <div className="text-[11px] text-[#252525]/60 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C6A66B]" />
                <span>Pickup at Merkato or Delivery across Addis Ababa</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={onProceedToWhatsApp}
                className="w-full py-4 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#C6A66B] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A66B]" />
                <span>Proceed to WhatsApp Checkout</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 bg-transparent hover:bg-[#F8F6F0] text-[#163C32] text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <p className="text-[10px] text-center text-[#252525]/50 leading-tight">
              Order items will be formatted into a WhatsApp message for final verification with the ABDULMEJID PERFUME team.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
