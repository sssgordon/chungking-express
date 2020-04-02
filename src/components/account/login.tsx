import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import { useLoginCustomer } from '../../hooks'

import SEO from '../shared/SEO'
import LinkType from '../shared/LinkType'

export const Login = ({ path }: { path: string }) => {
  const [loginCustomer, { response, loading, error }] = useLoginCustomer()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await loginCustomer(email, password)
  }
  useEffect(() => {
    if (response) {
      navigate('/')
    }
  }, [response])

  return (
    <div>
      <SEO title='login' />
      <form onSubmit={e => handleSubmit(e)}>
        <h5>Log In</h5>
        {loading && <span>Loading</span>}
        {error && (
          <div>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}

        <div>Email</div>
        <input
          name='email'
          type='text'
          onChange={e => setEmail(e.target.value)}
          required={true}
          placeholder='Enter Email'
        />
        <div>Password</div>
        <input
          name='password'
          type='password'
          required={true}
          onChange={e => setPassword(e.target.value)}
          placeholder='Enter Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Log in</span>}
        </button>
        <p>
          <LinkType to='/account/forgot'>Forgot password?</LinkType>
        </p>
        <p>
          Don't have an account?{' '}
          <LinkType to='/account/register'>Sign up</LinkType>
        </p>
      </form>
    </div>
  )
}
