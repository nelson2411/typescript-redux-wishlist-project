import React from 'react';
import data from '../../data/profile';
import { Helmet } from 'react-helmet-async';
import AppBar from '../../components/AppBar/AppBar';
import { HomeContainer, ImageContainer } from './About.styles';
import { Link } from 'react-router-dom';
import { Container, Image, Col, Row, Badge, ListGroup, Button } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaTwitterSquare } from 'react-icons/fa';

const About = () => {
  const { name, image, description } = data;
  return (
    <HomeContainer>
      <Helmet>
        <title>About Page</title>
        <meta name='description' content='This is the about page' />
        <meta name='keywords' content='OpenBootcamp, React, Redux, Nodejs, Vercel' />
        <meta name='author' content='Nelson Rosales' />
        <meta property='og:title' content='About Me' />
        <meta property='og:description' content='This is the about page' />
        <meta property='og:image' content={image} />
        <meta property='og:image:width' content='600' />
        <meta property='og:image:height' content='314' />
        <meta
          property='og:url'
          content='https://typescript-redux-wishlist-project.vercel.app/about'
        />
      </Helmet>
      <AppBar />
      <Container>
        <Row>
          <Link to='/' className='mr-auto'>
            <Button variant='warning' className='shadow'>
              Go Back!
            </Button>
          </Link>
          <Col className='mb-5 mt-5'>
            <ImageContainer src={image} alt={name} width={500} className='rounded-3' />
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            <h1>{name}</h1>
            <span>{description}</span>
            {/* Social icons horizontal list */}
            <ListGroup
              horizontal
              variant='flush'
              className='mt-5 d-flex justify-content-center shadow'
            >
              <ListGroup.Item>
                <a
                  href='https://www.linkedin.com/in/nelsonrosales24/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin size={35} />
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href='https://github.com/nelson2411' target='_blank' rel='noreferrer'>
                  <FaGithubSquare size={35} />
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href='https://stackoverflow.com/users/11797301/nelson-rosales'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaStackOverflow size={35} />
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href='https://twitter.com/NelsonRosales27' target='_blank' rel='noreferrer'>
                  <FaTwitterSquare size={35} />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default About;
