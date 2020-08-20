import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

const timeAnimate = 1

const openModal = keyframes`
  0% {
    border-radius: 50%;
    transform: translateY(-200%) scale(0.4);
  }
  100% {
    border-radius: 2rem;
    transform: translateY(25%) scale(1);
  }
`

const closeModal = keyframes`
  0% {
    border-radius: 2rem;
    transform: translateY(25%) scale(1);
  }
  100% {
    border-radius: 50%;
    transform: translateY(-200%) scale(0.4);
  }
`

export const Container = styled.section`
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  background: red;

  &.open {
    z-index: 100;
  }
`

export const Overlay = styled.div`
  position: fixed;
  height: 0;
  width: 0;
  transition: background 0.3s ease-in-out;

  .open & {
    height: 100vh;
    width: 100vw;
    background: ${props => rgba(props.theme.backgrounds.dark, 0.2)};
  }
`

export const Card = styled.section`
  position: fixed;
  z-index: 1;
  min-height: 10vh;
  max-height: 40rem;
  width: 40rem;
  left: calc(50% - 20rem);
  padding: 2rem;
  border-radius: 2rem;
  outline: 0;
  background-color: ${props => props.theme.backgrounds.secondary};
  box-shadow: 0 0.4rem 1rem ${props => rgba(props.theme.backgrounds.dark, 0.2)};

  .open & {
    transform: translateY(25%);
    animation-name: ${openModal};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }
  .close & {
    transform: translateY(-200%);
    animation-name: ${closeModal};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }
`

export const Header = styled.div``

export const Body = styled.div`
  padding-top: 1.6rem;
  padding-bottom: 1rem;
  max-height: 30rem;
  overflow-y: auto;
`

export const Footer = styled.div``

export const Close = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: none;
  box-shadow: none;
  background: transparent;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.body};
`
