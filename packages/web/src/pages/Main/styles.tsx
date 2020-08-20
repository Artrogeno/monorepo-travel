import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

import bg3 from '../../assets/images/bg3.jpg'
import bg4 from '../../assets/images/bg4.jpg'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  background: url(${props => (props.theme.title === 'dark' ? bg4 : bg3)});
  background-repeat: no-repeat;
  background-size: cover;
  transition: background 0.3s ease-in-out;
`

export const Card = styled.div`
  padding: 1rem;

  @media (min-width: 1024px) {
    min-height: 8rem;
    margin-left: 18rem;
    margin-top: 4rem;
  }
`

export const CardHeader = styled.div`
  @media (min-width: 1024px) {
    width: 16rem;
  }
`

export const CardBody = styled.div`
  padding-top: 1.6rem;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 6rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  text-shadow: 0.2rem 0.4rem 0.4rem
    ${props => rgba(props.theme.colors.black, 0.6)};
`

export const Subtitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 2.8rem;
  font-weight: 600;
  text-align: left;
  text-shadow: 0.2rem 0.4rem 0.4rem
    ${props => rgba(props.theme.colors.black, 0.6)};
`

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 0.8rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.white};
`
