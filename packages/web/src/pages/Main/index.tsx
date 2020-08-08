import React, { useState } from 'react'

import MeetingModal from './components/MeetingModal'
import { Container, Title } from './styles'

const Main = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true)
  return (
    <Container>
      <Title>
        Artrogeno React/Typescript
        <br />
        <button onClick={() => setCloseModal(prevState => !prevState)}>
          Modal
        </button>
      </Title>

      <MeetingModal
        openModal={closeModal}
        close={() => setCloseModal(prevState => !prevState)}
      />
    </Container>
  )
}

export default Main
