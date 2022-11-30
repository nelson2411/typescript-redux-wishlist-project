import style from 'styled-components'
import { Container } from 'react-bootstrap'

export const HomeContainer = style.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* box-shadow with no blur */
`
export const BoxContainer = style(Container)`
/* create a 1px black border, only bottom border  */
border: 3px solid black;
border-radius: 5px;
width: 35%;
box-shadow: 12px 12px 2px 1px black;
@media (max-width: 768px) {
  width: 80%;
}
`

export const HomeIcons = style.div`
border-bottom: 3px solid black;
padding: 10px;
`

export const HomeText = style.div`
padding: 10px;
text-align: center;
`
