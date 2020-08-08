import React from 'react'

import Modal from '../../../../shared/components/Modal'
import { Header, Icon, Title, Subtitle, Container } from './styles'

interface PropsI {
  openModal: boolean
  close(): void
}

const MeetingModal: React.FC<PropsI> = ({ openModal, close }) => {
  const HeaderModal = () => {
    return (
      <Header>
        <Icon icon={['fas', 'grip-vertical']} className="icon-title" />
        <Title>Meeting with friends</Title>
        <Subtitle>Morning, 9:00 am</Subtitle>
      </Header>
    )
  }

  return (
    <>
      <Modal show={openModal} modalClose={close} header={<HeaderModal />}>
        <Container>Body</Container>
      </Modal>
    </>
  )
}

export default MeetingModal
