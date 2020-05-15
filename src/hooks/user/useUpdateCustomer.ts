import { useState } from 'react'
import { useSetCustomer } from './useSetCustomer'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useUpdateCustomer = () => {
  const setCustomer = useSetCustomer()

  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const updateCustomer = async (user: any) => {
    if (user) {
      setState({ response: null, loading: true, error: null })
      try {
        const data = await fetch(`/.netlify/functions/update-account`, {
          method: 'POST',
          body: JSON.stringify(user.token),
        })
        const res = await data.json()
        if (res.error) {
          setState({
            response: null,
            loading: false,
            error: res.error,
          })
        } else {
          setState({
            response: res,
            loading: false,
            error: null,
          })
          let email = res.customer.email
          setCustomer(res, email)
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
        error: 'No user',
      })
    }
  }

  return [updateCustomer, state] as const
}
