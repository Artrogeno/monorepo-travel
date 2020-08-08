import React, { useEffect, useState, useContext } from 'react'
import { Marker as MarkerGl } from 'react-map-gl'

import { EntryI } from '../../../../shared/interfaces/entry'
import { PopupContext } from '../../contexts/popup'
import Popup from '../Popup'
import { Svg, ToggleAction } from './styles'

interface Props {
  data: EntryI
  viewBox: string
  size: string
  color?: string
  className?: string
}

const Marker: React.FC<Props> = ({ data, viewBox, size, color, className }) => {
  const [popup, setPopup] = useContext<any>(PopupContext)
  const [style, setStyle] = useState<string>(className || '')

  useEffect(() => {
    const styleClass = [className]
    if (color) {
      styleClass.push(color)
    }
    setStyle(styleClass.join(' '))
  }, [color, className])
  return (
    <>
      <MarkerGl latitude={data.latitude} longitude={data.longitude}>
        <ToggleAction onClick={() => setPopup(data)}>
          <Svg
            className={style}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox={viewBox}
            style={{
              height: `${size}px`,
              width: `${size}px`,
            }}
          >
            <path d="m210 180c-16.542969 0-30 13.457031-30 30s13.457031 30 30 30 30-13.457031 30-30-13.457031-30-30-30zm0 0" />
            <path d="m210 0c-115.792969 0-210 94.207031-210 210 0 93.359375 61.519531 175.210938 150.441406 201.425781l46.140625 92.28125c2.542969 5.082031 7.734375 8.292969 13.417969 8.292969 5.679688 0 10.875-3.210938 13.414062-8.292969l46.140626-92.277343c88.925781-26.214844 150.445312-108.066407 150.445312-201.429688 0-115.792969-94.207031-210-210-210zm0 270c-33.085938 0-60-26.914062-60-60s26.914062-60 60-60 60 26.914062 60 60-26.914062 60-60 60zm0 0" />
          </Svg>
        </ToggleAction>
      </MarkerGl>
      {popup._id === data._id && <Popup />}
    </>
  )
}

export default Marker
