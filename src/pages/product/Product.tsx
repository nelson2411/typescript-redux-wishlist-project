import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ProductInfo from '../../components/product-info/ProductInfo';
import { useParams } from 'react-router-dom';
import { VideoGame } from '../../types/videoGamesTypes';
import { ProductContainer } from './Product.styles';

type Params = {
  id: any;
};

const Product = () => {
  const { id } = useParams<Params>();
  return (
    <>
      <AppBar />
      <ProductContainer>
        <ProductInfo id={id} />
      </ProductContainer>
    </>
  );
};

export default Product;
