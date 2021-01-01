import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { desktopVW, desktopVH } from '../styles'
import Video from '../components/shared/Video'
import RichText from '../components/shared/RichText'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionTextVideo = ({ data: { video, paragraphOne, paragraphTwo } }) => {
  console.log(video)
  return (
    <StyledSection>
      <VideoWrapper>
        <Video mp4={video.mp4} webm={video.webm} poster={video.poster} />
      </VideoWrapper>
      {paragraphOne && (
        <ParagraphOne>
          <RichText json={paragraphOne.json} />
        </ParagraphOne>
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

const VideoWrapper = styled.div`
  position: absolute;
  top: ${desktopVH(80)};
  right: 0;

  width: ${desktopVW(589)};
  height: ${desktopVH(864)};
`

const ParagraphOne = styled.div`
  position: absolute;
  top: ${desktopVH(120)};
  left: ${desktopVW(100)};
`

export default SectionTextVideo
