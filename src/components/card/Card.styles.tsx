import styled from 'styled-components';
import { Card, ListGroup } from 'react-bootstrap';

export const CardContainer = styled(Card)`
  background-color: transparent;
  border: 3px solid black;
  margin: 2rem 1rem;
  box-shadow: 12px 12px 2px 1px black;

  /* responsive style for card, mobile design */
`;

export const CardBodyContainer = styled(Card.Body)`
  border: none;
  text-align: center;

  /* minimize padding on mobile */
  @media (max-width: 860px) {
    padding: 0.1rem 0.2rem;
  }
`;

export const CardBodyButtonContainer = styled(Card.Body)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ListGroupContainer = styled(ListGroup)`
  background-color: transparent;
  border-radius: 1px;
  boder: 1px solid black;

  /* not display on mobile */
  @media (max-width: 860px) {
    display: none;
  }
`;

export const ListGroupItemContainer = styled(ListGroup.Item)`
  background-color: transparent;
`;

export const CardButton = styled.button`
  border: 3px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  width: 200px;
  /* background color must be transparent */
  background-color: ${(props) => (props.className === 'in-cart' ? 'green' : 'transparent')};
  box-shadow: 7px 8px 1px -2px black;
  margin: 10px 5px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background-color: #ff914d;
  }
  &:active {
    transform: translateY(2px);
  }

  /* responsive style for button, mobile design */

  @media (max-width: 860px) {
    width: 100%;
    font-size: 1rem;
  }
`;
