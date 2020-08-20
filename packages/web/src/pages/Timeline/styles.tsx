import styled from 'styled-components'

import bg4 from '../../assets/images/bg4.jpg'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  background: url(${bg4});
  background-repeat: no-repeat;
  background-size: cover;
`
