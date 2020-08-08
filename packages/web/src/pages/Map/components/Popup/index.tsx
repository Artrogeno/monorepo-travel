import React, { useContext } from 'react'
import { Popup as PopupGl } from 'react-map-gl'

import { PopupContext } from '../../contexts/popup'
import { Container } from './styles'

const Popup: React.FC = () => {
  const [popup, setPopup] = useContext<any>(PopupContext)

  const handlerClose = () => {
    setPopup({})
  }

  return (
    <Container>
      <PopupGl
        latitude={popup.latitude}
        longitude={popup.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={handlerClose}
        dynamicPosition={true}
        anchor="top"
      >
        <div>{popup.title}</div>
      </PopupGl>
    </Container>
  )
}

export default Popup
