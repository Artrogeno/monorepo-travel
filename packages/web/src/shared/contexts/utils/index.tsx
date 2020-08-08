import React, { useState } from 'react'

import { UtilsI } from '../../interfaces/utils'

export const UtilsContext = React.createContext<any>([])

const initialize: UtilsI = { modal: false }

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [utils, setUtils] = useState<UtilsI>(initialize)
  return (
    <UtilsContext.Provider value={[utils, setUtils]}>
      {children}
    </UtilsContext.Provider>
  )
}

export default Provider
