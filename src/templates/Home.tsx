import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/shared/SEO'

export interface homeProps {
  data: {
    contentfulHome: {
      seoTitle: string
      seoDescription: string
    }
  }
}

const Home = ({ data: { contentfulHome } }: homeProps) => {
  const { seoTitle, seoDescription } = contentfulHome

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <br />
      <br />
      <h1>Phill Simple</h1>
      <img
        style={{
          width: '100%',
        }}
        src='https://images.cdn.superguide.nl/fx_ZxsG2pfmkAre6rBFIz4FYm4s=/1200x630/smart/superguide.nl/s3fs-public/main_media/wtf_dr._phil_zet_huis_met_bizarre_inrichting_te_koop.jpg?itok=iHzszsbk&nid=30255'
      />
      <br />
      <br />
    </>
  )
}

export default Home

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    contentfulHome(id: { eq: $id }) {
      seoTitle
      seoDescription
    }
  }
`
