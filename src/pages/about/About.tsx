import React from 'react';
import data from '../../data/profile';
import AppBar from '../../components/AppBar/AppBar';
import { HomeContainer, ImageContainer } from './About.styles';
import { Container, Image, Col, Row, Badge, ListGroup } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaTwitterSquare } from 'react-icons/fa';

const About = () => {
  const { name, image, description } = data;
  return (
    <HomeContainer>
      <AppBar />
      <Container>
        <Row>
          <Col>
            <ImageContainer src={image} alt={name} width={500} className='rounded-3' />
          </Col>
          <Col className='d-flex flex-column justify-content-center align-items-center'>
            <h1>{name}</h1>
            <span>{description}</span>
            {/* Social icons horizontal list */}
            <ListGroup horizontal variant='flush' className='mt-5 d-flex justify-content-center'>
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
