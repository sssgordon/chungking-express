import { useState } from 'react'
import { MailingAddressInput } from 'shopify-storefront-api-typings'

interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useCustomerAddress = () => {
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
        const data = await fetch(`/.netlify/functions/update-address`, {
          method: 'POST',
          body: JSON.stringify({
            customerAccessToken,
            address,
            action: 'CREATE',
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

  const updateDefaultAddress = async (
    customerAccessToken: string,
    id: string,
  ) => {
    if (customerAccessToken && id) {
      try {
        const data = await fetch(`/.netlify/functions/update-address`, {
          method: 'POST',
          body: JSON.stringify({
            customerAccessToken,
            id,
            action: 'DEFAULT_UPDATE',
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
        error: 'The "input" is missing.',
      })
    }
  }

  const deleteAddress = async (customerAccessToken: string, id: string) => {
    console.log(id)
    if (customerAccessToken && id) {
      try {
        const data = await fetch(`/.netlify/functions/update-address`, {
          method: 'POST',
          body: JSON.stringify({
            customerAccessToken,
            id,
            action: 'DELETE',
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
        error: 'The "input" is missing.',
      })
    }
  }
  const updateAddress = async (
    customerAccessToken: string,
    id: string,
    address: MailingAddressInput,
  ) => {
    if (customerAccessToken && id) {
      try {
        const data = await fetch(`/.netlify/functions/update-address`, {
          method: 'POST',
          body: JSON.stringify({
            customerAccessToken,
            id,
            address,
            action: 'UPDATE',
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
        error: 'The "input" is missing.',
      })
    }
  }

  return [
    { createAddress, updateDefaultAddress, deleteAddress, updateAddress },
    state,
  ] as const
}
