import React, { useContext } from 'react'

import { MenuContext } from '../../contexts/menu'
import { Container, Line } from './styles'

const Hamburger = () => {
  const [menu, setMenu] = useContext(MenuContext)

  return (
    <Container
      className={`${menu.toggle ? 'active' : ''}`}
      onClick={() => setMenu({ ...menu, toggle: !menu.toggle })}
    >
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default Hamburger
