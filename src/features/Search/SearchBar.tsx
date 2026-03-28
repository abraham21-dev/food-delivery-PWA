import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Mic, MicOff, X } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Professional utility for Tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SearchBar = ({ onSearch }: { onSearch: (val: string) => void }) => {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Update search when voice transcript changes
  useEffect(() => {
    if (transcript) {
      setQuery(transcript);
      onSearch(transcript);
    }
  }, [transcript, onSearch]);

  const handleManualSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: false, language: 'en-US' }); 
      // Note: For Amharic voice recognition, use 'am-ET' if supported by the browser
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center w-full h-12 rounded-xl bg-white border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-orange-500 transition-all">
        <div className="pl-4 text-gray-400">
          <Search size={20} />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={handleManualSearch}
          placeholder={t('search_placeholder')}
          className="w-full h-full px-3 text-gray-700 bg-transparent outline-none placeholder:text-gray-400"
        />

        <div className="flex items-center pr-2 gap-2">
          {query && (
            <button onClick={() => { setQuery(''); onSearch(''); }} className="p-1 text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          )}
          
          {browserSupportsSpeechRecognition && (
            <button 
              onClick={toggleListening}
              className={cn(
                "p-2 rounded-full transition-colors",
                listening ? "bg-red-100 text-red-600 animate-pulse" : "bg-gray-100 text-gray-600"
              )}
            >
              {listening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          )}
        </div>
      </div>
      
      {listening && (
        <p className="absolute -bottom-6 left-0 text-xs text-red-500 font-medium italic">
          {t('voice_listening')}...
        </p>
      )}
    </div>
  );
};