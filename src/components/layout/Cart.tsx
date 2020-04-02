import React from 'react'

import { useCartItems, useCheckoutUrl } from '../../hooks'

import LineItem from '../shared/LineItem'

const Cart = ({ visible }: { visible: boolean }) => {
  const items = useCartItems()
  const webUrl = useCheckoutUrl()

  return (
    <section style={{ display: visible ? 'block' : 'none' }}>
      <ul>
        {items.length >= 1
          ? items.map(item => (
              <li key={item.title}>
                <LineItem item={item} />
              </li>
            ))
          : 'no items in cart'}
      </ul>
      <a href={webUrl}>checkout</a>
    </section>
  )
}

export default Cart
