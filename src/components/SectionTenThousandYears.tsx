import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, zIndex } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionTenThousandYears = ({ data: { image } }) => {
  const loveRef = useRef()
  const youRef = useRef()
  const oneRef = useRef()
  const thousandRef = useRef()
  const yearRef = useRef()
  const imageRef = useRef()
  const sectionRef = useRef()

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current.imageRef.current
    const love = loveRef.current
    const you = youRef.current
    const one = oneRef.current
    const thousand = thousandRef.current
    const year = yearRef.current

    gsap.from(image, {
      scale: 1.5,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })

    gsap.from(love, {
      xPercent: -20,
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })

    gsap.from(you, {
      xPercent: -35,
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })

    gsap.from(one, {
      xPercent: 28,
      yPercent: 16,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })

    gsap.from(thousand, {
      xPercent: -6.5,
      yPercent: -17,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })

    gsap.from(year, {
      xPercent: -30,
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        end: 'top top',
        markers: true,
        scrub: true,
      },
    })
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <Love ref={loveRef}>愛</Love>
      <You ref={youRef}>你</You>
      <One ref={oneRef}>一</One>
      <Thousand ref={thousandRef}>萬</Thousand>
      <Year ref={yearRef}>年</Year>
      <ImageWrapper>
        <StyledImage fluid={image.fluid} alt={image.title} ref={imageRef} />
      </ImageWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${desktopVW(1024)};
  position: relative;

  p {
    font-size: ${desktopVW(280)};
    font-weight: bold;
  }
`

const Love = styled.p`
  position: absolute;
  top: ${desktopVW(305)};
  left: ${desktopVW(62)};
  z-index: ${zIndex.high};
`

const You = styled.p`
  position: absolute;
  top: ${desktopVW(346)};
  left: ${desktopVW(358)};
  z-index: ${zIndex.high};
`

const One = styled.p`
  position: absolute;
  top: ${desktopVW(322)};
  left: ${desktopVW(654)};
  z-index: ${zIndex.high};
`

const Thousand = styled.p`
  position: absolute;
  top: ${desktopVW(274)};
  left: ${desktopVW(950)};
  z-index: ${zIndex.low};
`

const Year = styled.p`
  position: absolute;
  top: ${desktopVW(305)};
  left: ${desktopVW(1246)};
  z-index: ${zIndex.low};
`

const ImageWrapper = styled.div`
  position: absolute;
  top: ${desktopVW(470)};
  left: ${desktopVW(720)};

  width: ${desktopVW(400)};
  height: ${desktopVW(238)};
  z-index: ${zIndex.medium};
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default SectionTenThousandYears
