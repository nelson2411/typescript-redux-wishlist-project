import React from 'react';
import CartTable from '../../components/card-table/CartTable';
import AppBar from '../../components/AppBar/AppBar';
import { CartTableContainer } from './CartPage.styles';

const Cart = () => {
  return (
    <>
      <AppBar />
      <CartTableContainer>
        <CartTable />
      </CartTableContainer>
    </>
  );
};

export default Cart;
