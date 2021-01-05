import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, zIndex } from '../styles'
import RichText from '../components/shared/RichText'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionFaye = ({ data: { line, images } }) => {
  const sectionRef = useRef()
  const imageOneRef = useRef()
  const imageTwoRef = useRef()
  const imageThreeRef = useRef()
  const imageFourRef = useRef()
  const imageFiveRef = useRef()

  useEffect(() => {
    const section = sectionRef.current
    const imageOneWrapper = imageOneRef.current
    const imageOne = imageOneWrapper.querySelector('.gatsby-image-wrapper')
    const imageTwoWrapper = imageTwoRef.current
    const imageTwo = imageTwoWrapper.querySelector('.gatsby-image-wrapper')
    const imageThreeWrapper = imageThreeRef.current
    const imageThree = imageThreeWrapper.querySelector('.gatsby-image-wrapper')
    const imageFourWrapper = imageFourRef.current
    const imageFour = imageFourWrapper.querySelector('.gatsby-image-wrapper')
    const imageFiveWrapper = imageFiveRef.current
    const imageFive = imageFiveWrapper.querySelector('.gatsby-image-wrapper')

    // parallax animations
    gsap.to(imageOneWrapper, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageTwoWrapper, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageThreeWrapper, {
      yPercent: -70,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    })

    gsap.to(imageFourWrapper, {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'center top',
        scrub: true,
      },
    })

    gsap.to(imageFiveWrapper, {
      yPercent: -5,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'center top',
        scrub: true,
      },
    })

    // enter animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageOneWrapper,
          start: 'top 80%',
        },
      })
      .addLabel('start')
      .fromTo(
        imageOneWrapper,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 2,
          ease: 'power3.out',
        },
        'start',
      )
      .from(imageOne, { scale: 1.5, duration: 2, ease: 'power3.out' }, 'start')

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageTwoWrapper,
          start: 'top 80%',
        },
      })
      .addLabel('start')
      .fromTo(
        imageTwoWrapper,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.7,
          ease: 'power3.out',
        },
        'start',
      )
      .from(
        imageTwo,
        { scale: 1.5, duration: 1.7, ease: 'power3.out' },
        'start',
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageThreeWrapper,
          start: 'top 80%',
        },
      })
      .addLabel('start')
      .fromTo(
        imageThreeWrapper,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.5,
          ease: 'power3.out',
        },
        'start',
      )
      .from(
        imageThree,
        { scale: 1.5, duration: 1.5, ease: 'power3.out' },
        'start',
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageFourWrapper,
          start: 'top 80%',
        },
      })
      .addLabel('start')
      .fromTo(
        imageFourWrapper,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.7,
          ease: 'power3.out',
        },
        'start',
      )
      .from(
        imageFour,
        { scale: 1.5, duration: 1.7, ease: 'power3.out' },
        'start',
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageFiveWrapper,
          start: 'top 80%',
        },
      })
      .addLabel('start')
      .fromTo(
        imageFiveWrapper,
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.7,
          ease: 'power3.out',
        },
        'start',
      )
      .from(
        imageFive,
        { scale: 1.5, duration: 1.7, ease: 'power3.out' },
        'start',
      )
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <Line>
        <RichText json={line.json} />
      </Line>
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
      <ImageFive ref={imageFiveRef}>
        <StyledImage fluid={images[4].fluid} alt={images[4].title} />
      </ImageFive>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: ${desktopVW(2145)};
  position: relative;
`

const Line = styled.div`
  position: absolute;
  top: ${desktopVW(330)};
  left: ${desktopVW(80)};

  p {
    font-size: ${desktopVW(40)};
    font-weight: 100;
    transform: skewX(-15deg);
  }
`

const ImageOne = styled.div`
  width: ${desktopVW(623)};
  height: ${desktopVW(751)};

  position: absolute;
  top: ${desktopVW(80)};
  right: ${desktopVW(0)};
  z-index: ${zIndex.low};
`

const ImageTwo = styled.div`
  width: ${desktopVW(337)};
  height: ${desktopVW(400)};

  position: absolute;
  top: ${desktopVW(800)};
  right: ${desktopVW(505)};
  z-index: ${zIndex.medium};
`

const ImageThree = styled.div`
  width: ${desktopVW(193)};
  height: ${desktopVW(220)};

  position: absolute;
  top: ${desktopVW(1150)};
  right: ${desktopVW(355)};
  z-index: ${zIndex.high};
`

const ImageFour = styled.div`
  width: ${desktopVW(394)};
  height: ${desktopVW(556)};

  position: absolute;
  top: ${desktopVW(1390)};
  left: ${desktopVW(80)};
`

const ImageFive = styled.div`
  width: ${desktopVW(394)};
  height: ${desktopVW(556)};

  position: absolute;
  top: ${desktopVW(1390)};
  left: ${desktopVW(514)};
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default SectionFaye
