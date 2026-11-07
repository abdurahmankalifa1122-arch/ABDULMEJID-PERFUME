import React, { useState } from 'react';
import { X, MessageCircle, AlertCircle, MapPin, User, Phone, FileText } from 'lucide-react';
import { CartItem } from '../utils/cart';
import { calculateCartSubtotal, formatETB, generateWhatsAppOrderMessage, generateWhatsAppUrl } from '../utils/cart';
import { STORE_CONTACT } from '../data/products';

interface WhatsAppCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const WhatsAppCheckoutModal: React.FC<WhatsAppCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerLocation, setCustomerLocation] = useState('Merkato / Addis Ababa');
  const [customerPhone, setCustomerPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = calculateCartSubtotal(items);

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMsg('Please enter your full name for the store order.');
      return;
    }
    if (!customerLocation.trim()) {
      setErrorMsg('Please enter your delivery or store pickup location.');
      return;
    }

    const message = generateWhatsAppOrderMessage({
      customerName,
      customerLocation,
      customerPhone,
      notes,
      items,
    });

    const url = generateWhatsAppUrl(STORE_CONTACT.whatsAppNumber, message);

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    
    // Complete callback
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="bg-[#F8F6F0] w-full max-w-lg max-h-[90vh] flex flex-col rounded-md shadow-2xl border border-[#C6A66B]/50 overflow-hidden relative my-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
      >
        {/* Header */}
        <div className="bg-[#163C32] text-[#F8F6F0] p-5 sm:p-6 border-b border-[#C6A66B]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#0e2720] border border-[#C6A66B] flex items-center justify-center text-[#C6A66B]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 id="checkout-modal-title" className="font-serif text-lg font-semibold text-[#F8F6F0]">
                WhatsApp Direct Checkout
              </h3>
              <p className="text-[11px] text-[#C6A66B] font-mono">ABDULMEJID PERFUME · +251921637548</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
          
          {/* Transparent Notice about order status */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-3.5 rounded-xs flex items-start gap-2.5 text-xs text-[#252525]">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#163C32]">Direct WhatsApp Ordering: </span>
              This will open WhatsApp with your itemized order. Orders are confirmed and arranged directly with our Merkato store team. No online pre-payment is processed on this website.
            </div>
          </div>

          {/* Order Summary Mini-Receipt */}
          <div className="bg-white p-4 rounded-sm border border-[#163C32]/10 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#163C32] border-b border-[#163C32]/10 pb-2 flex justify-between">
              <span>Order Summary</span>
              <span>{items.length} items</span>
            </div>
            <div className="divide-y divide-[#163C32]/5 max-h-36 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.product.id} className="py-1.5 flex justify-between text-xs">
                  <div className="truncate pr-2">
                    <span className="font-medium text-[#163C32]">{item.product.name}</span>{' '}
                    <span className="text-[#252525]/60">× {item.quantity}</span>
                  </div>
                  <span className="font-mono font-semibold text-[#163C32] shrink-0 tabular-nums">
                    {formatETB(item.product.priceETB * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#163C32]/10 flex justify-between text-sm font-bold text-[#163C32]">
              <span>Subtotal</span>
              <span className="font-mono text-base text-[#163C32] tabular-nums">{formatETB(subtotal)}</span>
            </div>
          </div>

          {errorMsg && (
            <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-xs border border-red-200">
              {errorMsg}
            </p>
          )}

          {/* Customer Input Details */}
          <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
            <div>
              <label htmlFor="order-customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Your Name <span className="text-red-500">*</span></span>
              </label>
              <input
                id="order-customer-name"
                type="text"
                required
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="e.g. Alazar Mengistu"
                className="w-full bg-white border border-[#163C32]/20 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="order-customer-location" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Delivery or Store Pickup Location <span className="text-red-500">*</span></span>
              </label>
              <input
                id="order-customer-location"
                type="text"
                required
                value={customerLocation}
                onChange={(e) => {
                  setCustomerLocation(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="e.g. Merkato Store Pickup / Bole / Kazanchis"
                className="w-full bg-white border border-[#163C32]/20 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="order-customer-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Your Phone Number (Optional)</span>
              </label>
              <input
                id="order-customer-phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 09 11 23 45 67"
                className="w-full bg-white border border-[#163C32]/20 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="order-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Order Notes / Fragrance Questions</span>
              </label>
              <textarea
                id="order-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need gift wrap, or inquire about current batch date..."
                className="w-full bg-white border border-[#163C32]/20 focus:border-[#163C32] rounded-xs px-3.5 py-2 text-xs text-[#252525] outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-bold tracking-widest uppercase rounded-sm border border-[#C6A66B] flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer mt-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A66B]" />
              <span>Send Order via WhatsApp (+251921637548)</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};
