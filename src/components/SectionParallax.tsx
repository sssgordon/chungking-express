import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionParallax = ({ data: { images } }) => {
  const sectionRef = useRef()
  const parallaxOneRef = useRef()
  const parallaxTwoRef = useRef()

  useEffect(() => {
    const section = sectionRef.current
    const parallaxOne = parallaxOneRef.current
    const parallaxTwo = parallaxTwoRef.current

    gsap.to(parallaxOne, {
      yPercent: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
        // markers: true,
      },
    })

    gsap.to(parallaxTwo, {
      yPercent: -57,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
        // markers: true,
      },
    })
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <ParallaxOne ref={parallaxOneRef}>
        <StyledImage fluid={images[0].fluid} alt={images[0].title} />
      </ParallaxOne>
      <ParallaxTwo ref={parallaxTwoRef}>
        <StyledImage fluid={images[1].fluid} alt={images[1].title} />
      </ParallaxTwo>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${desktopVW(1752)};
  position: relative;
`

const ParallaxOne = styled.div`
  position: absolute;
  top: ${desktopVW(200)};
  left: ${desktopVW(216)};

  width: ${desktopVW(484)};
  height: ${desktopVW(860)};
`

const ParallaxTwo = styled.div`
  position: absolute;
  top: ${desktopVW(693)};
  right: ${desktopVW(216)};

  width: ${desktopVW(484)};
  height: ${desktopVW(860)};
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default SectionParallax
