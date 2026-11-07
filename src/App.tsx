import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionsGrid } from './components/CollectionsGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyUs } from './components/WhyUs';
import { CampaignBanner } from './components/CampaignBanner';
import { AboutSection } from './components/AboutSection';
import { TikTokSection } from './components/TikTokSection';
import { LocationAndContact } from './components/LocationAndContact';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppCheckoutModal } from './components/WhatsAppCheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, FragranceCategory } from './types';
import { CartItem, calculateTotalCount } from './utils/cart';
import { Check, MessageCircle } from 'lucide-react';
import { STORE_CONTACT } from './data/products';

export default function App() {
  // Shopping Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('abdulmejid_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Default seed cart with 1 sample item so user immediately sees functional shopping bag
    return [
      {
        product: {
          id: 'lead-storm-assaf',
          name: 'Lead Storm',
          brand: 'Assaf',
          priceETB: 5400,
          size: '100ml / 3.4 fl.oz.',
          bottleSize: '100ml / 3.4 fl.oz.',
          image: '/src/assets/images/product_assaf_lead_storm_1794041590040.jpg',
        },
        quantity: 1,
      },
    ];
  });

  // UI state
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [whatsAppCheckoutOpen, setWhatsAppCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<FragranceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('abdulmejid_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          product: {
            id: product.id,
            name: product.name,
            brand: product.brand,
            priceETB: product.priceETB,
            size: product.bottleSize,
            bottleSize: product.bottleSize,
            image: product.image,
          },
          quantity,
        },
      ];
    });
    showToast(`Added ${quantity} × ${product.name} to your fragrance bag`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.product.id === productId ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from fragrance bag');
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromGrid = (catId: FragranceCategory) => {
    setSelectedCategory(catId);
    handleNavigate('shop');
  };

  const handleOrderCompleted = () => {
    showToast('WhatsApp order inquiry launched successfully!');
  };

  const totalCartCount = calculateTotalCount(cartItems);

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#252525] flex flex-col font-sans selection:bg-[#163C32] selection:text-[#F8F6F0]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#163C32] text-[#F8F6F0] px-4 py-3 rounded-md shadow-2xl border border-[#C6A66B] flex items-center gap-3 text-xs font-medium animate-fadeIn">
          <div className="w-5 h-5 rounded-full bg-[#C6A66B] text-[#163C32] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplore={() => handleNavigate('shop')}
          onContact={() => handleNavigate('contact')}
        />

        {/* 2. Shop by Collection Grid */}
        <CollectionsGrid
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategoryFromGrid}
        />

        {/* 3. Featured Fragrances & Catalog */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onViewDetails={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
        />

        {/* 4. Why ABDULMEJID PERFUME Benefits */}
        <WhyUs />

        {/* 5. Luxury Campaign Banner */}
        <CampaignBanner
          onDiscoverMore={() => {
            setSelectedCategory('trending');
            handleNavigate('shop');
          }}
        />

        {/* 6. About ABDULMEJID PERFUME */}
        <AboutSection onContact={() => handleNavigate('contact')} />

        {/* 7. TikTok Integration Section */}
        <TikTokSection />

        {/* 8. Location & Contact Section */}
        <LocationAndContact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToWhatsApp={() => {
          setCartDrawerOpen(false);
          setWhatsAppCheckoutOpen(true);
        }}
      />

      {/* WhatsApp Checkout Modal */}
      <WhatsAppCheckoutModal
        isOpen={whatsAppCheckoutOpen}
        onClose={() => setWhatsAppCheckoutOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Floating Quick WhatsApp Action Button on Bottom Right */}
      <a
        href={`https://wa.me/${STORE_CONTACT.whatsAppNumber}?text=${encodeURIComponent('Hello ABDULMEJID PERFUME! I would like to inquire about fragrances in your Merkato boutique.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-30 bg-[#163C32] hover:bg-[#0e2720] text-[#F8F6F0] p-3.5 rounded-full shadow-2xl border border-[#C6A66B] flex items-center gap-2 group transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
        title="Chat with ABDULMEJID PERFUME on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-[#C6A66B]" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider pr-1 text-[#F8F6F0]">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
