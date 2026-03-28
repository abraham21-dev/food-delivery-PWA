import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRestaurantStore } from '../store/useRestaurantStore';

export const useAIRecommendation = () => {
  const { i18n } = useTranslation();
  const { restaurants } = useRestaurantStore();

  const recommendation = useMemo(() => {
    const hour = new Date().getHours();
    
    // Simple "Modern" heuristic engine
    if (hour < 11) return i18n.language === 'am' ? 'ቁርስ' : 'Breakfast';
    if (hour < 16) return i18n.language === 'am' ? 'ምሳ' : 'Lunch';
    return i18n.language === 'am' ? 'እራት' : 'Dinner';
  }, [i18n.language]);

  return { recommendation };
};