import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useCheckoutUrl(): string | null {
  const { cart } = useContext(StoreContext)
  if (cart == null) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return cart.webUrl
}
