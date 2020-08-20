import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ThemeProvider from './shared/contexts/theme'
import UtilsProvider from './shared/contexts/utils'
import Routes from './routes'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <UtilsProvider>
          <Routes />
        </UtilsProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
