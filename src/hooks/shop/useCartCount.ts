import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useCartCount() {
  const { cart } = useContext(StoreContext)
  if (cart == null || cart.lineItems.length < 1) {
    return 0
  }

  const count = cart.lineItems.reduce((totalCount, lineItem) => {
    return totalCount + lineItem.quantity
  }, 0)

  return count
}
