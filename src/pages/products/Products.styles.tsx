import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ProductsContainer = styled(Container)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ProductsGrid = styled.div`
  width: 95%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
