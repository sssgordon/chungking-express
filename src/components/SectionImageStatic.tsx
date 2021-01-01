import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { desktopVW } from '../styles'

const SectionImage = ({ data: { image } }) => {
  return (
    <StyledSection>
      <ImageWrapper>
        <StyledImage fluid={image.fluid} alt={image.title} />
      </ImageWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;

  padding: ${desktopVW(100)} ${desktopVW(200)};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default SectionImage
