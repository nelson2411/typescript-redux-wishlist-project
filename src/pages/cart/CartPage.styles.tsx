import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CartTableContainer = styled(Container)`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  @media (max-width: 860px) {
    min-width: fit-content;
  }
`;

export const LinkToHome = styled(Link)`
  margin-right: auto;
  margin-bottom: 1rem;
`;
