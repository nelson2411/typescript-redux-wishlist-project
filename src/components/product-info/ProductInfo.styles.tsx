import styled from 'styled-components';
import { ListGroup, Image, Badge, Col } from 'react-bootstrap';

export const ProductInfoContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const InfoTextContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 860px) {
  }
`;

export const ImageContainer = styled(Image)`
  border-radius: 7px;
  box-shadow: 12px 12px 2px 1px black;
  width: 50%;

  @media (max-width: 860px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const InfoContainer = styled(ListGroup)`
  background-color: transparent;
  box-shadow: 12px 12px 2px 1px black;

  @media (max-width: 860px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const InfoGameContainer = styled(ListGroup.Item)`
  background-color: #c68c0f;
`;

export const PlatformsContainer = styled(ListGroup.Item)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: #c68c0f;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BadgeContainer = styled(Badge)`
  margin: 5px 7px;
  padding: 8px 16px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
`;
