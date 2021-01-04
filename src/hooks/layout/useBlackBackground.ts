import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export const useBlackBackground = () => {
  const {
    layout: { blackBackground },
    setLayout,
  } = useContext(StoreContext)

  const setBlackBackground = async boolean => {
    setLayout(prevState => {
      return { ...prevState, blackBackground: boolean }
    })
  }

  return setBlackBackground
}
