import React, { useState, useContext } from 'react'

import { UtilsContext } from '../../shared/contexts/utils'
import MeetingModal from './components/MeetingModal'
import Button from '../../shared/components/Button'
import { Container, Title, Card, CardHeader, CardBody } from './styles'

const Components = () => {
  const [utils, setUtils] = useContext(UtilsContext)
  const [closeModal, setCloseModal] = useState<boolean>(false)

  const handlerToast = ({ toggle, type, body }: any) => {
    const toast = { ...utils.toast, toggle, type, body }
    toast.header = 'Header'
    // toast.children = <h1>Children</h1>
    setUtils({ ...utils, toast })
  }

  return (
    <Container>
      <Title>Components</Title>
      <br />
      <br />
      <Card>
        <CardHeader>
          <Title>Modals</Title>
        </CardHeader>
        <CardBody>
          <Button onClick={() => setCloseModal(prevState => !prevState)}>
            Modal
          </Button>
          <MeetingModal
            openModal={closeModal}
            close={() => setCloseModal(prevState => !prevState)}
          />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Title>Toast</Title>
        </CardHeader>
        <CardBody>
          <Button
            onClick={() =>
              handlerToast({
                toggle: true,
                body: 'Body',
              })
            }
          >
            Toast Default
          </Button>
          <Button
            color="danger"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'danger',
                body: 'Danger',
              })
            }
          >
            Toast Danger
          </Button>
          <Button
            color="success"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'success',
                body: 'Success',
              })
            }
          >
            Toast Success
          </Button>
          <Button
            color="info"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'info',
                body: 'Info',
              })
            }
          >
            Toast Info
          </Button>
          <Button
            color="warning"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'warning',
                body: 'Warning',
              })
            }
          >
            Toast Warning
          </Button>
          <Button
            color="light"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'light',
                body: 'Light',
              })
            }
          >
            Toast Light
          </Button>
          <Button
            color="dark"
            onClick={() =>
              handlerToast({
                toggle: true,
                type: 'dark',
                body: 'Dark',
              })
            }
          >
            Toast Dark
          </Button>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Title>Button</Title>
        </CardHeader>
        <CardBody>
          <Button>Default</Button>
          <Button color="danger">Danger</Button>
          <Button color="success">Success</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button color="light">Light</Button>
          <Button color="dark">Dark</Button>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Title>Button Size</Title>
        </CardHeader>
        <CardBody>
          <Button color="info" size="sm">
            Small
          </Button>
          <Button color="info" size="md">
            Middle
          </Button>
          <Button color="info" size="lg">
            Large
          </Button>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Components
