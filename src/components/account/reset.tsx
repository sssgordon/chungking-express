import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

import { useResetPasswordCustomer } from '../../hooks'

import SEO from '../shared/SEO'

export const Reset = (props: { path: string; id?: string; token?: string }) => {
  const [
    resetPassword,
    { response, loading, error },
  ] = useResetPasswordCustomer()

  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')
  const [formSuccess, setFormSucces] = useState(null)
  const form = React.createRef() as React.RefObject<HTMLFormElement>

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await resetPassword(passwordField1, passwordField2, props.id, props.token)
  }

  useEffect(() => {
    if (response) {
      setFormSucces(true)

      setTimeout(() => {
        navigate('/account')
      }, 1500)
    }
  }, [response])

  return (
    <div>
      <SEO title='reset' />
      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h5>Reset Your Password</h5>
        <h2>Let's get you logged back in.</h2>

        {loading && <span>Loading</span>}

        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}

        {formSuccess && (
          <div>Password changed!, you can now login with your new password</div>
        )}

        <div>Password</div>
        <input
          name='password'
          type='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          required={true}
          placeholder='Password'
        />

        <div>Confirm Password</div>
        <input
          name='passwordConfirm'
          type='password'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          required={true}
          placeholder='Confirm Password'
        />
        <button type='submit'>
          {loading ? 'Resetting' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}
