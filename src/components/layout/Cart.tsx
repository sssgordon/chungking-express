import React from 'react'

import { useCartItems, useCheckoutUrl } from '../../hooks'

import LineItem from '../shared/LineItem'

const Cart = ({ visible }: { visible: boolean }) => {
  const items = useCartItems()
  const webUrl = useCheckoutUrl()

  return (
    <section style={{ display: visible ? 'block' : 'none' }}>
      {items.length >= 1 ? (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.title}>
                <LineItem item={item} />
              </li>
            ))}
          </ul>
          <a href={webUrl}>checkout</a>
        </div>
      ) : (
        'no items in cart'
      )}
    </section>
  )
}

export default Cart
