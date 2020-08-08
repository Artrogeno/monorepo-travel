import React from 'react'

import { useStore } from '../../hooks'
import { MenuI } from '../../interfaces/menu'
import { MENU } from '../../constants/storage'

export const MenuContext = React.createContext<any>([])

const initialize: MenuI = { toggle: false }

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [menu, setMenu] = useStore<MenuI>(MENU, initialize)
  return (
    <MenuContext.Provider value={[menu, setMenu]}>
      {children}
    </MenuContext.Provider>
  )
}

export default Provider
