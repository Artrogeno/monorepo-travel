import React from 'react'

import { Btn, Link } from './styles'

interface Props {
  onClick?(): void
  color?: string
  size?: string
  shadow?: boolean
  link?: boolean
  to?: string
  exact?: boolean
  justify?: string
  radius?: boolean
  children?: React.ReactNode
}

const Button: React.FC<Props> = ({
  color,
  size,
  shadow,
  link,
  to = '/',
  justify = 'center',
  radius,
  exact,
  children,
  onClick,
}) => {
  const classes = (): string => {
    const clss = []
    if (color) {
      clss.push(color)
    }
    if (size) {
      clss.push(size)
    }
    if (shadow) {
      clss.push('shadow')
    }
    if (radius) {
      clss.push('radius')
    }
    clss.push(`justify-${justify}`)
    return clss.join(' ')
  }
  return (
    <>
      {link ? (
        <Link exact={exact} to={to} className={classes()}>
          {children}
        </Link>
      ) : (
        <Btn onClick={onClick} className={classes()}>
          {children}
        </Btn>
      )}
    </>
  )
}

export default Button
