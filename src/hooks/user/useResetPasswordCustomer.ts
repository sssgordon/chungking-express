import { useState } from 'react'
import PasswordValidator from 'password-validator'
import { encode } from 'shopify-gid'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useResetPasswordCustomer = () => {
  const [state, setState] = useState<Istate | null>({
    response: null,
    loading: false,
    error: null,
  })

  const resetPassword = async (
    passwordField1: string,
    passwordField2: string,
    id: string,
    token: string,
  ) => {
    setState({ response: null, loading: true, error: null })

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
    } else if (passwordField1 && token && id) {
      try {
        const body = {
          id: encode('Customer', id),
          input: {
            resetToken: token,
            password: passwordField1,
          },
        }
        const data = await fetch(`/.netlify/functions/reset-password`, {
          method: 'POST',
          body: JSON.stringify(body),
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
        error: 'The "password, token or id" is missing.',
      })
    }
  }

  return [resetPassword, state] as const
}
