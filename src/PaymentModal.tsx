import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, totalAmount }: any) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment Successful!");
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl text-center">
        <h2 className="text-2xl font-black mb-2 text-gray-900">Secure Payment</h2>
        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-8">Pay with Chapa / Telebirr</p>
        
        <div className="bg-gray-50 p-6 rounded-3xl mb-8">
          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Total Amount</p>
          <p className="text-3xl font-black text-gray-900">{totalAmount} ETB</p>
        </div>

        <button 
          onClick={handlePay}
          className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-500 transition-colors"
        >
          {isProcessing ? "Processing..." : "Confirm & Pay"}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal; // <--- CRITICAL: Ensure this export is here