import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/shared/SEO'

import { useAddItemToCart, useLayout, useToggleCart } from '../hooks'

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

  const StoreFrontID =
    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMzE0Mzg0OTU0OTk2MA=='

  const addItemToCart = useAddItemToCart()
  const toggleCart = useToggleCart()
  const { cartIsOpen } = useLayout()

  const handleAddToCart = async () => {
    await addItemToCart(StoreFrontID, 1)
    if (!cartIsOpen) {
      toggleCart()
    }
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <button onClick={() => handleAddToCart()}>Add to cart</button>
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
