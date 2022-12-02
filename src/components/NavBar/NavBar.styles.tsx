import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 200px;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: 3px solid black;
  border-radius: 5px;
  padding: 15px 40px;
  width: 220px;
  /* background color must be transparent */
  background-color: transparent;
  box-shadow: 7px 8px 1px -2px black;
  margin: 0 10px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background-color: #ff914d;
  }
  &:active {
    transform: translateY(2px);
  }
  @media (max-width: 900px) {
    margin: 8px 0;
  }
`;
