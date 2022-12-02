import styled from 'styled-components';
import { ListGroup, Image, Badge, Col } from 'react-bootstrap';

export const ProductInfoContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const InfoTextContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled(Image)`
  border-radius: 7px;
  box-shadow: 12px 12px 2px 1px black;
  width: 50%;
`;

export const InfoContainer = styled(ListGroup)`
  background-color: transparent;
  box-shadow: 12px 12px 2px 1px black;
`;

export const InfoGameContainer = styled(ListGroup.Item)`
  background-color: #c68c0f;
`;

export const PlatformsContainer = styled(ListGroup.Item)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: #c68c0f;
`;

export const BadgeContainer = styled(Badge)`
  margin: 5px 7px;
  padding: 8px 16px;
`;
