import React, { useState } from 'react'

import { CarouselI } from '../../interfaces/carousel'

export const CarouselContext = React.createContext<any>([])

const initialize: CarouselI = {
  title: 'Carousel',
}

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [carousel, setCarousel] = useState<CarouselI>(initialize)
  return (
    <CarouselContext.Provider value={[carousel, setCarousel]}>
      {children}
    </CarouselContext.Provider>
  )
}

export default Provider
