import { useState } from 'react'
import { useRemoveCustomer } from './useRemoveCustomer'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useLogoutCustomer = () => {
  const removeCustomer = useRemoveCustomer()

  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const logoutCustomer = async (user: any) => {
    if (user) {
      setState({ response: null, loading: true, error: null })
      try {
        const data = await fetch(
          `https://${process.env.FUNCTIONS_DOMAIN}.netlify.com/.netlify/functions/logout`,
          {
            method: 'POST',
            body: JSON.stringify({
              accessToken: user.token.accessToken,
            }),
          },
        )
        const res = await data

        if (res.status != 200) {
          setState({
            response: null,
            loading: false,
            error: 'not loged out',
          })
        } else {
          setState({
            response: 'loged out',
            loading: false,
            error: null,
          })

          removeCustomer()
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
  return [logoutCustomer, state] as const
}
