import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuPage from './MenuPage'; 
import CartDrawer from './CartDrawer'; 
import PaymentModal from './PaymentModal'; // Create this file as shown in previous step
import OrderStatus from './OrderStatus';
// --- MODULAR HEADER COMPONENT ---
const Header = ({ i18n, onSelectRestaurant, onBackHome, cartCount, onOpenCart }: any) => {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [resSearch, setResSearch] = useState("");
  const currentLang = i18n?.language || 'en';
  const isAmharic = currentLang === 'am';

  const togglePopup = (name: string) => setActivePopup(activePopup === name ? null : name);

  const restaurants = [
    { name: 'Abyssinia Burger', type: 'Fast Food' },
    { name: 'Habesha Pizza', type: 'Italian' },
    { name: 'Lucy Kitchen', type: 'Cultural' },
    { name: 'Sky Coffee', type: 'Cafe' }
  ];

  const filteredRes = restaurants.filter(r => r.name.toLowerCase().includes(resSearch.toLowerCase()));

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-[100] px-4 py-3 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-xl">
          <div className="flex flex-col gap-1 w-5">
            <span className="h-0.5 w-full bg-gray-900 rounded-full"></span>
            <span className="h-0.5 w-3/4 bg-gray-900 rounded-full"></span>
          </div>
        </button>
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBackHome}>
          <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center text-white font-black shadow-lg">F</div>
          <span className="text-lg font-black tracking-tighter hidden sm:block">FoodExpress</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button onClick={() => togglePopup('restaurants')} className="px-4 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-all shadow-md">
            {isAmharic ? 'ምግብ ቤቶች' : 'Restaurants'}
          </button>
          {activePopup === 'restaurants' && (
            <div className="fixed inset-x-4 top-16 md:absolute md:inset-auto md:right-0 md:top-12 w-auto md:w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 animate-in slide-in-from-top-2">
              <input 
                autoFocus type="text" placeholder="Search..." value={resSearch}
                className="w-full p-3 bg-gray-50 rounded-2xl mb-4 text-sm outline-none border focus:border-orange-500"
                onChange={(e) => setResSearch(e.target.value)}
              />
              <div className="space-y-1">
                {filteredRes.map((res) => (
                  <button key={res.name} onClick={() => { onSelectRestaurant(res.name); setActivePopup(null); }} className="w-full text-left p-3 hover:bg-orange-50 rounded-2xl">
                    <p className="text-sm font-black">{res.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button onClick={onOpenCart} className="relative w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-lg hover:bg-gray-50 transition-all">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

// --- MODULAR HERO SECTION ---
const Hero = ({ onSearch, searchQuery, setSearchQuery }: any) => (
  <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-100/40 blur-[120px] rounded-full -z-10" />
    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
      Everything delivered <br /> <span className="text-orange-500 underline decoration-orange-100">near you.</span>
    </h1>
    <p className="text-gray-400 font-bold mb-12 max-w-xl mx-auto uppercase tracking-[0.3em] text-[10px]">The #1 Platform for Ethiopia</p>
    <div className="max-w-2xl mx-auto bg-white p-2 rounded-[2.5rem] shadow-2xl flex items-center gap-2 border border-orange-50">
      <input className="w-full p-4 outline-none font-bold text-gray-700" placeholder="Search for restaurants..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={() => onSearch(searchQuery)} className="bg-orange-500 text-white px-10 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Find Food</button>
    </div>
  </section>
);

const RotatingCategories = ({ i18n }: any) => {
  const categories = [
    { n: "Burger", i: "🍔", am: "በርገር" }, { n: "Pizza", i: "🍕", am: "ፒዛ" }, { n: "Habesha", i: "🥘", am: "ሐበሻ" }, { n: "Coffee", i: "☕", am: "ቡና" },
    { n: "Pastry", i: "🍰", am: "ኬክ" }, { n: "Juice", i: "🍹", am: "ጭማቂ" }, { n: "Pasta", i: "🍝", am: "ፓስታ" }, { n: "Chicken", i: "🍗", am: "ዶሮ" },
  ];
  const displayCategories = [...categories, ...categories];

  return (
    <section className="py-20 bg-white overflow-hidden w-full relative group/section">
      <div className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 pointer-events-none opacity-5">
        <span className="text-[12vw] font-black uppercase">Ethiopia</span>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-10">
          {displayCategories.map((cat, index) => (
            <div key={index} className="mx-10 group flex flex-col items-center gap-6 cursor-pointer">
              <div className="w-28 h-28 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-5xl transition-all duration-700 group-hover:scale-[1.3] group-hover:bg-orange-500 group-hover:text-white">
                <span>{cat.i}</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-orange-500">{i18n?.language === 'am' ? cat.am : cat.n}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .group\/section:hover .animate-marquee { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

const PartnerCards = () => (
  <section id="partner" className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
        <h3 className="text-3xl font-black mb-4 group-hover:text-orange-500 transition-colors">Register your Restaurant</h3>
        <p className="text-gray-400 text-sm mb-8 font-medium">Join 2,000+ vendors and grow your business today.</p>
        <button className="border-2 border-gray-900 px-8 py-3 rounded-2xl font-black text-xs uppercase group-hover:bg-gray-900 group-hover:text-white transition-all">Get Started</button>
    </div>
    <div className="bg-gray-900 p-12 rounded-[4rem] text-white shadow-xl transition-all group relative overflow-hidden">
        <h3 className="text-3xl font-black mb-4 group-hover:text-orange-500 transition-colors">Become a Delivery Hero</h3>
        <p className="text-gray-500 text-sm mb-8 font-medium">Earn money on your own schedule. Be your own boss.</p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase hover:bg-white hover:text-orange-500 transition-all">Apply Now</button>
    </div>
  </section>
);

const AppDownload = () => (
  <section id="download" className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-orange-50 rounded-[5rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 border border-orange-100 overflow-hidden">
      <div className="flex-1">
        <h2 className="text-4xl font-black mb-6">Pocket-sized flavor. <br/> Download the App.</h2>
        <div className="flex flex-wrap gap-4 mt-10">
          <div className="bg-black text-white px-6 py-3 rounded-2xl flex items-center gap-3 cursor-pointer">
             <span className="text-2xl">📱</span>
             <div className="text-left leading-none"><small className="text-[10px] opacity-60 font-bold uppercase">Get it on</small><br/><span className="font-bold">Google Play</span></div>
          </div>
        </div>
      </div>
      <div className="flex-1">
         <div className="w-56 h-[400px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-gray-900 mx-auto overflow-hidden">
            <div className="bg-orange-500 h-16 w-full flex items-center justify-center text-white font-black text-xs">FoodExpress</div>
         </div>
      </div>
    </div>
  </section>
);

export default function App() {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isPaymentOpen, setIsPaymentOpen] = useState(false); // NEW: Payment State

  const handleSelectRestaurant = (name: string) => {
    setSelectedRestaurant(name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setSelectedRestaurant(null);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100 relative">
      <Header 
        i18n={i18n} 
        onSelectRestaurant={handleSelectRestaurant} 
        onBackHome={handleBackHome}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartCount={cartCount} 
        onCheckout={() => {
          setIsCartOpen(false);
          setIsPaymentOpen(true);
        }}
      />

      <PaymentModal 
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        totalAmount={cartCount * 450}
      />

      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-top-4">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
            <span className="text-orange-500 font-bold">✓</span>
            <p className="text-[10px] font-black uppercase tracking-widest">Added to basket</p>
          </div>
        </div>
      )}

      <main>
        {selectedRestaurant ? (
          <MenuPage 
            i18n={i18n} 
            restaurantName={selectedRestaurant} 
            onBack={handleBackHome} 
            onAddItem={handleAddToCart}
          />
        ) : (
          <>
            <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSelectRestaurant} />
            <RotatingCategories i18n={i18n} />
            <section className="max-w-5xl mx-auto px-6 py-12">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-50 flex flex-wrap justify-around items-center text-center gap-8">
                 <div><p className="text-4xl font-black text-gray-800">2000+</p><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Restaurants</p></div>
                 <div><p className="text-4xl font-black text-gray-800">15+</p><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Cities</p></div>
                 <div><p className="text-4xl font-black text-gray-800">30min</p><p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Avg Delivery</p></div>
              </div>
            </section>
            <PartnerCards />
            <AppDownload /> 
          </>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-10 text-center rounded-t-[5rem]">
        <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">© 2026 FoodExpress</p>
      </footer>
    </div>
  );
}