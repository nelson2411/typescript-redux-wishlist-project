import React from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/videogames').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return products;
};

export default useProducts;
