import React from 'react';
import CartTable from '../../components/card-table/CartTable';
import AppBar from '../../components/AppBar/AppBar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartTableContainer, LinkToHome } from './CartPage.styles';

const Cart = () => {
  return (
    <>
      <AppBar />

      <CartTableContainer>
        <LinkToHome to='/'>
          <Button variant='warning' className='shadow'>
            Go Back!
          </Button>
        </LinkToHome>
        <CartTable />
      </CartTableContainer>
    </>
  );
};

export default Cart;
