import { useState } from 'react'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useForgetPasswordCustomer = () => {
  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const forgetPassword = async (email: string) => {
    if (email) {
      setState({ response: null, loading: true, error: null })
      try {
        const data = await fetch(`/.netlify/functions/forgot-password`, {
          method: 'POST',
          body: JSON.stringify({
            email,
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
        error: 'The "email" is missing.',
      })
    }
  }

  return [forgetPassword, state] as const
}
