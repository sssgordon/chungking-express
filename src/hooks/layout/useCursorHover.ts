import { useContext } from 'react'
import { StoreContext } from '../../contexts'

export const useCursorHover = () => {
  const {
    layout: { cursorHover },
    setLayout,
  } = useContext(StoreContext)

  const setCursorHover = async () => {
    setLayout(prevState => {
      return { ...prevState, cursorHover: !cursorHover }
    })
  }

  return setCursorHover
}
