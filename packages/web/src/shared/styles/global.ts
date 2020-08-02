import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-roboto: 'Roboto', sans-serif;
    --primaty: ${props => props.theme.colors.primaty};
    --secondary: ${props => props.theme.colors.secondary};
    --success: ${props => props.theme.colors.success};
    --danger: ${props => props.theme.colors.danger};
    --warning: ${props => props.theme.colors.warning};
    --info: ${props => props.theme.colors.info};
    --light: ${props => props.theme.colors.light};
    --dark: ${props => props.theme.colors.dark};
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --bg_body: ${props => props.theme.colors.bg_body};
    --fg_body: ${props => props.theme.colors.fg_body};
    --theme_100: ${props => props.theme.colors.theme_100};
    --theme_200: ${props => props.theme.colors.theme_200};
    --theme_300: ${props => props.theme.colors.theme_300};
    --theme_400: ${props => props.theme.colors.theme_400};
    --theme_500: ${props => props.theme.colors.theme_500};
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    position: fixed;
    right: 0;
    z-index: 10;
    background: ${props => props.theme.colors.dark};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.18rem grey;
    border-radius: 0.09rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.dark};
    border-radius: 0.09rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    background: ${props => props.theme.colors.dark};
  }


  body {
    font-size: 1.2rem;
    font-family: var(--font-roboto);
    transition: background .6s ease-in-out, color .6s ease-in-out;
    background: ${props => props.theme.colors.bg_body};
    color: ${props => props.theme.colors.fg_body};
    &.no-scroll {
      overflow: hidden;
    }
  }
`
