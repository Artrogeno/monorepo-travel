import styled from 'styled-components'

export const Container = styled.button`
  z-index: 100;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 3rem;
  height: 1.2rem;
  left: 1rem;
  top: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &,
  &:active,
  &:focus {
    outline: none;
  }
`

export const Line = styled.span`
  width: 2rem;
  height: 0.4rem;
  border-radius: 0.3rem;
  background-color: ${props => props.theme.colors.body};
  transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);

  &:nth-of-type(1) {
    margin-bottom: 0.2rem;
    width: 1rem;
  }
  &:nth-of-type(2) {
    width: 1.8rem;
  }
  &:nth-of-type(3) {
    width: 1.4rem;
    margin-top: 0.2rem;
  }

  .active & {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      width: 1.8rem;
    }
  }
`
