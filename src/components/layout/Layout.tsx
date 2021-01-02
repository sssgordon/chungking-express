import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import styled, { createGlobalStyle } from 'styled-components'
import { color, desktopVW } from '../../styles'

const Layout = ({ children }) => {
  const cursorRef = useRef()

  useEffect(() => {
    const circle = cursorRef.current

    gsap.set(circle, { xPercent: -50, yPercent: -50 })

    let pos = { x: 0, y: 0 }
    let mouse = { x: pos.x, y: pos.y }
    const speed = 1

    const xSet = gsap.quickSetter(circle, 'x', 'px')
    const ySet = gsap.quickSetter(circle, 'y', 'px')

    window.addEventListener('mousemove', e => {
      mouse.x = e.x
      mouse.y = e.y
    })

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
      <CustomCursor ref={cursorRef} />
    </>
  )
}

const CustomCursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: ${desktopVW(16)};
  height: ${desktopVW(16)};
  border-radius: 100%;
  background-color: white;
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
