import React from 'react';

const CartDrawer = ({ isOpen, onClose, cartCount, onCheckout }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl p-8 flex flex-col">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-black">Your Basket</h2>
          <button onClick={onClose} className="text-3xl text-gray-300">&times;</button>
        </div>
        <div className="flex-1">
          {cartCount > 0 ? (
            <p className="font-bold text-orange-500">{cartCount} Items Added</p>
          ) : (
            <p className="text-center text-gray-400 mt-20">Your basket is empty</p>
          )}
        </div>
        <button 
          onClick={onCheckout}
          className="w-full bg-orange-500 text-white py-5 rounded-3xl font-black uppercase text-xs tracking-widest"
        >
          Proceed to Online Payment
        </button>
      </div>
    </div>
  );
};

export default CartDrawer; // <--- YOU MUST HAVE THIS LINE