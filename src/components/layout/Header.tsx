import React, { useContext } from 'react'

import LinkType from '../shared/LinkType'
import Cart from './Cart'

import { useToggleCart, useLayout } from '../../hooks'

const Header = () => {
  const toggleCart = useToggleCart()
  const { cartIsOpen } = useLayout()

  return (
    <header>
      <LinkType to='/'>Phill Simple</LinkType>
      <Cart visible={cartIsOpen} />
      <button onClick={() => toggleCart()}>
        {cartIsOpen ? 'Close cart' : 'Open cart'}
      </button>
      <LinkType to='account'>account</LinkType>
    </header>
  )
}

export default Header
