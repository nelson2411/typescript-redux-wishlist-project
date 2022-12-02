import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  CardContainer,
  CardBodyContainer,
  ListGroupContainer,
  ListGroupItemContainer,
  CardBodyButtonContainer,
  CardButton,
} from './Card.styles';
import { Link } from 'react-router-dom';
import { VideoGame } from '../../types/videoGamesTypes';

type ProductCardProps = {
  product: VideoGame;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <CardContainer style={{ width: '18rem' }}>
      <Card.Img variant='top' src={product.image} />
      <CardBodyContainer>
        <Card.Title>{product.name}</Card.Title>
      </CardBodyContainer>
      <ListGroupContainer>
        <ListGroupItemContainer>Genre: {product.genre}</ListGroupItemContainer>
        <ListGroupItemContainer>Publisher: {product.publisher}</ListGroupItemContainer>

        <ListGroupItemContainer>Price: ${product.price}</ListGroupItemContainer>
      </ListGroupContainer>
      <CardBodyButtonContainer>
        <CardButton>Add to Wishlist</CardButton>
        <Link to={`/product/${product.id}`}>
          <CardButton>More Info</CardButton>
        </Link>
      </CardBodyButtonContainer>
    </CardContainer>
  );
}

export default ProductCard;
