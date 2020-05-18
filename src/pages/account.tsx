import React from 'react'
import { Router } from '@reach/router'
import AuthWrapper from '../components/account/authWrapper'
// @ts-ignore
import Activate from '../components/account/activate'

import { ForgotPassword } from '../components/account/forgotPassword'
import { Register } from '../components/account/register'
import { Login } from '../components/account/login'
import { Reset } from '../components/account/reset'
import { InvalidToken } from '../components/account/invalid_token'
import { Portal } from '../components/account/portal'

const Account = ({ pageContext }: { pageContext: {} }) => {
  return (
    <div>
      <Router>
        <PublicRoute path='/account'>
          <AuthWrapper path='/' component={Portal} />
          <Login path='/login' />
          <Reset path='/reset/:id/:token' />
          <Activate
            // @ts-ignore
            path='/activate/:id/:token'
          />
          <InvalidToken path='/invalid_token' />
          <Register path='/register' />
          <ForgotPassword path='/forgot' />
        </PublicRoute>
      </Router>
    </div>
  )
}

function PublicRoute(props: { children: React.ReactNode; path: string }) {
  return <div>{props.children}</div>
}

export default Account
