import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-grow: 1;
  @media (min-width: 1024px) {
    max-width: 46vw;
  }
`

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  &:nth-of-type(1) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    min-height: 80vh;
  }
  &:nth-of-type(2) {
    flex: 1;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  &:before,
  &:after {
    content: ' ';
    width: 0.2rem;
    border-radius: 2rem;
    height: 100%;
    max-height: 8rem;
    background: ${props => props.theme.colors.white};
    position: relative;
  }
`
export const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.white};
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:first-of-type {
    margin-top: 1.6rem;
  }
  &:last-of-type {
    margin-bottom: 1.6rem;
  }
`

export const Card = styled.section`
  padding: 1rem;

  @media (min-width: 1024px) {
    min-height: 8rem;
    margin-top: 8rem;
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

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8rem;
  max-width: 30rem;
`

export const CardAction = styled.div`
  margin-top: 2rem;
  width: 40%;
  max-width: 10rem;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 5rem;
  text-transform: capitalize;
  text-align: left;
  text-shadow: 0.2rem 0.4rem 0.4rem
    ${props => rgba(props.theme.colors.black, 0.6)};
`

export const Subtitle = styled.h3`
  display: block;
  position: relative;
  margin-top: 2rem;
  color: ${props => props.theme.colors.white};
  font-size: 2.6rem;
  font-weight: 400;
  text-align: left;
  text-shadow: 0.1rem 0.2rem 0.2rem
    ${props => rgba(props.theme.colors.black, 0.4)};

  &::after {
    content: ' ';
    position: absolute;
    top: 3.6rem;
    left: 0;
    height: 0.3rem;
    width: 1.8rem;
    background: ${props => props.theme.colors.white};
    text-shadow: 0.1rem 0.2rem 0.2rem
      ${props => rgba(props.theme.colors.black, 0.4)};
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: left;
  text-shadow: 0.1rem 0.1rem 0.1rem
    ${props => rgba(props.theme.colors.black, 0.4)};
`

export const BtnSize = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
`

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 0.8rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.black};
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
  border: 0.1rem solid ${props => props.theme.colors.white};
  background-color: ${props => rgba(props.theme.colors.black, 0.4)};
  &:first-of-type {
    justify-content: center;
    flex: 1;
  }
  &:last-of-type {
    flex: 6;
    justify-content: space-around;
    span {
      text-align: center;
      padding: 0.4rem;
    }
  }
`

export const IconBox = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`

export const Country = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
`

export const Located = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.white};
`

export const Place = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.white};
`
