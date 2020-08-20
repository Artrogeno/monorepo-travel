import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rgba } from 'polished'

const timeAnimate = 0.6
const radius = 1

const openToast = keyframes`
  0% {
    border-radius: 50%;
    transform: translateY(-200%) scale(0.4);
  }
  100% {
  border-radius: ${radius}rem;
    transform: translateY(0%) scale(1);
  }
`

const closeToast = keyframes`
  0% {
    border-radius: ${radius}rem;
    transform: translateY(0%) scale(1);
  }
  100% {
    border-radius: 50%;
    transform: translateY(-200%) scale(0.4);
  }
`

export const Container = styled.section`
  position: fixed;
  z-index: 100;
  min-height: 8vh;
  width: 15rem;
  border-radius: ${radius}rem;
  outline: 0;
  background-color: ${props => props.theme.backgrounds.secondary};
  box-shadow: 0 0.4rem 1rem ${props => rgba(props.theme.backgrounds.dark, 0.2)};

  &.open {
    transform: translateY(0%);
    animation-name: ${openToast};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }
  &.close {
    transform: translateY(-200%);
    animation-name: ${closeToast};
    animation-duration: ${timeAnimate}s;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
  }

  &.top {
    &-left,
    &-right,
    &-center {
      top: 3.6rem;
    }
  }
  &.middle {
    &-left,
    &-right,
    &-center {
      top: calc(50vh - (8vh / 2));
    }
  }
  &.bottom {
    &-left,
    &-right,
    &-center {
      bottom: 3.6rem;
    }
  }

  &.top,
  &.middle,
  &.bottom {
    &-right {
      right: 1.6rem;
    }
    &-left {
      left: 1.6rem;
    }
    &-center {
      left: calc(50vw - (15rem / 2));
    }
  }

  &.danger {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.danger};
  }

  &.success {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.success};
  }

  &.info {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.info};
  }

  &.warning {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.warning};
  }

  &.light {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.backgrounds.light};
  }

  &.dark {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.dark};
  }
`

export const Close = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border: none;
  box-shadow: none;
  background: transparent;
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.body};
  .danger &,
  .success &,
  .info &,
  .warning & {
    color: ${props => props.theme.colors.white};
  }
`

export const Card = styled.div`
  padding: 1.2rem;
`

export const Header = styled.h3`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.6;
`

export const Body = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
`
