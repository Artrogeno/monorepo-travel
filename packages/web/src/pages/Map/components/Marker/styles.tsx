import styled from 'styled-components'

export const ToggleAction = styled.button`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
  &,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`

export const Svg = styled.svg`
  fill: ${props => props.theme.colors.light};
  transform: translate(-50%, -100%);
  &.danger {
    fill: ${props => props.theme.colors.danger};
  }
`
