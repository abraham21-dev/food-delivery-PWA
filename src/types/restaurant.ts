export interface FoodItem {
  id: string;
  name_en: string;
  name_am: string;
  price: number;
  image: string;
  category: string;
}

export interface Restaurant {
  id: string;
  name_en: string;
  name_am: string;
  image: string;
  rating: number;
  deliveryTime: string;
  menu: FoodItem[];
}