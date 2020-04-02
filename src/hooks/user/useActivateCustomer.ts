import { useState } from 'react'
import PasswordValidator from 'password-validator'
import { encode } from 'shopify-gid'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useActivateCustomer = () => {
  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const schema = new PasswordValidator()

  schema
    .is()
    .min(8)
    .is()
    .max(100)
    .has()
    .lowercase()
    .has()
    .uppercase()

  const activeCustomer = async (
    passwordField1: string,
    passwordField2: string,
    id: string,
    token: string,
  ) => {
    if (!schema.validate(passwordField1)) {
      setState({
        response: null,
        loading: false,
        error:
          'Your password should be between 8 and 100 characters, and have at least one lowercase and one uppercase letter.',
      })
    } else if (passwordField1 !== passwordField2) {
      setState({
        response: null,
        loading: false,
        error: 'Passwords do not match.',
      })
    } else if (passwordField1 && passwordField2 && id && token) {
      setState({ response: null, loading: true, error: null })
      try {
        const body = {
          id: encode('Customer', id),
          input: {
            activationToken: token,
            password: passwordField1,
          },
        }

        const data = await fetch(
          `https://${process.env.FUNCTIONS_DOMAIN}.netlify.com/.netlify/functions/activate`,
          {
            method: 'POST',
            body: JSON.stringify(body),
          },
        )
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
        error: 'The "Password" is missing.',
      })
    }
  }

  return [activeCustomer, state] as const
}
