import React from 'react';

const OrderStatus = ({ restaurantName, onBackHome }: any) => {
  const steps = [
    { label: 'Order Confirmed', time: '12:01 PM', status: 'complete' },
    { label: 'Preparing Food', time: '12:05 PM', status: 'current' },
    { label: 'Driver is Arriving', time: 'Estimating...', status: 'upcoming' },
    { label: 'Delivered', time: 'Estimating...', status: 'upcoming' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-[3rem] p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative Map Background Pulse */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 animate-pulse" />
          
          <h2 className="text-3xl font-black mb-1">Tracking Order</h2>
          <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-8">From {restaurantName}</p>

          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100" />

            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start relative">
                <div className={`w-6 h-6 rounded-full border-4 flex-shrink-0 z-10 ${
                  step.status === 'complete' ? 'bg-orange-500 border-orange-100' : 
                  step.status === 'current' ? 'bg-white border-orange-500 animate-bounce' : 'bg-white border-gray-100'
                }`} />
                <div>
                  <p className={`font-black text-sm ${step.status === 'upcoming' ? 'text-gray-300' : 'text-gray-900'}`}>
                    {step.label}
                  </p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">{step.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onBackHome}
          className="w-full mt-8 bg-gray-900 text-white py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest hover:bg-orange-500 transition-all shadow-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderStatus;