import React from 'react';
import axios from 'axios';
import { VideoGame } from '../types/videoGamesTypes';

//Fetch all videogames

const useProducts = () => {
  const [products, setProducts] = React.useState<VideoGame[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/nelson2411/typescript-redux-wishlist-project/videogames/',
      );
      const products = response.data;
      setProducts(products);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
