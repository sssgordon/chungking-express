import React, { useContext } from 'react'

import LinkType from '../shared/LinkType'
import Cart from './Cart'

import { useToggleCart, useToggleMenu, useLayout } from '../../hooks'

const Header = () => {
  const toggleCart = useToggleCart()
  const toggleMenu = useToggleMenu()
  const { cartIsOpen, menuIsOpen } = useLayout()

  return (
    <>
      <header
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <button onClick={() => toggleMenu()}>
          {menuIsOpen ? 'Close menu' : 'Open menu'}
        </button>

        <LinkType to='/'>Phill Simple</LinkType>

        <button onClick={() => toggleCart()}>
          {cartIsOpen ? 'Close cart' : 'Open cart'}
        </button>
      </header>
      {menuIsOpen && (
        <ul>
          <li>
            <LinkType to='product' onClick={() => toggleMenu()}>
              Product
            </LinkType>
          </li>
          <li>
            <LinkType to='account' onClick={() => toggleMenu()}>
              Account
            </LinkType>
          </li>
          <li>
            <LinkType to='404' onClick={() => toggleMenu()}>
              404
            </LinkType>
          </li>
        </ul>
      )}
      <Cart visible={cartIsOpen} />
    </>
  )
}

export default Header
