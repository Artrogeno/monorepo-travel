import React from 'react'
import ImgNotFound from '../../../assets/images/tenor.png'

interface Props {
  src: string
  alt?: string
  className?: string
}

const Image: React.FC<Props> = ({ src, alt = '', className }) => {
  const errorHandler = ({ target }: any) => {
    target.onerror = null
    target.src = ImgNotFound
  }

  return (
    <img src={src} alt={alt} className={className} onError={errorHandler} />
  )
}

export default Image
