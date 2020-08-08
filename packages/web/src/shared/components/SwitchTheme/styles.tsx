import styled from 'styled-components'

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  width: 4rem;
  height: 1.5rem;
  top: 1rem;
  right: 1rem;

  .light,
  .dark {
    font-size: 0.9rem;
  }

  .light {
    margin-left: 0.6rem;
    margin-top: 0.2rem;
    color: ${props => props.theme.colors.white};
  }
  .dark {
    margin-left: 0.6rem;
    margin-top: 0.2rem;
    color: ${props => props.theme.colors.warning};
  }
`
