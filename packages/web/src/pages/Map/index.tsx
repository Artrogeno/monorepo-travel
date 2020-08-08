import React, { useState, useEffect, useContext } from 'react'
import ReactMapGL from 'react-map-gl'

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

  const addMarker = (event: any) => {
    const [longitude, latitude] = event.lngLat
    setEntryLocation({ longitude, latitude })
    console.log(event)
  }

  const getEntries = async () => {
    const entries = await listEntries()
    setEntries(entries)
  }

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
        mapStyle={theme.maps}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        onDblClick={addMarker}
      >
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
