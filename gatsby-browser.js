import React from 'react'
import { StoreContextProvider } from './src/contexts'

import Layout from './src/components/layout/Layout'

export const wrapRootElement = ({ element }) => (
  <StoreContextProvider>{element}</StoreContextProvider>
)

export const wrapPageElement = ({
  element,
  props: {
    pageContext: { site },
  },
}) => <Layout>{element}</Layout>
