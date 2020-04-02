import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useCartItems() {
  const { cart } = useContext(StoreContext)
  if (cart == null || cart.lineItems == null) {
    return []
  }

  return cart.lineItems
}
