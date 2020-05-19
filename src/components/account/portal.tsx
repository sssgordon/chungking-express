import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { useCustomer, useLogoutCustomer, useUpdateCustomer } from '../../hooks'
import CustomerAddressPanel from './customerAddressPanel'

export const Portal = () => {
  const user = useCustomer()
  const [logoutCustomer, { response, error }] = useLogoutCustomer()
  const [updateCustomer] = useUpdateCustomer()

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await logoutCustomer(user)
  }

  useEffect(() => {
    if (user) {
      updateCustomer(user)
    }
  }, [])

  useEffect(() => {
    if (response) {
      setTimeout(() => {
        navigate('/')
      }, 1000)
    }
  }, [response])

  return (
    <div>
      {user && (
        <div>
          Hi! {user.firstName}
          <br />
          <CustomerAddressPanel user={user} />
          <h5>Orders:</h5>
          <ul>
            {user.orders && user.orders.edges.length >= 1 ? (
              user.orders.edges.map(({ node }) => {
                return (
                  <li key={node.orderNumber}>
                    order number: {node.orderNumber}, price: {node.totalPrice},
                    ordered at: {node.processedAt},{' '}
                    <a href={node.statusUrl}>status</a>
                    <div>items:</div>
                    <ul>
                      {node.lineItems.edges.map(({ node }) => {
                        return (
                          <li key={node.title}>
                            {node.quantity} x {node.title} {node.variant.price}
                          </li>
                        )
                      })}
                    </ul>
                    <br />
                  </li>
                )
              })
            ) : (
              <li>no orders yet</li>
            )}
          </ul>
          <br />
          <button onClick={e => handleLogout(e)}>
            {error ? 'Problem login out' : 'Logout'}
          </button>
        </div>
      )}
    </div>
  )
}
