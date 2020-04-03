import React, { useEffect } from 'react'
import {
  useAddItemToCart,
  useAddToCartTracking,
  useProductViewTracking,
  useLayout,
  useToggleCart,
} from '../hooks'

import { decode } from 'shopify-gid'

const Product = ({ location }) => {
  const StoreFrontID =
    'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMzE0Mzg0OTU0OTk2MA=='
  const Title = 'test product'
  const Price = 200

  const addItemToCart = useAddItemToCart()
  const toggleCart = useToggleCart()
  const { cartIsOpen } = useLayout()

  const handleAddToCart = async () => {
    await addItemToCart(StoreFrontID, 1)
    useAddToCartTracking(StoreFrontID, Title, Price, location, 1)
    if (!cartIsOpen) {
      toggleCart()
    }
  }

  useEffect(() => {
    useProductViewTracking(StoreFrontID, Title, Price, location)
  }, [])

  return (
    <div>
      <br />
      <h1>{Title}</h1>
      <button onClick={() => handleAddToCart()}>Add to cart - €{Price} </button>
      <br />
      <br />
    </div>
  )
}

export default Product
