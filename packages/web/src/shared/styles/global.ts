import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-roboto: 'Roboto', sans-serif;
    --primary: ${props => props.theme.colors.primary};
    --secondary: ${props => props.theme.colors.secondary};
    --success: ${props => props.theme.colors.success};
    --danger: ${props => props.theme.colors.danger};
    --warning: ${props => props.theme.colors.warning};
    --info: ${props => props.theme.colors.info};
    --light: ${props => props.theme.colors.light};
    --dark: ${props => props.theme.colors.dark};
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --body: ${props => props.theme.colors.body};
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
    background: ${props => props.theme.backgrounds.body};
    color: ${props => props.theme.colors.body};
    overflow-x: hidden;
    &.no-scroll {
      overflow: hidden;
    }
  }
`
