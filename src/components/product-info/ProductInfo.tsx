import React from 'react';
import { VideoGame } from '../../types/videoGamesTypes';
import { useProduct } from '../../hooks/useProduct';
import {
  ProductInfoContainer,
  PlatformsContainer,
  ImageContainer,
  InfoContainer,
  InfoGameContainer,
  BadgeContainer,
  InfoTextContainer,
  RowContainer,
} from './ProductInfo.styles';
import { Container, Row, Col, Image, Card, ListGroup, Badge } from 'react-bootstrap';

type ProductInfoProps = {
  id: number;
};

const ProductInfo = ({ id }: ProductInfoProps) => {
  const { product } = useProduct(id);
  console.log(product);

  return (
    <ProductInfoContainer>
      <Container fluid>
        <RowContainer>
          <Col className='d-flex justify-content-center align-items-center mt-5'>
            <ImageContainer src={product?.image} alt={product?.name} fluid />
          </Col>
          <InfoTextContainer>
            <InfoContainer>
              <InfoGameContainer>Name: {product?.name}</InfoGameContainer>
              <InfoGameContainer>Genre: {product?.genre}</InfoGameContainer>
              <InfoGameContainer>Publisher: {product?.publisher}</InfoGameContainer>
              <InfoGameContainer>Year: {product?.year}</InfoGameContainer>
              <InfoGameContainer>Price: ${product?.price}</InfoGameContainer>
              <PlatformsContainer>
                Platforms:
                {product?.platforms.map((platform, index) => (
                  <ListGroup horizontal key={index}>
                    <BadgeContainer bg='success'>
                      <h6>{platform}</h6>
                    </BadgeContainer>
                  </ListGroup>
                ))}
              </PlatformsContainer>
            </InfoContainer>
          </InfoTextContainer>
        </RowContainer>
      </Container>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
