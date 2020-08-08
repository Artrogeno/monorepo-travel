import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ThemeProvider from './shared/contexts/theme'
import MenuProvider from './shared/contexts/menu'
import Header from './shared/components/Header'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MenuProvider>
          <Header />
          <Routes />
        </MenuProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
