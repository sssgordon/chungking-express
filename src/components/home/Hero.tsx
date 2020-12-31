import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import gsap from 'gsap'
import { desktopVW } from '../../styles'
import { Icon } from '../../components/shared/Icon'

export interface Props {
  heroImageDesktop: {
    title: string
    fluid: string
  }
}

const Hero = (props: Props) => {
  const { heroImageDesktop } = props
  const titleWrapperRef = useRef()
  const imageRef = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    const titleWrapper = titleWrapperRef.current
    const title = titleWrapper.querySelector('div')
    const image = imageRef.current.imageRef.current
    const button = buttonRef.current
    const heroTimeline = gsap.timeline()

    heroTimeline
      .set(button, { scale: 0 })
      .set(title, { y: '70%', opacity: 0 })
      .set(image, { scale: 1.2 })
      .to(image, { scale: 1, duration: 1.5, delay: 0.5, ease: 'power2.inOut' })
      .set(title, { opacity: 1 })
      .to(title, { y: '0%', duration: 1.7, ease: 'power4.out' })
      .to(button, { scale: 1, duration: 1, ease: 'power3.inOut' }, '-=0.7')
  }, [])

  return (
    <StyledHero>
      <TitleWrapper ref={titleWrapperRef}>
        <Title>
          <Icon name='chung' />
          <Icon name='hing' />
          <Icon name='sum' />
          <Icon name='lum' />
        </Title>
      </TitleWrapper>
      <StyledImage
        fluid={heroImageDesktop.fluid}
        alt={heroImageDesktop.title}
        ref={imageRef}
      />
      <Button
        ref={buttonRef}
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
        onMouseEnter={() =>
          gsap.to(buttonRef.current, {
            scale: 0.92,
            duration: 0.3,
          })
        }
        onMouseLeave={() =>
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
          })
        }
      >
        <Icon name='arrow' />
      </Button>
    </StyledHero>
  )
}

const StyledHero = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${desktopVW(125)} ${desktopVW(72)};
`

const TitleWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: ${desktopVW(49)};
  left: ${desktopVW(72)};
  z-index: 10;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  width: ${desktopVW(1295.55)};

  svg {
    width: ${desktopVW(303)};
    height: auto;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Button = styled.button`
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: ${desktopVW(-55)};
  right: ${desktopVW(5)};
  transform: translate(-50%, -50%);
  will-change: transform;

  width: ${desktopVW(190)};
  height: ${desktopVW(190)};

  svg {
    width: ${desktopVW(8)};
    height: ${desktopVW(32)};
  }
`

export default Hero
