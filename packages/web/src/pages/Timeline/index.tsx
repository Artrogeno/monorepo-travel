import React from 'react'

import Provider from '../../shared/contexts/carousel'
import WrapLeft from './components/WrapLeft'
import WrapRight from './components/WrapRight'
import { Container } from './styles'

const Timeline = () => {
  return (
    <Provider>
      <Container>
        <WrapLeft />
        <WrapRight />
      </Container>
    </Provider>
  )
}

export default Timeline
