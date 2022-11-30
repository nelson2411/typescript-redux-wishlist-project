import styled from 'styled-components'

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  border: 3px solid black;
  border-radius: 5px;
  padding: 15px 40px;
  width: 200px;
  /* background color must be transparent */
  background-color: transparent;
  box-shadow: 7px 8px 1px -2px black;
  margin: 0 10px;
  position: relative;
  bottom: 200px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
