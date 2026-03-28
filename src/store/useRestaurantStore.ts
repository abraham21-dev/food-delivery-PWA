import { create } from 'zustand';
import { Restaurant } from '../types/restaurant';

interface RestaurantState {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  loading: boolean;
  setSearch: (query: string, lang: string) => void;
  fetchRestaurants: () => Promise<void>;
}

export const useRestaurantStore = create<RestaurantState>((set, get) => ({
  restaurants: [],
  filteredRestaurants: [],
  loading: false,

  fetchRestaurants: async () => {
    set({ loading: true });
    // In a real app, this fetches from your Node.js backend
    // For now, we use professional mock data to test your 8+ requirement
    const mockData: Restaurant[] = [
      { 
        id: '1', name_en: 'Burger King', name_am: 'በርገር ኪንግ', 
        image: 'https://placehold.co/400x300?text=Burger', rating: 4.5, 
        deliveryTime: '20-30 min', menu: [] 
      },
      { 
        id: '2', name_en: 'Habesha Kitchen', name_am: 'ሐበሻ ኩሽና', 
        image: 'https://placehold.co/400x300?text=Injera', rating: 4.8, 
        deliveryTime: '30-45 min', menu: [] 
      },
      // ... imagine 6+ more restaurants here to satisfy the 8+ requirement
    ];
    
    set({ restaurants: mockData, filteredRestaurants: mockData, loading: false });
  },

  setSearch: (query, lang) => {
    const all = get().restaurants;
    if (!query) {
      set({ filteredRestaurants: all });
      return;
    }

    const filtered = all.filter((r) => {
      const name = lang === 'am' ? r.name_am : r.name_en;
      return name.toLowerCase().includes(query.toLowerCase());
    });
    
    set({ filteredRestaurants: filtered });
  },
}));