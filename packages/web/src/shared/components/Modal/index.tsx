import React, { useState, useEffect } from 'react'

import {
  Container,
  Overlay,
  Card,
  Header,
  Body,
  Footer,
  Close,
  Icon,
} from './styles'

interface PropsI {
  show: boolean
  title?: string
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  modalClose(): void
}

const Modal: React.FC<PropsI> = ({
  show,
  title,
  children,
  header,
  footer,
  modalClose,
}) => {
  const [cls, setCls] = useState<string>('close')
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    if (show) {
      setRender(true)
      setCls('open')
    } else {
      setCls('close')
      setTimeout(() => {
        setRender(false)
      }, 600)
    }
  }, [show])

  return (
    <>
      {render && (
        <Container className={cls}>
          <Overlay onClick={modalClose} />
          <Card>
            <Header>
              {title}
              {header}
              <Close onClick={modalClose}>
                <Icon icon={['fas', 'times']} />
              </Close>
            </Header>
            <Body>{children}</Body>
            <Footer>{footer}</Footer>
          </Card>
        </Container>
      )}
    </>
  )
}

export default Modal
