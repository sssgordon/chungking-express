import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

import { useRegisterCustomer } from '../../hooks'

import SEO from '../shared/SEO'
import LinkType from '../shared/LinkType'

export const Register = ({ path }: { path: string }) => {
  const [registerCustomer, { response, loading, error }] = useRegisterCustomer()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')

  const form = React.createRef() as React.RefObject<HTMLFormElement>

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await registerCustomer(
      email,
      passwordField1,
      passwordField2,
      firstName,
      lastName,
    )
  }

  useEffect(() => {
    if (response) {
      navigate('/')
    }
  }, [response])

  return (
    <div>
      <SEO title='create account' />

      <form onSubmit={e => handleSubmit(e)} ref={form}>
        <h5>Sign Up</h5>
        {loading && <span>Loading</span>}
        {error && (
          <div className='studio mt1 error'>
            <span role='img' aria-label='error'>
              ⚠️
            </span>
            : {error}
          </div>
        )}
        <div>First Name</div>
        <input
          name='firstName'
          type='text'
          required={true}
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name'
        />
        <div>Last Name</div>
        <input
          name='lastName'
          type='text'
          required={true}
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name'
        />
        <div>Email</div>
        <input
          name='email'
          type='text'
          required={true}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter Email'
        />
        <div>Password</div>
        <p>
          (Must be at least 8 characters long and include a both a lowercase and
          uppercase letter).
        </p>
        <input
          name='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          type='password'
          required={true}
          placeholder='Password'
        />
        <div>Confirm Password</div>
        <input
          name='passwordConfirm'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          type='password'
          required={true}
          placeholder='Verify Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Submit</span>}
        </button>
        <p>
          Already have an account?{' '}
          <LinkType to='/account/login'>Log in</LinkType>
        </p>
      </form>
    </div>
  )
}
