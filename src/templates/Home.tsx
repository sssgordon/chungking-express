import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/home/Hero'
import { renderSections } from '../components/shared/Sections'

export interface homeProps {
  data: {
    contentfulHomePage: {
      heroImageDesktop: {
        title: string
        fluid: string
      }
      sections: any
    }
  }
}

const Home = ({ data: { contentfulHomePage } }: homeProps) => {
  const { heroImageDesktop, sections } = contentfulHomePage

  // console.log(sections)

  return (
    <>
      <Hero heroImageDesktop={heroImageDesktop} />
      {renderSections(sections)}
    </>
  )
}

export default Home

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    contentfulHomePage(id: { eq: $id }) {
      heroImageDesktop {
        title
        fluid(sizes: "(max-width: 1023px) 100vw, 100vw") {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      sections {
        ... on ContentfulSectionText {
          text
        }
        ... on ContentfulSectionImage {
          images {
            title
            fluid(sizes: "(max-width: 1023px) 100vw, 100vw") {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
