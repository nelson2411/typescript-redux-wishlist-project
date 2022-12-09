// We need to fetch the info of one product based on the id
import { useState, useEffect } from 'react';
import { VideoGame } from '../types/videoGamesTypes';
import axios from 'axios';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<VideoGame | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://my-json-server.typicode.com/nelson2411/typescript-redux-wishlist-project/videogames/${id}`,
      );
      const product = response.data;
      setProduct(product);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product, loading, error };
};
