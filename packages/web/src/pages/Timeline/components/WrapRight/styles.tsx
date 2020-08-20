import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  &:nth-of-type(1) {
    flex-grow: 1;
    @media (min-width: 1024px) {
      max-width: 46vw;
    }
  }
  &:nth-of-type(2) {
    flex-direction: column;
    flex-grow: 3;
    @media (min-width: 1024px) {
      max-width: 54vw;
    }
  }
`

export const ActionContainer = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
`

export const CarouselContainer = styled.section`
  position: relative;
  width: 80%;
  padding: 2rem;
`

export const CarouselTitle = styled.h4`
  display: block;
  position: relative;
  color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  text-transform: capitalize;
  text-align: left;
  text-shadow: 0.2rem 0.4rem 0.4rem
    ${props => rgba(props.theme.colors.black, 0.6)};

  &::after {
    content: ' ';
    position: absolute;
    top: 1rem;
    left: 6rem;
    height: 0.2rem;
    width: 1.8rem;
    background: ${props => props.theme.colors.white};
    text-shadow: 0.1rem 0.2rem 0.2rem
      ${props => rgba(props.theme.colors.black, 0.4)};
  }
`

export const CarouselHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`

export const CarouselAction = styled.div`
  display: flex;
  flex-direction: row;
`

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.colors.light};
  text-transform: capitalize;
  border-radius: 2rem;
  width: 2rem;
  height: 2rem;
  &,
  &:active {
    outline: none;
  }
  &:first-of-type {
    margin-right: 1rem;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.colors.black};
`
