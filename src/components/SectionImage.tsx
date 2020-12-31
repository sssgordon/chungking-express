import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, desktopVH } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionImage = ({ data: { images } }) => {
  const sectionRef = useRef()
  const imageWrapperRef = useRef()
  const imageCount = images.length

  useEffect(() => {
    const section = sectionRef.current
    const imageWrapper = imageWrapperRef.current
    const images = imageWrapper.querySelectorAll('.gatsby-image-wrapper')

    gsap.to(imageWrapper, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
      },
    })

    gsap.to(images, {
      opacity: 1,
      stagger: 0.25,
      duration: 0.2,
      scrollTrigger: {
        trigger: section,
        start: `top top`,
        end: 'bottom bottom',
        scrub: true,
        // markers: true,
      },
    })
  }, [])

  return (
    <StyledSection imageCount={imageCount} ref={sectionRef}>
      <ImageWrapper ref={imageWrapperRef}>
        {images.map((image, i) => (
          <StyledImage fluid={image.fluid} alt={image.title} key={i} />
        ))}
      </ImageWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${({ imageCount }) => (imageCount / 3) * 100}vw;

  padding: ${desktopVH(200)} ${desktopVW(200)};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: ${desktopVH(624)};
  top: ${desktopVH(200)};
  position: sticky;

  /* anim init */
  opacity: 0;
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: auto;
  object-fit: cover;

  /* anim init */
  opacity: 0;

  &:first-of-type {
    opacity: 1;
  }
`

export default SectionImage
