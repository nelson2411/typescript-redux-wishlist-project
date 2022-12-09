import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

export const HomeContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow with no blur */
`;

export const ImageContainer = styled(Image)`
  box-shadow: 12px 12px 2px 1px black;
`;