import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

const timeAnimate = 1

const on = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200%) SkewY(-25deg) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: SkewY(0deg) scale(1);
  }
  100% {
    transform: translateX(0%) SkewY(0deg);
  }
`

const off = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%) SkewY(0deg) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-200%) SkewY(-25deg) scale(0.8);
  }
`

export const Container = styled.section`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 90;
  border-radius: 2rem;
  width: 10rem;
  padding-bottom: 2rem;
  min-height: 45vh;
  max-height: calc(100vh - 8rem);
  overflow: hidden;
  outline: 0;
  background: ${props => props.theme.backgrounds.secondary};
  box-shadow: 0 0.4rem 1rem ${props => rgba(props.theme.backgrounds.dark, 0.2)};

  &.on {
    opacity: 1;
    transform: translateX(0);
    animation-name: ${on};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }
  &.off {
    opacity: 0;
    transform: translateX(-200%);
    animation-name: ${off};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 3.5rem 1rem 0 1rem;
`

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.body};
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  position: relative;
  padding: 2rem 0.8rem 1rem 1rem;
`

export const Item = styled.li`
  padding: 0.8rem 0.5rem;

  a {
    text-decoration: none;

    &::before {
      opacity: 0;
      content: '';
      position: absolute;
      left: 0;
      height: 2rem;
      width: 0.2rem;
      opacity: 0;
      border-radius: 0.4rem;
      background-color: ${props => props.theme.colors.body};
      transform: scale(0.4);
      transition: all 0.6s ease-in-out;
    }
    &.active {
      &::before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${props => props.theme.colors.body};
`

export const Label = styled.span`
  font-weight: 400;
  font-size: 0.9rem;
  margin-left: 0.8rem;
  color: ${props => props.theme.colors.body};
`
