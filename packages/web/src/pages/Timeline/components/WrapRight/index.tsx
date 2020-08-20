import React, { useContext } from 'react'

import { CarouselContext } from '../../../../shared/contexts/carousel'
import Carousel from '../Carousel'
import {
  Container,
  ActionContainer,
  CarouselContainer,
  CarouselHeader,
  CarouselTitle,
  CarouselAction,
  Btn,
  Icon,
} from './styles'

const WrapRight = () => {
  const [carousel, setCarousel] = useContext(CarouselContext)

  const nextCarousel = () => {
    setCarousel({ ...carousel, next: !carousel.next })
  }

  const prevCarousel = () => {
    setCarousel({ ...carousel, prev: !carousel.prev })
  }

  return (
    <Container>
      <ActionContainer />
      <CarouselContainer>
        <CarouselHeader>
          <CarouselTitle>Photos</CarouselTitle>
          <CarouselAction>
            <Btn onClick={prevCarousel}>
              <Icon icon={['fas', 'angle-left']} />
            </Btn>
            <Btn onClick={nextCarousel}>
              <Icon icon={['fas', 'angle-right']} />
            </Btn>
          </CarouselAction>
        </CarouselHeader>
        <Carousel />
      </CarouselContainer>
    </Container>
  )
}

export default WrapRight
