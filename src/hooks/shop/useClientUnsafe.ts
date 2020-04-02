import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export function useClientUnsafe() {
  const { client } = useContext(StoreContext)
  return client
}
