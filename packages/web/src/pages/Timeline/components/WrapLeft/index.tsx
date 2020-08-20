import React from 'react'

import Button from '../../../../shared/components/Button'
import {
  Container,
  WrapContainer,
  Social,
  SocialIcon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardAction,
  Title,
  Subtitle,
  Description,
  BtnSize,
  Icon,
  Box,
  IconBox,
  Country,
  Located,
  Place,
} from './styles'

const WrapLeft = () => {
  return (
    <Container>
      <WrapContainer>
        <Social>
          <SocialIcon icon={['fab', 'instagram']} />
          <SocialIcon icon={['fab', 'facebook-square']} />
          <SocialIcon icon={['fab', 'twitter']} />
        </Social>
      </WrapContainer>
      <WrapContainer>
        <Card>
          <CardHeader>
            <Title>Country Template</Title>
            <Subtitle>About</Subtitle>
          </CardHeader>
          <CardBody>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis
              bibendum ut tristique et egestas quis ipsum suspendisse. Lectus
              sit amet est placerat in egestas erat. Turpis tincidunt id aliquet
              risus feugiat. Adipiscing vitae proin sagittis nisl rhoncus.
            </Description>
            <CardAction>
              <Button link to="/timeline" color="light" size="lg">
                <BtnSize>Explore</BtnSize>
                <Icon icon={['fas', 'long-arrow-alt-right']} />
              </Button>
            </CardAction>
          </CardBody>
          <CardFooter>
            <Box>
              <IconBox icon={['fas', 'map-marker-alt']} />
            </Box>
            <Box>
              <Country>Country</Country>
              <Located>Located</Located>
              <Place>Place</Place>
            </Box>
          </CardFooter>
        </Card>
      </WrapContainer>
    </Container>
  )
}

export default WrapLeft
