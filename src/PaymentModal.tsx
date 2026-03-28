import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onSuccess: () => void;
}

const PaymentModal = ({ isOpen, onClose, totalAmount, onSuccess }: PaymentModalProps) => {
  const { t, i18n } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);
  const isAmharic = i18n.language === 'am';

  if (!isOpen) return null;

  const handleChapaPayment = async () => {
    setIsProcessing(true);

    // This is your Test Public Key from the Chapa Dashboard
    const CHAPA_PUBLIC_KEY = "CHAPUBK_TEST-LQ1nPnS8oA45BG7S0LE0hvnUlAFE4rnw";

    try {
      // In a production app, you would call your backend to initialize this.
      // For this demo, we simulate the processing delay before showing the success state.
      setTimeout(() => {
        setIsProcessing(false);
        onSuccess(); // This triggers the OrderStatus tracking screen in App.tsx
      }, 2500);
      
      /* // REAL CHAPA REDIRECT LOGIC:
      const tx_ref = `tx-foodexpress-${Date.now()}`;
      window.location.href = `https://checkout.chapa.co/checkout/payment-page?public_key=${CHAPA_PUBLIC_KEY}&tx_ref=${tx_ref}&amount=${totalAmount}&currency=ETB&title=FoodExpress&description=OrderPayment`;
      */
      
    } catch (error) {
      console.error("Payment Error:", error);
      setIsProcessing(false);
      alert(isAmharic ? "ክፍያው አልተሳካም" : "Payment failed. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md" 
        onClick={!isProcessing ? onClose : undefined} 
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl text-center animate-in zoom-in-95 duration-300">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">💳</span>
        </div>

        <h2 className="text-2xl font-black mb-2 text-gray-900">
          {isAmharic ? "ደህንነቱ የተጠበቀ ክፍያ" : "Secure Payment"}
        </h2>
        <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-8">
          {isAmharic ? "በቻፓ / በቴሌብር ይክፈሉ" : "Pay with Chapa / Telebirr"}
        </p>
        
        <div className="bg-gray-50 p-6 rounded-3xl mb-8 border border-gray-100">
          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">
            {isAmharic ? "ጠቅላላ ክፍያ" : "Total Amount"}
          </p>
          <p className="text-3xl font-black text-gray-900">{totalAmount} <small className="text-sm">ETB</small></p>
        </div>

        <button 
          onClick={handleChapaPayment}
          disabled={isProcessing}
          className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg ${
            isProcessing 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "bg-black text-white hover:bg-orange-500 active:scale-95 shadow-orange-100"
          }`}
        >
          {isProcessing 
            ? (isAmharic ? "በመከናወን ላይ..." : "Processing...") 
            : (isAmharic ? "ክፍያውን አረጋግጥ" : "Confirm & Pay")}
        </button>

        {!isProcessing && (
          <button 
            onClick={onClose}
            className="mt-6 text-[10px] font-black uppercase text-gray-300 hover:text-gray-900 transition-colors"
          >
            {isAmharic ? "ተመለስ" : "Cancel"}
          </button>
        )}
      </div>
    </div>
  );
};

// Ensure this default export exists to fix the SyntaxError
export default PaymentModal;