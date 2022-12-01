import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AppLink } from './AppBar.styles';
import { TfiGift } from 'react-icons/tfi';

const AppBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <AppLink to='/'>
            <TfiGift size={25} />
            <span style={{ margin: '0 12px' }}>Wishlist App</span>
          </AppLink>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppBar;
