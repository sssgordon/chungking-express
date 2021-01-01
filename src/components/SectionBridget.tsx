import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, desktopVH, zIndex } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionBridget = ({ data: { images } }) => {
  const sectionRef = useRef()
  const imageOneRef = useRef()
  const imageTwoRef = useRef()
  const imageThreeRef = useRef()
  const imageFourRef = useRef()

  useEffect(() => {
    const section = sectionRef.current
    const imageOne = imageOneRef.current
    const imageTwo = imageTwoRef.current
    const imageThree = imageThreeRef.current
    const imageFour = imageFourRef.current

    gsap.to(imageOne, {
      yPercent: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageTwo, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageThree, {
      yPercent: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageFour, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <ImageOne ref={imageOneRef}>
        <StyledImage fluid={images[0].fluid} alt={images[0].title} />
      </ImageOne>
      <ImageTwo ref={imageTwoRef}>
        <StyledImage fluid={images[1].fluid} alt={images[1].title} />
      </ImageTwo>
      <ImageThree ref={imageThreeRef}>
        <StyledImage fluid={images[2].fluid} alt={images[2].title} />
      </ImageThree>
      <ImageFour ref={imageFourRef}>
        <StyledImage fluid={images[3].fluid} alt={images[3].title} />
      </ImageFour>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${desktopVH(1663)};
  padding: ${desktopVH(200)} 0;

  position: relative;
`

const ImageOne = styled.div`
  width: ${desktopVW(580)};
  height: ${desktopVH(322)};

  position: absolute;
  top: ${desktopVH(200)};
  right: ${desktopVW(228)};
  z-index: ${zIndex.high};
`

const ImageTwo = styled.div`
  width: ${desktopVW(720)};
  height: ${desktopVH(795)};

  position: absolute;
  top: ${desktopVH(250)};
  left: 0;
  z-index: ${zIndex.medium};
`

const ImageThree = styled.div`
  width: ${desktopVW(598)};
  height: ${desktopVH(399)};

  position: absolute;
  bottom: ${desktopVH(150)};
  left: ${desktopVW(420)};
  z-index: ${zIndex.low};
`

const ImageFour = styled.div`
  width: ${desktopVW(257)};
  height: ${desktopVH(257)};

  position: absolute;
  bottom: ${desktopVH(125)};
  right: ${desktopVW(200)};
  z-index: ${zIndex.medium};
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default SectionBridget
