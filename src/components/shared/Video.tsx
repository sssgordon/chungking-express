import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Video = ({ mp4, webm, poster }) => {
  const videoEl = useRef()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (videoEl.current.readyState >= 3) {
        videoEl.current.play()
        setReady(true)
        clearInterval(intervalId)
      }
    }, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <StyledVideo>
      <VideoPlayer
        autoPlay
        disableRemotePlayback
        loop
        playsInline
        muted
        ref={videoEl}
      >
        <source src={mp4.file.url} type='video/mp4' />
        <source src={webm.file.url} type='video/webm' />
      </VideoPlayer>
      <StyledImage
        hidden={ready}
        fluid={poster.fluid}
        withPlaceholder
        alt='poster'
      />
    </StyledVideo>
  )
}

const StyledVideo = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

const VideoPlayer = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;

  &::-webkit-media-controls {
    display: none;
    -webkit-appearance: none;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute !important;
  top: 0;
  left: 0;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`

export default Video
