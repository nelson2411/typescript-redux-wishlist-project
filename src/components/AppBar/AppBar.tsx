import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Badge, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/gameSlice';
import { AppLink } from './AppBar.styles';
import { TfiGift } from 'react-icons/tfi';

import { FaShoppingCart } from 'react-icons/fa';

const AppBar = () => {
  const cart = useSelector(selectCart);
  return (
    <Navbar bg='dark' variant='dark' className='fixed-top'>
      <Container>
        <Navbar.Brand>
          <AppLink to='/'>
            <TfiGift size={25} />
            <span style={{ margin: '0 12px' }}>Wishlist App</span>
          </AppLink>
        </Navbar.Brand>
        <Nav.Link>
          <FaShoppingCart size={25} style={{ color: 'whitesmoke' }} />
          <Badge bg='secondary'>{cart.length}</Badge>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default AppBar;
