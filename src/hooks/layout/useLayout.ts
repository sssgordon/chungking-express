import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useLayout() {
  const { layout } = useContext(StoreContext)
  return layout
}
