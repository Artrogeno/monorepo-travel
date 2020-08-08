import React from 'react'
import { Popup } from 'react-map-gl'

// import { EntryI } from '../../../../shared/interfaces/entry'
import EntryForm from '../EntryForm'
import { Container } from './styles'

interface Props {
  latitude: number
  longitude: number
  closePopup(): void
  onUpdate(): void
}

const AddPopup: React.FC<Props> = ({
  latitude,
  longitude,
  closePopup,
  onUpdate,
}) => {
  const onClose = () => {
    closePopup()
    onUpdate()
  }
  return (
    <Container>
      <Popup
        latitude={latitude}
        longitude={longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={closePopup}
        dynamicPosition={true}
        anchor="top"
      >
        <div>
          <EntryForm
            onClose={onClose}
            latitude={latitude}
            longitude={longitude}
          />
        </div>
      </Popup>
    </Container>
  )
}

export default AddPopup
