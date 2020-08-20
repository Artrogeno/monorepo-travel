import React, { useContext, useEffect } from 'react'

import { MenuContext } from '../../contexts/menu'
import { Container, Nav, Item } from './styles'

const Menu = () => {
  const [{ toggle }] = useContext(MenuContext)

  useEffect(() => {
    console.log(toggle)
  }, [toggle])

  return (
    <Container className={`${toggle ? 'on' : 'off'}`}>
      <Nav>
        <Item>Test</Item>
      </Nav>
    </Container>
  )
}

export default Menu

/*
#efeef7
#b6b6cd
#060607
#4a494e

#9999aa
#76758a
#5b5a65

#e52721
#f3b557
#07c258
#6068aa
*/
