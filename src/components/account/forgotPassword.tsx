import React, { useState, useEffect } from 'react'

import { useForgetPasswordCustomer } from '../../hooks'

import SEO from '../shared/SEO'
import LinkType from '../shared/LinkType'

export const ForgotPassword = ({ path }: { path: string }) => {
  const [
    forgetPassword,
    { response, loading, error },
  ] = useForgetPasswordCustomer()
  const [formSuccess, setFormSuccess] = useState(false)
  const [email, setEmail] = useState('')

  const form = React.createRef() as React.RefObject<HTMLFormElement>

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    forgetPassword(email)
  }

  useEffect(() => {
    if (response) {
      setFormSuccess(true)
    }
  }, [response])

  return (
    <div>
      <SEO title='forgot password' />
      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h2>Forgot your password?</h2>
        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}
        {formSuccess && <div>Got it! Email coming your way now.</div>}
        <div>Email</div>
        <input
          name='email'
          type='text'
          required={true}
          placeholder='Enter Email'
          onChange={e => setEmail(e.target.value)}
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Request Reset</span>}
        </button>
        <p>
          Remember your password? <LinkType to='/account/login'>Login</LinkType>
        </p>
      </form>
    </div>
  )
}
