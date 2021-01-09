import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { desktopVW } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionImage = ({ data: { image } }) => {
  const imageRef = useRef()
  const sectionRef = useRef()

  useEffect(() => {
    const image = imageRef.current.imageRef.current
    const section = sectionRef.current

    gsap.to(image, {
      scale: 1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: 0.5,
      },
    })
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <ImageWrapper>
        <StyledImage fluid={image.fluid} alt={image.title} ref={imageRef} />
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
