import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { rgba, lighten } from 'polished'

const light = 0.06
const rgbShadown = 0.8

const styles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  cursor: pointer;
  outline: 0;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 0;
  color: ${props => props.theme.colors.body};
  background-color: ${props => props.theme.backgrounds.secondary};
  box-shadow: 0 0.4rem 0.6rem
    ${props => rgba(props.theme.backgrounds.dark, 0.2)};
  transition: all 0.4s ease-in-out;

  &.radius {
    border-radius: 0.4rem;
  }

  &.justify-center {
    justify-content: center;
  }
  &.justify-flex-start {
    justify-content: flex-start;
  }
  &.justify-flex-end {
    justify-content: flex-end;
  }
  &.justify-space-between {
    justify-content: space-between;
  }
  &.justify-space-around {
    justify-content: space-around;
  }
  &.justify-space-evenly {
    justify-content: space-evenly;
  }

  &.sm {
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
  }

  &.md {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }

  &.lg {
    font-size: 1.6rem;
    padding: 1rem 1.8rem;
  }

  &:hover {
    background-color: ${props =>
      lighten(light, props.theme.backgrounds.secondary)};
    box-shadow: 0 0.2rem 0.4rem
      ${props => rgba(props.theme.backgrounds.dark, rgbShadown)};
  }

  &.danger {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.danger};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.danger)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.danger, rgbShadown)};
    }
  }

  &.success {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.success};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.success)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.success, rgbShadown)};
    }
  }

  &.info {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.info};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.info)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.info, rgbShadown)};
    }
  }

  &.warning {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.warning};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.warning)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.warning, rgbShadown)};
    }
  }

  &.light {
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.backgrounds.light};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.light)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.light, rgbShadown)};
    }
  }

  &.dark {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.backgrounds.dark};
    &:hover {
      background-color: ${props =>
        lighten(light, props.theme.backgrounds.dark)};
    }
    &.shadow {
      box-shadow: 0 0.4rem 0.6rem
        ${props => rgba(props.theme.backgrounds.dark, rgbShadown)};
    }
  }
`

export const Btn = styled.button`
  ${styles}
`

export const Link = styled(NavLink)`
  ${styles}
  text-decoration: none;
`
