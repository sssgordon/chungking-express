import { useState } from 'react'
import { MailingAddressInput } from 'shopify-storefront-api-typings'

interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useCreateAddress = () => {
  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const createAddress = async (
    customerAccessToken: string,
    address: MailingAddressInput,
  ) => {
    if (customerAccessToken && address) {
      try {
        const data = await fetch(`/.netlify/functions/create-address`, {
          method: 'POST',
          body: JSON.stringify({
            customerAccessToken,
            address,
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
  return [createAddress, state] as const
}
