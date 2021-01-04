import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styled, { createGlobalStyle } from 'styled-components'
import { color, desktopVW, easing } from '../../styles'
import { useLayout } from '../../hooks'

const Layout = ({ children }) => {
  const cursorRef = useRef()

  const { cursorHover } = useLayout()

  useEffect(() => {
    const circle = cursorRef.current

    gsap.set(circle, { xPercent: -50, yPercent: -50 })

    let pos = { x: 0, y: 0 }
    let mouse = { x: pos.x, y: pos.y }
    let speed = 0.7

    const xSet = gsap.quickSetter(circle, 'x', 'px')
    const ySet = gsap.quickSetter(circle, 'y', 'px')

    let update
    let tick = 0

    window.addEventListener('mousemove', e => {
      cancelAnimationFrame(update)
      update = requestAnimationFrame(() => {
        mouse.x = e.x
        mouse.y = e.y
        // tick++
        // console.log(tick)
      })
    })

    // // no raf: fires twice as many times unnecessarily
    // window.addEventListener('mousemove', e => {
    //   mouse.x = e.x
    //   mouse.y = e.y
    //   tick++
    //   console.log(tick)
    // })

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * speed
      pos.y += (mouse.y - pos.y) * speed
      xSet(pos.x)
      ySet(pos.y)
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
      <CustomCursor ref={cursorRef} cursorHover={cursorHover}>
        <div />
      </CustomCursor>
    </>
  )
}

const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999999;

  /* for hover scale transition; so that this doesn't affect gsap transform */
  div {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid grey;
    transform: ${({ cursorHover }) =>
      cursorHover ? `scale(1.5)` : `scale(1)`};
    transition: transform 0.3s ${easing.outQuad};
  }
`

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK:wght@100;300;400;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap');

  * {
    box-sizing: border-box;
    overscroll-behavior: contain; 
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: none !important;
    
    /* &::-webkit-scrollbar {
      display: none;
      } */
  } 

  body {
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Noto Sans HK', sans-serif;
    color: #fff;
    background-color: ${color.black};
    scroll-behavior: smooth !important;
    /* disable elastic-scrolling */
    overscroll-behavior-y: none;
  }

  a {
    color: inherit; 
    text-decoration: inherit; 
    font-weight: 400;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'GeomanistBook', sans-serif;
    margin: 0;
  }

  button {
    border: none;
    padding: 0;
    outline: none;
    background: none;
    cursor: pointer;
    color: inherit;
    letter-spacing: inherit;
    font-size: inherit;
    line-height:inherit;
    -webkit-tap-highlight-color: transparent;
  }

  input, textarea {
    -webkit-touch-callout: auto;
    -webkit-user-select: auto;
    -khtml-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    outline: none;
  }

  p{
    font-weight: 400;
    -webkit-touch-callout: text;
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    margin: 0 auto;
  }

  ol, ul {
	list-style: none;
  margin: 0;
  padding: 0;
  }
`

export default Layout
