import React from 'react';
import { VideoGame } from '../../types/videoGamesTypes';
import { useProduct } from '../../hooks/useProduct';
import { ProductInfoContainer } from './ProductInfo.styles';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

type ProductInfoProps = {
  id: any;
};

const ProductInfo = ({ id }: ProductInfoProps) => {
  const { product } = useProduct(id);
  console.log(product);

  return (
    <ProductInfoContainer>
      <Container>
        <Row>
          <Col>
            <Image src={product?.image} alt={product?.name} fluid />
          </Col>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item>Name: {product?.name}</ListGroup.Item>
              <ListGroup.Item>Genre: {product?.genre}</ListGroup.Item>
              <ListGroup.Item>Publisher: {product?.publisher}</ListGroup.Item>
              <ListGroup.Item>Year: {product?.year}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
