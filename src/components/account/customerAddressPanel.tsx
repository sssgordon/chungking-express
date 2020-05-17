import React from 'react'
import AddressCard from './addressCard'
import {
  MailingAddress,
  MailingAddressConnection,
} from 'shopify-storefront-api-typings'
import AddressForm from './addressForm'

interface CustomerAddressProps {
  user: any
}

const CustomerAddressPanel = ({ user }: CustomerAddressProps) => {
  const { defaultAddress, addresses } = user
  console.log(user)
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <AddressCard address={defaultAddress} isDefaultAddress={true} />
        {addresses &&
          addresses.edges.length >= 1 &&
          addresses.edges.map(({ node }) => {
            if (node.id !== defaultAddress.id) {
              return <AddressCard key={node.id} address={node} />
            }
          })}
        <div
          style={{
            backgroundColor: 'var(--green)',
            width: 'calc(50% - var(--size) / 2)',
            margin: 'calc(var(--size) / 4)',
            padding: 'calc(var(--size) / 2)',
          }}
        >
          <AddressForm formType='Create' />
        </div>
      </div>
    </div>
  )
}

export default CustomerAddressPanel
