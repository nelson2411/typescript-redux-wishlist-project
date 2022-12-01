import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/card/Card';
import AppBar from '../../components/AppBar/AppBar';
import { VideoGame } from '../../types/videoGamesTypes';
import { ProductsContainer, ProductsGrid } from './Products.styles';

const Products = () => {
  const { products } = useProducts();
  console.log(products);

  return (
    <>
      <AppBar />

      <ProductsContainer>
        <ProductsGrid>
          {products.map((product: VideoGame) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </ProductsContainer>
    </>
  );
};

export default Products;
