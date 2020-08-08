import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    maps: string
    colors: {
      body: string
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      light: string
      dark: string
      white: string
      black: string
    }
    backgrounds: {
      body: string
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      light: string
      dark: string
      white: string
      black: string
    }
  }
}
