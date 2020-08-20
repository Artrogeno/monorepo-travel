import React, { useState, useEffect, useContext, useRef } from 'react'
import ReactMapGL from 'react-map-gl'
// import * as Geocoder from 'react-map-gl-geocoder'

import { ThemeContext } from '../../shared/contexts/theme'
import { EntryI } from '../../shared/interfaces/entry'
import { listEntries } from './service'
import PopupContext from './contexts/popup'
import Marker from './components/Marker'
import AddMarker from './components/AddMarker'
import { Container } from './styles'

const Map = () => {
  const [theme] = useContext(ThemeContext)
  const [entries, setEntries] = useState<EntryI[]>([])
  // const [mapStyle, setMapStyle] = useState<string>('http://localhost:3000/')
  const [entryLocation, setEntryLocation] = useState<any>(null)
  const [viewport, setViewport] = useState({
    width: Number(window.screen.availWidth),
    height: Number(window.screen.availHeight),
    latitude: 37.6,
    longitude: -95.665,
    zoom: 4,
  })
  const mapRef = useRef(null)

  const addMarker = (event: any) => {
    const [longitude, latitude] = event.lngLat
    setEntryLocation({ longitude, latitude })
    console.log(event)
  }

  const getEntries = async () => {
    const entries = await listEntries()
    setEntries(entries)
  }

  // const handleViewportChange = (viewPort: any) => {
  //   setViewport(viewPort)
  // }

  // const handleGeocoderViewportChange = (viewPort: any) => {
  //   const geocoderDefaultOverrides = { transitionDuration: 1000 }

  //   return handleViewportChange({
  //     ...viewPort,
  //     ...geocoderDefaultOverrides,
  //   })
  // }

  useEffect(() => {
    getEntries()
  }, [])

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Container>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapStyle={theme.maps}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        onDblClick={addMarker}
      >
        {/* <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          position="top-left"
        /> */}

        <PopupContext>
          {entries.map(entry => (
            <Marker
              key={entry._id}
              data={entry}
              size={`${6 * viewport.zoom}`}
              viewBox="0 0 512 512"
              color="danger"
            />
          ))}
        </PopupContext>

        <AddMarker
          data={entryLocation}
          zoom={viewport.zoom}
          onClose={() => setEntryLocation(null)}
          onUpdate={getEntries}
        />
      </ReactMapGL>
    </Container>
  )
}

export default Map
