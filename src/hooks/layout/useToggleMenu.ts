import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useToggleMenu() {
  const {
    layout: { menuIsOpen },
    setLayout,
  } = useContext(StoreContext)

  async function toggleMenu() {
    setLayout(prevState => {
      return { ...prevState, menuIsOpen: !menuIsOpen }
    })
  }

  return toggleMenu
}
