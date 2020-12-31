import React from 'react'
import styled from 'styled-components'
import { desktopVW } from '../styles'

const SectionText = ({ data: { text } }) => {
  return (
    <StyledSection>
      <Text>{text}</Text>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  font-size: ${desktopVW(40)};
  font-weight: 300;
  transform: skewX(-15deg);
  color: white;
`

export default SectionText
