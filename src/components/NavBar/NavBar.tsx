import React from 'react';
import { Button, NavBarContainer } from './NavBar.styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Button>About Me</Button>
      <Link to='/products'>
        <Button>Products</Button>
      </Link>
      <Button>Wishlist ❤</Button>
    </NavBarContainer>
  );
};

export default NavBar;
