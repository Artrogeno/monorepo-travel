import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { darken } from 'polished'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 1rem;
  padding-bottom: 0.6rem;
`

export const Subtitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 1rem;
  color: ${props => darken(0.2, props.theme.colors.light)};
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${props => darken(0.1, props.theme.colors.light)};
  &.icon-title {
    position: absolute;
    margin-top: 0.4rem;
    margin-right: 0.6rem;
    cursor: move;
  }
`

export const Container = styled.div``
