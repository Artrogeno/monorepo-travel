import React, { useRef, useContext, useEffect } from 'react'

import Image from '../../../../shared/components/Image'
import { CarouselContext } from '../../../../shared/contexts/carousel'
import { CAROUSEL_RESPONSIVE } from '../../../../shared/constants/carousel'
import {
  Container,
  CarouselSlider,
  CarouselContainer,
  CarouselCard,
  CarouselBody,
  Title,
  Subtitle,
} from './styles'

const Carousel = () => {
  const [carousel, setCarousel] = useContext(CarouselContext)

  const carouselElement = useRef(null)
  let responsive = { ...CAROUSEL_RESPONSIVE }

  responsive.superLargeDesktop.items = 5
  responsive.largedesktop.items = 4
  responsive.desktop.items = 3

  const data: any[] = [
    {
      img: `https://picsum.photos/id/1000/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/1001/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/1010/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/1002/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/10/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/1/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/100/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
    {
      img: `https://picsum.photos/id/0/200/300`,
      title: 'Test',
      subtitle: 'Subtitle',
    },
  ]

  useEffect(() => {
    const carouselRef: any = carouselElement.current
    carouselRef.previous()
  }, [carousel.prev])

  useEffect(() => {
    const carouselRef: any = carouselElement.current
    carouselRef.next()
  }, [carousel.next])

  return (
    <Container>
      <CarouselSlider
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={false}
        ref={carouselElement}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {data.map((item, index) => (
          <CarouselContainer key={index}>
            <CarouselCard>
              <Image src={item.img} alt={item.name + 1} />
              <CarouselBody>
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
              </CarouselBody>
            </CarouselCard>
          </CarouselContainer>
        ))}
      </CarouselSlider>
    </Container>
  )
}

export default Carousel
