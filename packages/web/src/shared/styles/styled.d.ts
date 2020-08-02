import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primaty: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      light: string
      dark: string
      white: string
      black: string
      bg_body: string
      fg_body: string
      theme_100: string
      theme_200: string
      theme_300: string
      theme_400: string
      theme_500: string
    }
  }
}
