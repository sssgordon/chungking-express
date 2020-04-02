import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { useCustomer } from '../../hooks'

interface Props {
  component: React.ElementType
  path: string
}

const AuthWrapper = (props: Props) => {
  const { component: Component, path, ...rest } = props
  const [ready, setReady] = useState(false)
  const user = useCustomer()

  useEffect(() => {
    if (!user) {
      navigate('/account/login')
    }

    setReady(true)
  }, [0])

  return <div>{ready ? <Component path={path} {...rest} /> : <span />}</div>
}

export default AuthWrapper
