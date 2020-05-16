import React from 'react'

import Header from './Header'
import Footer from './Footer'
import '../../styles/main.css'

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
