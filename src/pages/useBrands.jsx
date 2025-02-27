// src/hooks/useBrands.js
import { useEffect, useState } from 'react';

const useBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://theautocops.com/admin_panel/public/api/brands");
        const data = await response.json();
        if (data && data.brands) {
          const visibleBrands = data.brands.filter(brand => brand.visible_on_footer === 1);
          setBrands(visibleBrands);
        }
      } catch (error) {
        setError('Error fetching brands');
        console.error('Error fetching brands:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading, error };
};

export default useBrands;
