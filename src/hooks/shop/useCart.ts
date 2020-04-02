import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useCart() {
  const { cart } = useContext(StoreContext)
  return cart
}
