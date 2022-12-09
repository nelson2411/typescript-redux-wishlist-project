import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HomeContainer, BoxContainer, HomeIcons, HomeText } from './Home.styles';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name='description' content='This is the about page' />
        <meta name='keywords' content='OpenBootcamp, React, Redux, Nodejs, Vercel' />
        <meta name='author' content='Nelson Rosales' />
        <meta property='og:title' content='wishlist App' />
        <meta property='og:description' content='wishlist app created with ReactJs' />
        <meta property='og:image' content='https://i.ibb.co/58sJvh0/projects-4.jpg' />
        <meta property='og:url' content='https://typescript-redux-wishlist-project.vercel.app/' />
      </Helmet>
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
      <NavBar />
    </>
  );
};

export default Home;
