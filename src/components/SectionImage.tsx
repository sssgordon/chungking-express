import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, desktopVH } from '../styles'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionImage = ({ data: { images, scrub, text } }) => {
  const sectionRef = useRef()
  const imageWrapperRef = useRef()
  const imageCount = images.length

  useEffect(() => {
    const section = sectionRef.current
    const imageWrapper = imageWrapperRef.current
    const images = imageWrapper.querySelectorAll('.gatsby-image-wrapper')

    if (scrub) {
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
    } else {
      const scrollTrigger = {
        trigger: section,
        start: 'top 70%',
      }

      gsap.to(imageWrapper, {
        opacity: 1,
        scrollTrigger,
      })

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.8,
        scrollTrigger,
      })

      tl.to(images, {
        opacity: 1,
        stagger: 0.85,
        duration: 0.45,
      })
    }
  }, [])

  return (
    <StyledSection imageCount={imageCount} scrub={scrub} ref={sectionRef}>
      <ImageWrapper ref={imageWrapperRef}>
        {images.map((image, i) => (
          <StyledImage
            fluid={image.fluid}
            alt={image.title}
            scrub={scrub}
            key={i}
          />
        ))}
        {text && <Text>{text}</Text>}
      </ImageWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${({ imageCount, scrub }) =>
    scrub ? `${(imageCount / 4) * 100}vw` : '100vh'};

  padding: ${desktopVH(150)} ${desktopVW(200)};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: ${desktopVH(724)};
  top: ${desktopVH(150)};
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
  height: 100%;
  object-fit: cover;

  /* anim init */
  opacity: 0;

  ${({ scrub }) =>
    scrub &&
    `
    &:first-of-type {
      opacity: 1;
    }
  `}
`

const Text = styled.p`
  font-size: ${desktopVW(21)};
  width: 100%;
  color: white;
  transform: skewX(-15deg);
  text-align: center;
  font-weight: 100;

  position: absolute;
  bottom: ${desktopVW(-55)};
`

export default SectionImage
