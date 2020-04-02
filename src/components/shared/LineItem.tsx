import React from 'react'

import { useRemoveItemFromCart } from '../../hooks'

const LineItem = ({
  item: {
    title,
    quantity,
    variant: {
      id,
      priceV2: { amount, currencyCode },
    },
  },
}: {
  item: {
    title: string
    quantity: number
    variant?: { id: string; priceV2: { amount: number; currencyCode: string } }
  }
}) => {
  const removeItemFromCart = useRemoveItemFromCart()

  const handleRemoveItemFromCart = async () => {
    await removeItemFromCart(id)
  }
  return (
    <div>
      <span>{title}</span>
      <br />
      <span>Quantity: {quantity}</span>
      <br />
      <span>
        Price: {amount}
        {currencyCode}
      </span>
      <button onClick={() => handleRemoveItemFromCart()}>Remove</button>
    </div>
  )
}

export default LineItem
