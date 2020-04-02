import { useState } from 'react'
import { useSetCustomer } from './useSetCustomer'
import PasswordValidator from 'password-validator'

export interface Istate {
  response?: string
  loading: boolean
  error?: string
}

export const useRegisterCustomer = () => {
  const setCustomer = useSetCustomer()
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

  const registerCustomer = async (
    email: string,
    passwordField1: string,
    passwordField2: string,
    firstName: string,
    lastName: string,
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
    } else if (email && passwordField1 && firstName && lastName) {
      setState({ response: null, loading: true, error: null })
      try {
        const data = await fetch(
          `https://${process.env.FUNCTIONS_DOMAIN}.netlify.com/.netlify/functions/register`,
          {
            method: 'POST',
            body: JSON.stringify({
              email,
              password: passwordField1,
              firstName,
              lastName,
            }),
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
        error:
          'The "input" is missing. email, passwordField1, passwordField2, firstName & lastName are required',
      })
    }
  }

  return [registerCustomer, state] as const
}
