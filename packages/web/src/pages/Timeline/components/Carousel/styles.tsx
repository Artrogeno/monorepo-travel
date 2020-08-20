import styled, { keyframes, css } from 'styled-components'
import Carousel from 'react-multi-carousel'
import { rgba } from 'polished'

const animateCarouselItemOn = keyframes`
  from {
    transform: translateY(-4%);
    z-index: 0;
  }
  to {
    z-index: 2;
    transform: translateY(0);
  }
`

const animateCarouselItemHover = keyframes`
  from {
    z-index: 2;
    transform: translateY(0);
  }
  to {
    transform: translateY(-4%);
    z-index: 0;
  }
`

const ul_carousel = css`
  padding-top: 1.5rem;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  position: relative;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  will-change: transform, transition;
`

const btn_carousel = css`
  top: 1.5rem;
  background-color: transparent;
  min-width: 43px;
  height: 16rem;
  border-radius: 0;

  &:hover {
    background-color: ${props => rgba(props.theme.backgrounds.dark, 0.2)};
  }

  &.react-multiple-carousel__arrow {
    &--left {
      left: inherit !important;
      right: -0.5rem !important;
    }
    &--right {
      right: inherit !important;
      left: -0.5rem !important;
    }
  }
`

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;

  .carousel-item {
    position: relative;
    transform: translateY(-4%);
    z-index: 0;
    animation: ${animateCarouselItemHover} 0.3s;

    &:hover {
      z-index: 2;
      transform-style: inherit;
      transform: translateY(0);
      animation: ${animateCarouselItemOn} 0.3s;
    }
  }
`

export const CarouselContainer = styled.div``

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  margin: 0.4rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0.2rem 0.4rem 0.4rem
    ${props => rgba(props.theme.colors.black, 0.6)};

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    background: ${props => rgba(props.theme.colors.black, 0.2)};
    z-index: 10;
    width: calc(100% - 0.8rem);
    height: calc(100% - 0.8rem);
    border-radius: 1rem;
    overflow: hidden;
    z-index: 10;
    transition: background 0.3s ease-in-out;
  }

  div:first-of-type {
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    &:before {
      background: transparent;
    }
    div:first-of-type {
      opacity: 0;
    }
  }

  img {
    z-index: 1;
    width: 100%;
    height: auto;
  }
`

export const CarouselBody = styled.div`
  position: absolute;
  z-index: 11;
  top: 0;
  left: 0;
  margin-top: 90%;
  padding: 1rem;
  color: white;
`

export const Title = styled.h2`
  margin-bottom: 0.6rem;
`

export const Subtitle = styled.h5`
  color: ${props => rgba(props.theme.colors.white, 0.8)};
  font-size: 0.8rem;
`

export const CarouselSlider = styled(Carousel)`
  &.carousel-container {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    ul.react-multi-carousel-track {
      ${ul_carousel}
    }

    & > button {
      ${btn_carousel}
    }
  }
`
