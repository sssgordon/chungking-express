import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export const useCursorHover = () => {
  const {
    layout: { cursorHover },
    setLayout,
  } = useContext(StoreContext)

  const setCursorHover = async boolean => {
    setLayout(prevState => {
      return { ...prevState, cursorHover: boolean }
    })
  }

  return setCursorHover
}
