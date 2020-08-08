import React from 'react'
import { Marker } from 'react-map-gl'

import AddPopup from '../AddPopup'
import { ToggleAction, Svg } from './styles'

interface Props {
  zoom: number
  data?: {
    latitude: number
    longitude: number
  }
  onUpdate(): void
  onClose(): void
}

const AddMarker: React.FC<Props> = ({ zoom, data, onClose, onUpdate }) => {
  return (
    <>
      {data && (
        <>
          <Marker latitude={data.latitude} longitude={data.longitude}>
            <ToggleAction onClick={onClose}>
              <Svg
                className="info"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{
                  height: `${6 * zoom}px`,
                  width: `${6 * zoom}px`,
                }}
              >
                <path d="m210 180c-16.542969 0-30 13.457031-30 30s13.457031 30 30 30 30-13.457031 30-30-13.457031-30-30-30zm0 0" />
                <path d="m210 0c-115.792969 0-210 94.207031-210 210 0 93.359375 61.519531 175.210938 150.441406 201.425781l46.140625 92.28125c2.542969 5.082031 7.734375 8.292969 13.417969 8.292969 5.679688 0 10.875-3.210938 13.414062-8.292969l46.140626-92.277343c88.925781-26.214844 150.445312-108.066407 150.445312-201.429688 0-115.792969-94.207031-210-210-210zm0 270c-33.085938 0-60-26.914062-60-60s26.914062-60 60-60 60 26.914062 60 60-26.914062 60-60 60zm0 0" />
              </Svg>
            </ToggleAction>
          </Marker>
          <AddPopup
            latitude={data.latitude}
            longitude={data.longitude}
            closePopup={onClose}
            onUpdate={onUpdate}
          />
        </>
      )}
    </>
  )
}

export default AddMarker
