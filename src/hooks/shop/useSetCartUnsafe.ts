import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useSetCartUnsafe() {
  const { setCart } = useContext(StoreContext)
  return setCart
}
