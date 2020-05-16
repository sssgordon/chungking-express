import { useState } from 'react'
import { useSetCustomer } from './useSetCustomer'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useLoginCustomer = () => {
  const setCustomer = useSetCustomer()
  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const loginCustomer = async (email: string, password: string) => {
    if (email && password) {
      setState({ response: null, loading: true, error: null })
      try {
        const data = await fetch(`/.netlify/functions/login`, {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
        })
        const res = await data.json()
        if (res.error) {
          setState({
            response: null,
            loading: false,
            error: res.error,
          })
        } else {
          console.log(res)
          setCustomer(res, email)
          setState({
            response: res,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        setState({
          response: null,
          loading: false,
          error,
        })
      }
    } else {
      setState({
        response: null,
        loading: false,
        error: 'The "input" is missing.',
      })
    }
  }

  return [loginCustomer, state] as const
}
