import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle, Navigation } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';
import { generateWhatsAppUrl } from '../utils/cart';

export const LocationAndContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    scentInterest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Build polite WhatsApp message from contact form
    const msg = [
      `*✨ NEW INQUIRY — ABDULMEJID PERFUME ✨*`,
      `_From Website Contact Form_`,
      ``,
      `• *Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone || 'Not provided'}`,
      `• *Fragrance of Interest:* ${formData.scentInterest || 'General Inquiry'}`,
      ``,
      `*Message:*`,
      `"${formData.message || 'I would like to speak with an ABDULMEJID fragrance advisor.'}"`,
    ].join('\n');

    setFormSubmitted(true);
    window.open(generateWhatsAppUrl(STORE_CONTACT.whatsAppNumber, msg), '_blank', 'noopener,noreferrer');
  };

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/Merkato+Addis+Ababa+Ethiopia', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold mb-3">
            VISIT OUR BOUTIQUE OR INQUIRE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#163C32] font-normal tracking-tight text-balance">
            Visit ABDULMEJID PERFUME
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-4 mb-4" />
          <p className="text-[#252525]/75 text-base sm:text-lg font-light leading-relaxed">
            Located in the heart of Merkato, Addis Ababa. Stop by for an in-person scent consultation or reach out to our team via WhatsApp or direct call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Store Information & Interactive Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Call Now Card */}
              <a
                href={`tel:${STORE_CONTACT.phoneTel}`}
                className="bg-white p-6 rounded-md border border-[#163C32]/10 hover:border-[#163C32] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#163C32]/10 text-[#163C32] flex items-center justify-center mb-4 group-hover:bg-[#163C32] group-hover:text-[#F8F6F0] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#163C32] font-semibold">Direct Phone</h4>
                  <p className="text-sm font-mono text-[#252525] mt-1 font-bold">{STORE_CONTACT.phoneDisplay}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#163C32]/10 text-xs font-semibold uppercase tracking-wider text-[#163C32] flex items-center gap-1 group-hover:text-[#C6A66B]">
                  <span>Call Store Now</span>
                  <span className="font-mono">→</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${STORE_CONTACT.whatsAppNumber}?text=${encodeURIComponent('Hello ABDULMEJID PERFUME, I am reaching out regarding fragrance inquiries in Addis Ababa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#163C32] text-[#F8F6F0] p-6 rounded-md border border-[#C6A66B] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#0e2720] text-[#C6A66B] flex items-center justify-center mb-4 border border-[#C6A66B]/30">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#F8F6F0] font-semibold">Official WhatsApp</h4>
                  <p className="text-sm font-mono text-[#DFC89B] mt-1 font-bold">{STORE_CONTACT.phoneRaw}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C6A66B]/20 text-xs font-semibold uppercase tracking-wider text-[#C6A66B] flex items-center gap-1 group-hover:text-white">
                  <span>Chat on WhatsApp</span>
                  <span className="font-mono">→</span>
                </div>
              </a>

            </div>

            {/* Store Hours & Location Detail Card */}
            <div className="bg-white p-6 rounded-md border border-[#163C32]/10 space-y-4 shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#163C32]">Boutique Location</h4>
                  <p className="text-sm text-[#252525] mt-0.5 font-medium">Merkato, Addis Ababa, Ethiopia</p>
                  <p className="text-xs text-[#252525]/60 mt-1">Conveniently located for fragrance enthusiasts across the capital.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#163C32]/10">
                <Clock className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#163C32]">Store Hours</h4>
                  <p className="text-xs text-[#252525]/80 mt-0.5">{STORE_CONTACT.hours}</p>
                </div>
              </div>
            </div>

            {/* Map Embed Container */}
            <div className="bg-white rounded-md border border-[#163C32]/10 overflow-hidden shadow-xs">
              <div className="p-3 bg-[#163C32] text-[#F8F6F0] flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-1.5 text-[#DFC89B]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Merkato Map Area</span>
                </span>
                <button
                  onClick={openGoogleMaps}
                  className="text-xs text-[#F8F6F0] hover:text-[#C6A66B] underline flex items-center gap-1 cursor-pointer"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </button>
              </div>

              <div className="relative aspect-16/9 w-full bg-[#E5E3DF]">
                {/* Embed OpenStreetMap / Google Maps View of Merkato Addis Ababa */}
                <iframe
                  title="ABDULMEJID PERFUME Merkato Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.7200%2C9.0200%2C38.7450%2C9.0400&amp;layer=mapnik&amp;marker=9.0305%2C38.7335"
                  className="w-full h-full filter saturate-90"
                  loading="lazy"
                />
              </div>

              <div className="p-3 text-center bg-[#F8F6F0] border-t border-[#163C32]/10">
                <button
                  onClick={openGoogleMaps}
                  className="text-xs font-semibold text-[#163C32] hover:text-[#C6A66B] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Search "Merkato Addis Ababa" on Google Maps</span>
                  <span className="font-mono">↗</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-md border border-[#163C32]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-semibold mb-2">
                PERSONAL CONCIERGE
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#163C32] font-semibold tracking-tight">
                Send an Inquiry to Our Team
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#252525]/70 font-light leading-relaxed">
                Fill out this quick form to immediately prepare your fragrance request with our Merkato sales team via WhatsApp.
              </p>

              {formSubmitted && (
                <div className="mt-4 p-4 bg-[#163C32]/5 border border-[#163C32]/20 rounded-xs flex items-center gap-3 text-xs text-[#163C32]">
                  <CheckCircle className="w-5 h-5 text-[#163C32] shrink-0" />
                  <span>Your inquiry has been prepared for WhatsApp. Feel free to send or edit your message directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="customer-name" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dawit Kebede"
                    className="w-full bg-[#F8F6F0] border border-[#163C32]/15 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="customer-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 09 11 22 33 44"
                    className="w-full bg-[#F8F6F0] border border-[#163C32]/15 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="scent-interest" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1">
                    Fragrance of Interest
                  </label>
                  <input
                    id="scent-interest"
                    type="text"
                    value={formData.scentInterest}
                    onChange={(e) => setFormData({ ...formData, scentInterest: e.target.value })}
                    placeholder="e.g. Diamond Collection, Lead Storm, or Oud"
                    className="w-full bg-[#F8F6F0] border border-[#163C32]/15 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#163C32] mb-1">
                    Message / Special Request
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ask about batch availability, gift packaging, or delivery in Addis Ababa..."
                    className="w-full bg-[#F8F6F0] border border-[#163C32]/15 focus:border-[#163C32] rounded-xs px-3.5 py-2.5 text-xs text-[#252525] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] text-xs font-semibold tracking-widest uppercase rounded-sm border border-[#C6A66B] flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C6A66B]" />
                  <span>Send WhatsApp Message to Store</span>
                </button>
              </form>
            </div>

            <div className="mt-8 pt-4 border-t border-[#163C32]/10 text-[11px] text-[#252525]/60 text-center">
              Our Merkato sales team typically replies during business hours (8:30 AM – 7:30 PM).
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
