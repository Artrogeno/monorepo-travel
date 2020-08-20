import React from 'react'

import Button from '../../shared/components/Button'
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Title,
  Subtitle,
  Icon,
} from './styles'

const Main = () => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Title>Traveler</Title>
          <Subtitle>Share your experiences.</Subtitle>
        </CardHeader>
        <CardBody>
          <Button link to="/timeline" color="success" size="md" shadow>
            Explore
            <Icon icon={['fas', 'layer-group']} />
          </Button>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Main
