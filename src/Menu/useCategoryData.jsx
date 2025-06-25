import { useEffect, useState } from 'react';
import {foodMeta} from '../utils/data';
import {getCategoryApiUrl} from '../utils/data';

export default function useCategoryData(type) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const meta = foodMeta[type];
    if (!meta) return;

    const apiUrl = getCategoryApiUrl({
      lat: 20.9319821,
      lng: 77.7523039,
      collection: meta.collection,
      tag: meta.tag,
    });

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setTitle(json?.data?.cards?.[0]?.card?.card?.title || '');
        setDescription(json?.data?.cards?.[0]?.card?.card?.description || '');
        setText(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.text || '');
      });
  }, [type]);

  return { title, description, text };
}
