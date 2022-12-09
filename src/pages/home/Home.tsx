import React from 'react';
import { Helmet } from 'react-helmet-async';
import mainImage from '../../assets/images/projects-2.jpg';
import NavBar from '../../components/NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import { AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { HomeContainer, BoxContainer, HomeIcons, HomeText } from './Home.styles';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel='canonical' href='https://typescript-redux-wishlist-project.vercel.app/' />
        <meta name='description' content='This is the about page' />
        <meta name='keywords' content='OpenBootcamp, React, Redux, Nodejs, Vercel' />
        <meta name='author' content='Nelson Rosales' />
        {/* Facebook meta tags */}
        <meta property='og:url' content='https://typescript-redux-wishlist-project.vercel.app/' />
        <meta property='og:title' content='wishlist App' />
        <meta property='og:description' content='wishlist app created with ReactJs' />
        <meta property='og:image' content={mainImage} />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='314' />
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
