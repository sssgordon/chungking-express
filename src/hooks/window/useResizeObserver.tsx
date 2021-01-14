import { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const useResizeObserver = (ref, callback) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      callback(entries[0].contentRect)
    })

    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [callback, ref])
}

export default useResizeObserver
