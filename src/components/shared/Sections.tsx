import React, { useRef, useEffect } from 'react'
import loadable from '@loadable/component'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayout, useBlackBackground } from '../../hooks'
import SectionHero from '../SectionHero'

// import SectionText from '../SectionText'
// import SectionImage from '../SectionImage'
// import SectionTextVideo from '../SectionTextVideo'
// import SectionBridget from '../SectionBridget'
// import SectionImageStatic from '../SectionImageStatic'
// import SectionTenThousandYears from '../SectionTenThousandYears'
// import SectionParallax from '../SectionParallax'
// import SectionFaye from '../SectionFaye'

gsap.registerPlugin(ScrollTrigger) // register gsap plugin

const SectionText = loadable(() => import('../SectionText'))
const SectionImage = loadable(() => import('../SectionImage'))
const SectionTextVideo = loadable(() => import('../SectionTextVideo'))
const SectionBridget = loadable(() => import('../SectionBridget'))
const SectionImageStatic = loadable(() => import('../SectionImageStatic'))
const SectionTenThousandYears = loadable(() =>
  import('../SectionTenThousandYears'),
)
const SectionParallax = loadable(() => import('../SectionParallax'))
const SectionFaye = loadable(() => import('../SectionFaye'))

const blackBackgroundSections = [
  'ContentfulSectionHero',
  'ContentfulSectionText',
  'ContentfulSectionBridget',
  'ContentfulSectionImage',
  'ContentfulSectionImageStatic',
  'ContentfulSectionTenThousandYears',
  'ContentfulSectionTextVideo',
]

const Sections = ({ type, data }) => {
  const sectionRef = useRef()

  const blackBackgroundSection = blackBackgroundSections.find(section =>
    section === type ? true : false,
  )

  const setBlackBackground = useBlackBackground()

  useEffect(() => {
    const section = sectionRef.current
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onToggle: () => {
        if (blackBackgroundSection) {
          setBlackBackground(true)
        } else {
          setBlackBackground(false)
        }
      },
    })
  }, [])

  switch (type) {
    case 'ContentfulSectionHero':
      return (
        <section ref={sectionRef}>
          <SectionHero data={data} />
        </section>
      )
    case 'ContentfulSectionText':
      return (
        <section ref={sectionRef}>
          <SectionText data={data} />
        </section>
      )
    case 'ContentfulSectionImage':
      return (
        <section ref={sectionRef}>
          <SectionImage data={data} />
        </section>
      )
    case 'ContentfulSectionTextVideo':
      return (
        <section ref={sectionRef}>
          <SectionTextVideo data={data} />
        </section>
      )
    case 'ContentfulSectionBridget':
      return (
        <section ref={sectionRef}>
          <SectionBridget data={data} />
        </section>
      )
    case 'ContentfulSectionImageStatic':
      return (
        <section ref={sectionRef}>
          <SectionImageStatic data={data} />
        </section>
      )
    case 'ContentfulSectionTenThousandYears':
      return (
        <section ref={sectionRef}>
          <SectionTenThousandYears data={data} />
        </section>
      )
    case 'ContentfulSectionParallax':
      return (
        <section ref={sectionRef}>
          <SectionParallax data={data} />
        </section>
      )
    case 'ContentfulSectionFaye':
      return (
        <section ref={sectionRef}>
          <SectionFaye data={data} />
        </section>
      )
    default:
      return <span>{type}</span>
  }
}

export const renderSections = sections => {
  if (sections) {
    return sections?.map((data, i) => {
      return (
        <React.Fragment key={data.__typename + i}>
          <Sections type={data.__typename} data={data} />
        </React.Fragment>
      )
    })
  }
}
