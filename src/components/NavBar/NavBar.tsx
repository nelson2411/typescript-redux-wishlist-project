import React from 'react'
import { Button, NavBarContainer } from './NavBar.styles'

const NavBar = () => {
  return (
    <NavBarContainer>
      <Button>About Me</Button>
      <Button>Products</Button>
      <Button>Wishlist ❤</Button>
    </NavBarContainer>
  )
}

export default NavBar
