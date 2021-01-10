import React from 'react'
import { graphql } from 'gatsby'
import { renderSections } from '../components/shared/Sections'

export interface homeProps {
  data: {
    contentfulHomePage: {
      sections: any
    }
  }
}

const Home = ({ data: { contentfulHomePage } }: homeProps) => {
  const { sections } = contentfulHomePage

  return <>{renderSections(sections)}</>
}

export default Home

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    contentfulHomePage(id: { eq: $id }) {
      sections {
        __typename
        ... on Node {
          ... on ContentfulSectionHero {
            heroImageDesktop {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 100vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
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
            scrub
            text
            blackBackground
          }
          ... on ContentfulSectionTextVideo {
            video {
              mp4 {
                file {
                  url
                }
              }
              webm {
                file {
                  url
                }
              }
              poster {
                title
                fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
            paragraphOne {
              json
            }
            paragraphTwo {
              json
            }
          }
          ... on ContentfulSectionBridget {
            images {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          ... on ContentfulSectionImageStatic {
            image {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 100vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          ... on ContentfulSectionTenThousandYears {
            image {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          ... on ContentfulSectionParallax {
            images {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          ... on ContentfulSectionFaye {
            line {
              json
            }
            images {
              title
              fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
          ... on ContentfulSectionLinks {
            links {
              title
              image {
                title
                fluid(sizes: "(max-width: 1023px) 100vw, 50vw") {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
