import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useToggleCart() {
  const {
    layout: { cartIsOpen },
    setLayout,
  } = useContext(StoreContext)

  async function toggleCart() {
    setLayout(prevState => {
      return { ...prevState, cartIsOpen: !cartIsOpen }
    })
  }

  return toggleCart
}
