import React, { useState } from 'react';

const MenuPage = ({ restaurantName, onBack, onAddItem }: any) => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', 'Burgers', 'Pizza', 'Sides', 'Drinks'];
  return (
    <div className="min-h-screen bg-white pb-32 animate-in fade-in duration-500">
      
      {/* 1. PROFESSIONAL BACK NAVIGATION BAR */}
      <div className="sticky top-[73px] bg-white/95 backdrop-blur-md z-40 border-b border-gray-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-xl shadow-sm"
          >
            ←
          </button>
          <div>
            <h2 className="font-black text-lg md:text-xl leading-none tracking-tight">
              {restaurantName || 'Restaurant'}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Open Now • 25-35 min
              </p>
            </div>
          </div>
        </div>
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-full transition-colors text-lg">
          🔍
        </button>
      </div>

      {/* 2. CATEGORY HORIZONTAL SCROLL */}
      <div className="sticky top-[145px] bg-white z-30 border-b border-gray-50 overflow-x-auto no-scrollbar flex gap-2 p-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
              activeTab === cat 
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-100' 
              : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. MENU LIST */}
      <div className="max-w-3xl mx-auto px-6 mt-8 space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div 
            key={item} 
            className="flex items-center justify-between p-4 rounded-[2.5rem] border border-gray-50 hover:border-orange-100 transition-all bg-white group"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                {item % 2 === 0 ? '🍕' : '🍔'}
              </div>
              
              <div>
                <h4 className="font-black text-sm md:text-base text-gray-900 leading-tight">
                  Premium {activeTab !== 'All' ? activeTab : 'Combo'} #{item}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium mt-1 line-clamp-1">
                  Prepared with fresh local ingredients and spices.
                </p>
                <div className="flex items-center gap-2 mt-3">
                   <span className="text-sm font-black text-gray-900">450 <small className="text-[10px]">ETB</small></span>
                </div>
              </div>
            </div>

            <button 
              onClick={onAddItem}
              className="w-12 h-12 bg-gray-900 text-white rounded-[1.2rem] font-black text-xl hover:bg-orange-500 transition-all active:scale-90 shadow-lg"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;