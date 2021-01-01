import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { desktopVW, desktopVH } from '../styles'
import Video from '../components/shared/Video'
import RichText from '../components/shared/RichText'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionTextVideo = ({ data: { video, paragraphOne, paragraphTwo } }) => {
  const dateRef = useRef()
  const expiryDateRef = useRef()

  const days = []
  for (let i = 12; i < 31; i++) {
    days.push(i)
  }

  useEffect(() => {
    const date = dateRef.current
    const expiryDate = expiryDateRef.current

    gsap.to(date, {
      y: () => `${(100 / days.length) * (days.length - 1) * -1}%`,
      duration: 4,
      delay: 0.5,
      ease: 'power3.inOut',
      scrollTrigger: expiryDate,
    })
  }, [])

  return (
    <StyledSection>
      <ExpiryDate ref={expiryDateRef}>
        <Date ref={dateRef}>
          {days.map((day, i) => (
            <Day key={i}>{day}</Day>
          ))}
        </Date>
        <MonthYear>&nbsp;&nbsp;&nbsp;May 1994</MonthYear>
      </ExpiryDate>
      <VideoWrapper>
        <Video mp4={video.mp4} webm={video.webm} poster={video.poster} />
      </VideoWrapper>
      {paragraphOne && (
        <Paragraph>
          <RichText json={paragraphOne.json} />
        </Paragraph>
      )}
      {paragraphTwo && (
        <Paragraph two={true}>
          <RichText json={paragraphTwo.json} />
        </Paragraph>
      )}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`

const ExpiryDate = styled.div`
  font-size: ${desktopVW(120)};
  z-index: 10;
  position: relative;
  font-family: 'DM Mono';
  font-weight: 100;
  line-height: 1;

  display: flex;
  overflow: hidden;
`

const Date = styled.span`
  display: inline-flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
`

const Day = styled.p``

const MonthYear = styled.span`
  display: inline-block;
`

const VideoWrapper = styled.div`
  position: absolute;
  top: ${desktopVH(80)};
  right: 0;

  width: ${desktopVW(589)};
  height: ${desktopVH(864)};
`

const Paragraph = styled.div`
  position: absolute;
  ${({ two }) =>
    two
      ? `
  bottom: ${desktopVH(80)};
  `
      : `
  top: ${desktopVH(80)};
  `};
  left: ${desktopVW(80)};

  p {
    font-size: ${desktopVW(26)};
    font-weight: 100;
    line-height: 1.8;
    transform: skewX(-15deg);
  }
`

export default SectionTextVideo
