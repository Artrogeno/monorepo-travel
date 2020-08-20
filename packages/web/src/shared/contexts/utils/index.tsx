import React, { useState } from 'react'

import MenuProvider from '../../contexts/menu'
import { UtilsI } from '../../interfaces/utils'
import Toast from '../../components/Toast'

export const UtilsContext = React.createContext<any>([])

const initialize: UtilsI = {
  toast: {
    toggle: false,
    direction: 'top-right',
    timeout: 3000,
  },
}

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [utils, setUtils] = useState<UtilsI>(initialize)
  return (
    <UtilsContext.Provider value={[utils, setUtils]}>
      <MenuProvider>{children}</MenuProvider>
      <Toast />
    </UtilsContext.Provider>
  )
}

export default Provider
