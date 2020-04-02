import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'

import { useActivateCustomer } from '../../hooks'
import SEO from '../shared/SEO'

const Activate = (props: { id: string; token: string }) => {
  const [activateCustomer, { response, loading, error }] = useActivateCustomer()
  const [sucsesMessage, setSucsesMessage] = useState(null)
  const [passwordField1, setPasswordField1] = useState('')
  const [passwordField2, setPasswordField2] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await activateCustomer(
      passwordField1,
      passwordField2,
      props.id,
      props.token,
    )
  }

  useEffect(() => {
    if (response) {
      setSucsesMessage('Activate sucsesful! You Can login now')
      setTimeout(() => {
        navigate('/account')
      }, 1000)
    }
  }, [response])

  return (
    <div>
      <SEO title='activate account' />
      <form onSubmit={e => handleSubmit(e)}>
        <h5>Activate Account</h5>
        <h2>Almost there.</h2>
        {sucsesMessage && (
          <div>
            <span>{sucsesMessage}</span>
          </div>
        )}
        {error && (
          <div>
            <span>{error}</span>
          </div>
        )}
        {loading && (
          <div>
            <span>Loading</span>
          </div>
        )}
        <div>Password</div>
        <input
          type='password'
          value={passwordField1}
          onChange={e => setPasswordField1(e.target.value)}
          placeholder='Password'
        />
        <div>Confirm Password</div>
        <input
          type='password'
          value={passwordField2}
          onChange={e => setPasswordField2(e.target.value)}
          placeholder='Confirm Password'
        />
        <button type='submit'>
          {loading ? <span>Loading</span> : <span>Activate</span>}
        </button>
      </form>

      <p>
        Already have an account? <Link to='/account/login'>Login</Link>
      </p>
    </div>
  )
}

export default Activate
