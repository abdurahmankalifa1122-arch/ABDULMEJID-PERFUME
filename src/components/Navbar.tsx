import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Hello ABDULMEJID PERFUME! I am visiting your website and would like assistance with luxury fragrances in your Merkato store.'
    );
    window.open(`https://wa.me/${STORE_CONTACT.whatsAppNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Top subtle announcement bar */}
      <div className="bg-[#163C32] text-[#F8F6F0] text-xs py-2 px-4 border-b border-[#C6A66B]/30 tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C6A66B]">✦</span>
            <span>Merkato, Addis Ababa, Ethiopia</span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-[#B7C8B5]">Bespoke Fragrance Consultation Available</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_CONTACT.phoneTel}`}
              className="hover:text-[#C6A66B] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C6A66B]" />
              <span className="hidden md:inline font-mono">{STORE_CONTACT.phoneDisplay}</span>
            </a>
            <button
              onClick={openWhatsAppDirect}
              className="text-[#C6A66B] hover:text-white transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
            >
              <MessageCircle className="w-3 h-3 text-[#C6A66B]" />
              <span>WhatsApp Store</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-md border-b border-[#C6A66B]/30 py-3.5'
            : 'bg-[#F8F6F0] border-b border-[#C6A66B]/20 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-left group cursor-pointer focus:outline-none"
            aria-label="ABDULMEJID PERFUME Home"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-sm bg-[#163C32] border border-[#C6A66B] flex items-center justify-center text-[#C6A66B] shadow-xs group-hover:bg-[#0e2720] transition-colors">
                <span className="font-serif font-bold text-lg tracking-wider">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold tracking-[0.18em] text-[#163C32] text-lg sm:text-xl leading-none">
                  ABDULMEJID
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#C6A66B] font-semibold mt-0.5">
                  PERFUME · ADDIS ABABA
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-[#252525] hover:text-[#163C32] transition-colors py-1 relative group cursor-pointer"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className="text-[#252525] hover:text-[#163C32] transition-colors py-1 relative group cursor-pointer"
            >
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('collections')}
              className="text-[#252525] hover:text-[#163C32] transition-colors py-1 relative group cursor-pointer"
            >
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-[#252525] hover:text-[#163C32] transition-colors py-1 relative group cursor-pointer"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-[#252525] hover:text-[#163C32] transition-colors py-1 relative group cursor-pointer"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A66B] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#252525] hover:text-[#163C32] hover:bg-[#163C32]/5 rounded-full transition-colors cursor-pointer"
              aria-label="Search fragrances"
              title="Search fragrances"
            >
              <Search className="w-5 h-5 text-[#163C32]" />
            </button>

            {/* Shopping Bag Button with Counter */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#252525] hover:text-[#163C32] hover:bg-[#163C32]/5 rounded-full transition-colors cursor-pointer"
              aria-label={`Shopping bag with ${cartCount} items`}
              title="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-[#163C32]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#163C32] text-[#F8F6F0] border border-[#C6A66B] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Order Button */}
            <button
              onClick={openWhatsAppDirect}
              className="hidden lg:flex items-center gap-2 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] px-4 py-2 rounded-md border border-[#C6A66B] text-xs font-semibold tracking-wider transition-all duration-200 shadow-xs cursor-pointer hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A66B]" />
              <span className="whitespace-nowrap">WhatsApp Order</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#163C32] hover:bg-[#163C32]/5 rounded-md transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
          <div className="w-[82%] max-w-sm bg-[#F8F6F0] h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-[#C6A66B]/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C6A66B]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-[#163C32] border border-[#C6A66B] flex items-center justify-center text-[#C6A66B]">
                    <span className="font-serif font-bold text-base">A</span>
                  </div>
                  <div>
                    <div className="font-serif font-bold tracking-wider text-[#163C32] text-base leading-none">
                      ABDULMEJID
                    </div>
                    <div className="text-[9px] uppercase tracking-widest text-[#C6A66B] font-semibold mt-0.5">
                      PERFUME · MERKATO
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#252525] hover:text-[#163C32] rounded-full"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-4 text-base font-medium">
                <button
                  onClick={() => handleNavClick('hero')}
                  className="text-left text-[#252525] hover:text-[#163C32] py-2 border-b border-[#163C32]/5 flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="text-[#C6A66B]">→</span>
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-left text-[#252525] hover:text-[#163C32] py-2 border-b border-[#163C32]/5 flex items-center justify-between"
                >
                  <span>Shop Fragrances</span>
                  <span className="text-[#C6A66B]">→</span>
                </button>
                <button
                  onClick={() => handleNavClick('collections')}
                  className="text-left text-[#252525] hover:text-[#163C32] py-2 border-b border-[#163C32]/5 flex items-center justify-between"
                >
                  <span>Fragrance Collections</span>
                  <span className="text-[#C6A66B]">→</span>
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-left text-[#252525] hover:text-[#163C32] py-2 border-b border-[#163C32]/5 flex items-center justify-between"
                >
                  <span>About Our House</span>
                  <span className="text-[#C6A66B]">→</span>
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-left text-[#252525] hover:text-[#163C32] py-2 border-b border-[#163C32]/5 flex items-center justify-between"
                >
                  <span>Contact & Store Visit</span>
                  <span className="text-[#C6A66B]">→</span>
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#C6A66B]/20 space-y-3">
              <button
                onClick={openWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 bg-[#163C32] text-[#F8F6F0] py-3 rounded-md border border-[#C6A66B] text-sm font-semibold tracking-wider shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A66B]" />
                <span>WhatsApp Order (+251921637548)</span>
              </button>

              <a
                href={`tel:${STORE_CONTACT.phoneTel}`}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#163C32] py-3 rounded-md border border-[#163C32]/20 text-sm font-semibold tracking-wider hover:bg-[#F8F6F0]"
              >
                <Phone className="w-4 h-4 text-[#163C32]" />
                <span>Call Store: 09 21 63 75 48</span>
              </a>

              <p className="text-[11px] text-center text-[#252525]/60 pt-2">
                Merkato, Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
