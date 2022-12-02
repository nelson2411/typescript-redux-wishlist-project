import React from 'react';
import { Button, NavBarContainer } from './NavBar.styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to='/about'>
        <Button>About Me</Button>
      </Link>
      <Link to='/products'>
        <Button>Products</Button>
      </Link>
      <Link to='/cart'>
        <Button>Wishlist ❤</Button>
      </Link>
    </NavBarContainer>
  );
};

export default NavBar;
