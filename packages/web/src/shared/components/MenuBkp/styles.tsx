import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

const timeAnimate = 5

const spinTopToBottom = keyframes`
  0% {
    bottom: -50%;
    left: -50%;
    height: 20rem;
    width: 20rem;
    transform: translateY(-200%) rotate(400deg);
  }
  100% {
    bottom: -50%;
    left: -50%;
    height: 20rem;
    width: 20rem;
    transform: translateY(0) rotate(0deg);
  }
`
const spinBottomToTop = keyframes`
  0% {
    bottom: -50%;
    left: -50%;
    height: 20rem;
    width: 20rem;
    transform: translateY(0) rotate(0deg);
  }
  100% {
    bottom: -50%;
    left: -50%;
    height: 20rem;
    width: 20rem;
    transform: translateY(-200%) rotate(400deg);
  }
`

const bgTopToBottom = keyframes`
  0% {
    height: 0%;
    box-shadow: none;
  }
  20% {
    height: 0%;
    box-shadow: none;
  }
  100% {
    height: 100%;
    box-shadow: none;
  }
`
const bgBottomToTop = keyframes`
  0% {
    height: 0%;
  }
  20% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
`

export const Container = styled.section`
  position: fixed;
  top: 3rem;
  left: 1rem;
  z-index: 90;
  border-radius: 2rem;
  width: 10rem;
  height: 0vh;
  overflow: hidden;
  outline: 0;
  /* background: ${props => props.theme.backgrounds.secondary}; */
  transition: all 0.6s ease-in-out, color 0.6s ease-in-out;

  &::before,
  &::after {
    content: '';
  }

  &.on {
    height: 40vh;
    box-shadow: 0 0.4rem 1rem ${props =>
      rgba(props.theme.backgrounds.dark, 0.2)};

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 2rem;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: ${bgTopToBottom} ${timeAnimate}s ease-in-out;
      background-color: ${props => props.theme.backgrounds.secondary};
    }
    &::after {
      position: absolute;
      background-color: ${props => props.theme.backgrounds.secondary};
      border-radius: 35%;
      animation: ${spinTopToBottom} ${timeAnimate}s ease-in-out;
    }
  }
`

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  position: relative;
`

export const Item = styled.li`
  font-size: 1rem;
`
