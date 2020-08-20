import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Title = styled.h1`
  text-align: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 60%;
  border-radius: 0.6rem;
  color: ${props => props.theme.colors.body};
  background-color: ${props => rgba(props.theme.backgrounds.secondary, 0.6)};
  box-shadow: 0 0.4rem 0.6rem
    ${props => rgba(props.theme.backgrounds.dark, 0.2)};
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
