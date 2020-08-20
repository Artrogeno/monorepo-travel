import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuContext } from '../../contexts/menu'
import { Container, Header, Title, Nav, Item, Icon, Label } from './styles'

const Menu = () => {
  const [{ toggle }] = useContext(MenuContext)

  return (
    <Container className={`${toggle ? 'on' : 'off'}`}>
      <Header>
        <Title>Traveler</Title>
      </Header>
      <Nav>
        <Item>
          <NavLink exact to="/">
            <Icon icon={['fas', 'tachometer-alt']} />
            <Label>Home</Label>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/timeline">
            <Icon icon={['fas', 'layer-group']} />
            <Label>Timeline</Label>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/map">
            <Icon icon={['fas', 'map-marked-alt']} />
            <Label>Map</Label>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/components">
            <Icon icon={['fab', 'uikit']} />
            <Label>Components</Label>
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/profile">
            <Icon icon={['far', 'user']} />
            <Label>Profile</Label>
          </NavLink>
        </Item>
      </Nav>
    </Container>
  )
}

export default Menu
