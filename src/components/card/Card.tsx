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
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, addToCart } from '../../redux/slices/gameSlice';

type ProductCardProps = {
  product: VideoGame;
};

function ProductCard({ product }: ProductCardProps) {
  // change the button text based on whether the product is in the cart or not
  const [buttonText, setButtonText] = React.useState('Add to Wishlist');
  // Change button className based on whether the product is in the cart or not
  const [buttonClassName, setButtonClassName] = React.useState('not-in-cart');
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
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
        <CardButton
          className={buttonClassName}
          onClick={() => {
            dispatch(addToCart(product));
            setButtonText('Added to Wishlist');
            setButtonClassName('in-cart');
          }}
        >
          {buttonText}
        </CardButton>
        <Link to={`/product/${product.id}`}>
          <CardButton>More Info</CardButton>
        </Link>
      </CardBodyButtonContainer>
    </CardContainer>
  );
}

export default ProductCard;
