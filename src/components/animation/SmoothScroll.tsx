import React, { useState, useRef, useEffect, forwardRef } from 'react'
import * as detectIt from 'detect-it'
import useRaf from '../../hooks/window/useRaf'
import useWindowScroll from '../../hooks/window/useWindowScroll'
import styled from 'styled-components'
import useWindowResize from '../../hooks/window/useWindowResize'
import useResizeObserver from '../../hooks/window/useResizeObserver'

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  &.is-active {
    overflow: hidden;
    left: 0;
    position: fixed;
  }
`

const SizeDummy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
`

const SmoothScroll = forwardRef(
  (
    { children, enabled = true, onChangePageY, disablePointerEvents = true },
    ref,
  ) => {
    // refs
    const el = useRef()
    const elDummy = useRef()
    const isEnabled = useRef(enabled)

    // physics
    const _y = useRef(0)
    const y = useRef(0)
    const oy = useRef(0)
    const vy = useRef(0)

    const isFirefox = useRef(
      typeof navigator !== 'undefined'
        ? navigator.userAgent.toLowerCase().indexOf('firefox') > -1
        : false,
    )
    const easing = isFirefox.current ? 0.35 : 0.12
    const easingTouch = 0.28

    const [display, setDisplay] = useState(enabled)
    const [height, setHeight] = useState(null)

    let pointerDisabled = useRef(false)
    let mode = useRef('mouse')
    let dragging = useRef(false)

    useEffect(() => {
      if (detectIt.primaryInput !== 'touch') {
        setDisplay(enabled)

        // if (enabled) {
        //   window.requestAnimationFrame(() => {
        //     window.scrollTo(0, _y.current)
        //   })
        // }
      } else {
        document.body.style.overflow = enabled ? '' : 'hidden'
      }

      isEnabled.current = enabled
    }, [enabled])

    const onTouchStart = e => {
      dragging = true
      mode = 'touch'
    }

    const onTouchEnd = e => {
      dragging = false
    }

    const onMouseWheel = e => {
      if (!mode || mode === 'touch') mode = 'mouse'
      dragging = false
    }

    const reset = () => {
      y.current = _y.current = vy.current = 0
      if (detectIt.primaryInput !== 'touch') tick(true)
    }

    const tick = now => {
      if (isEnabled.current) {
        if (now) {
          y.current = _y.current
          vy.current = 0
        } else if (!dragging && (mode === 'touch' || mode === 'trackpad')) {
          y.current += _y.current - y.current
          vy.current = _y.current - y.current
        } else {
          y.current += _y.current - y.current
          vy.current = _y.current - y.current
        }

        // disable pointer events while scrolling
        if (disablePointerEvents) {
          if (!pointerDisabled && Math.abs(vy) > 10) {
            pointerDisabled = true
            el.current.style.pointerEvents = 'none'
          } else if (pointerDisabled && Math.abs(vy) <= 10) {
            pointerDisabled = false
            el.current.style.pointerEvents = ''
          }
        }
      }

      const yRound = (((y.current + 0.01) * 100) | 0) / 100 // rounding values

      if (yRound !== oy.current) {
        SmoothScroll.y = yRound
        const translate = `translate3d(0,${-yRound}px,0)`
        el.current.style.transform = translate
        onChangePageY && onChangePageY(y.current)
      }

      oy.current = yRound
    }

    if (ref) ref.current = { tick, reset }

    const wheelEvent = useRef()
    const firstResize = useRef(true)

    if (typeof document !== 'undefined') {
      wheelEvent.current =
        'onwheel' in document
          ? 'wheel'
          : 'onmousewheel' in document
          ? 'mousewheel'
          : 'DOMMouseScroll'

      // enable smoothscrolling for non touch device only
      if (detectIt.primaryInput !== 'touch') {
        useResizeObserver(el, e => {
          setHeight(e.height)
        })

        useWindowResize(e => {
          setHeight(el.current.offsetHeight)

          if (el.current && firstResize.current) {
            y.current = oy.current = _y.current = window.pageYOffset

            const passive = detectIt.supportsPassiveEvents
              ? { passive: true }
              : false
            el.current.addEventListener(
              wheelEvent.current,
              onMouseWheel,
              passive,
            )
            el.current.addEventListener('touchstart', onTouchStart, passive)
            el.current.addEventListener('touchend', onTouchEnd, passive)
            el.current.classList.add('is-active')

            firstResize.current = false
          }
          tick(true)
        }, true)

        useRaf(() => tick(), true)
      }

      useWindowScroll(e => {
        if (isEnabled.current) {
          _y.current = e.pageYOffset
        }

        if (detectIt.primaryInput === 'touch') {
          SmoothScroll.y = e.pageYOffset
        }
      })
    }

    return (
      <>
        <Container ref={el}>{children}</Container>
        <SizeDummy
          ref={elDummy}
          style={{ height: height + 'px', display: display ? '' : 'none' }}
        />
      </>
    )
  },
)

SmoothScroll.y = 0

export default SmoothScroll
