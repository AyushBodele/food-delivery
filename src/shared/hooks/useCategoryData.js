import { useEffect, useState } from 'react';
import { foodMeta } from '../constants/data';
import { apiService } from '../services/api';

export function useCategoryData(type) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const meta = foodMeta[type];
      if (!meta) return;

      setLoading(true);
      setError(null);

      try {
        const json = await apiService.fetchCategoryData({
          lat: 21.1458004,
          lng: 79.0881546,
          collection: meta.collection,
          tag: meta.tag,
        });

        setTitle(json?.data?.cards?.[0]?.card?.card?.title || '');
        setDescription(json?.data?.cards?.[0]?.card?.card?.description || '');
        setText(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.text || '');
      } catch (err) {
        setError(err.message);
        console.error('Error fetching category data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [type]);

  return { title, description, text, loading, error };
}