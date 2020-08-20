import React, { useContext, useEffect, useState } from 'react'

import { UtilsContext } from '../../contexts/utils'
import { ToastI } from '../../interfaces/utils'
import { Container, Close, Icon, Card, Header, Body } from './styles'

const Toast = () => {
  const [utils, setUtils] = useContext(UtilsContext)
  const [cls, setCls] = useState<string>('close')
  const [render, setRender] = useState<boolean>(false)
  const [toast, setToast] = useState<ToastI>()
  // let timeout = utils.toast.time || 2
  // let time = timeout
  let interval: any

  const handlerToast = () => {
    const toast = { ...utils.toast, toggle: !utils.toast.toggle }
    setUtils({ ...utils, toast })
    clearInterval(interval)
  }

  const handlerMouseEnter = () => {
    // time = timeout
    // clearInterval(interval)
  }

  const handlerMouseLeave = () => {
    // time = timeout
    // startInterval()
  }

  // const startInterval = () => {
  //   interval = setInterval(() => {
  //     time--
  //     console.log({ time })
  //     if (time === 0) {
  //       handlerToast()
  //     }
  //   }, utils.toast.timeout || 1000)
  // }

  useEffect(() => {
    const { toggle, direction, type } = utils.toast
    setToast(utils.toast)
    if (toggle) {
      setRender(true)
      setCls(`open ${direction} ${type}`)
    } else {
      setCls(`close ${direction} ${type}`)
      setTimeout(() => {
        setRender(false)
      }, 600)
    }
  }, [utils.toast])

  // useEffect(() => {
  //   if (!render) {
  //     clearInterval(interval)
  //   } else {
  //     startInterval()
  //   }
  // }, [render])

  return (
    <>
      {render && (
        <Container
          className={cls}
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <Close onClick={handlerToast}>
            <Icon icon={['fas', 'times']} />
          </Close>
          {toast && (
            <Card>
              {toast.header && <Header>{toast.header}</Header>}
              {toast.body && <Body>{toast.body}</Body>}
              {toast.children}
            </Card>
          )}
        </Container>
      )}
    </>
  )
}

export default Toast
