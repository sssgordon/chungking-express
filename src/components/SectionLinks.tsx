import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import gsap from 'gsap'
import { desktopVW, zIndex, color, easing } from '../styles'
import LinkTool from './shared/LinkType'
import { useCursorHover, useLayout } from '../hooks'

const SectionLinks = ({ data: { links } }) => {
  const sectionRef = useRef()
  const imageWrapperRef = useRef()
  const [hover, setHover] = useState({ hover: false, index: null })

  const { cursorHover } = useLayout()
  const setCursorHover = useCursorHover()

  useEffect(() => {
    const section = sectionRef.current
    const imageWrapper = imageWrapperRef.current

    const xSet = gsap.quickSetter(imageWrapper, 'x', 'px')
    const ySet = gsap.quickSetter(imageWrapper, 'y', 'px')

    let update
    let mouse = { x: null, y: null }
    let pos = { x: null, y: null }
    let speed = 0.7

    const handler = e => {
      cancelAnimationFrame(update)

      update = requestAnimationFrame(() => {
        mouse.x = e.clientX
        mouse.y = e.clientY
      })
    }

    section.addEventListener('mousemove', handler)

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * speed
      pos.y += (mouse.y - pos.y) * speed
      xSet(pos.x)
      ySet(pos.y)
    })

    return () => section.removeEventListener('mousemove', handler)
  }, [])

  return (
    <StyledSection ref={sectionRef}>
      <Links>
        {links.map(({ title }, i) => (
          <LinkWrapper
            key={i}
            onMouseEnter={() => {
              setHover({ hover: true, index: i })
              if (!cursorHover) setCursorHover(true)
            }}
            onMouseLeave={() => {
              setHover({ hover: false, index: null })
              if (cursorHover) setCursorHover(false)
            }}
          >
            <Link index={i} short={title.length === 2} hover={hover}>
              {title}
            </Link>
          </LinkWrapper>
        ))}
      </Links>
      <ImageWrapper ref={imageWrapperRef}>
        {links.map(({ image, title }, i) => {
          return (
            <StyledImage
              fluid={image.fluid}
              hover={hover.index === i}
              alt={title}
            />
          )
        })}
      </ImageWrapper>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: ${desktopVW(80)} ${desktopVW(160)};
  overflow: hidden;
`

const Links = styled.div`
  width: ${desktopVW(550)};
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: ${zIndex.medium};
`

const LinkWrapper = styled.div``

const Link = styled.a`
  font-size: ${desktopVW(80)};
  font-weight: 100;
  writing-mode: vertical-lr;
  position: relative;
  opacity: ${({ hover, index }) =>
    hover.hover ? (hover.index === index ? 1 : 0.2) : 1};
  transition: opacity 0.5s;

  &:hover {
    &::before {
      transform: ${({ short }) => (short ? 'scaleY(5)' : 'scaleY(2)')};
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${desktopVW(2.4)};
    height: 100%;
    background: currentColor;
    transform: scaleY(1);
    transition: transform 0.5s ${easing.inOutCubic};
    transform-origin: top left;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${desktopVW(453)};
  height: ${desktopVW(623)};
  z-index: ${zIndex.low};
  pointer-events: none;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ hover }) => (hover ? 1 : 0)};
  transition: opacity 0.2s;
  position: absolute !important;
  top: 0;
  left: 0;
`

export default SectionLinks
