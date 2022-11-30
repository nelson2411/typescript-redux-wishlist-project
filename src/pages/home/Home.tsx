import Container from 'react-bootstrap/Container'
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import React from 'react'
import { HomeContainer, BoxContainer, HomeIcons, HomeText } from './Home.styles'

const Home = () => {
  return (
    <HomeContainer>
      <BoxContainer>
        <HomeIcons>
          <AiOutlineCloseCircle style={{ margin: '0 2px' }} />
          <AiOutlinePlusCircle style={{ margin: '0 2px' }} />
          <AiOutlineMinusCircle style={{ margin: '0 2px' }} />
        </HomeIcons>
        <HomeText>
          <h1>Make your wishlist</h1>
          <p>First and only retro-videogames store</p>
        </HomeText>
      </BoxContainer>
    </HomeContainer>
  )
}

export default Home
