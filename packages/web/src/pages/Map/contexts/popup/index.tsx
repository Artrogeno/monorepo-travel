import React, { useState } from 'react'

export const PopupContext = React.createContext<any>([])

interface PropsI {
  children: React.ReactNode
}

const Provider: React.FC<PropsI> = ({ children }) => {
  const [popup, setPopup] = useState<any>({})
  return (
    <PopupContext.Provider value={[popup, setPopup]}>
      {children}
    </PopupContext.Provider>
  )
}

export default Provider
