import React from 'react'
import Switch from 'react-switch'
import { shade, lighten } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../../hooks'
import { Container } from './styles'

const SwitchTheme = () => {
  const [type, setType, theme] = useTheme()

  return (
    <Container>
      <Switch
        checked={type === 'light'}
        onChange={() => setType(type === 'dark' ? 'light' : 'dark')}
        uncheckedIcon={
          <FontAwesomeIcon icon={['fas', 'certificate']} className="dark" />
        }
        checkedIcon={
          <FontAwesomeIcon icon={['fas', 'moon']} className="light" />
        }
        height={25}
        width={60}
        handleDiameter={30}
        className="react-switch"
        id="icon-switch"
        offColor={shade(0.4, theme.backgrounds.light)}
        offHandleColor={shade(0.6, theme.backgrounds.light)}
        onColor={lighten(0.2, theme.backgrounds.dark)}
        onHandleColor={lighten(0.4, theme.backgrounds.dark)}
      />
    </Container>
  )
}

export default SwitchTheme
