import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'gatsby-image'
import { desktopVW, zIndex } from '../styles'
import RichText from '../components/shared/RichText'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionFaye = ({ data: { line, images } }) => {
  return (
    <StyledSection>
      <Line>
        <RichText json={line.json} />
      </Line>
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

export default SectionFaye
