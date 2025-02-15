import React from 'react'
import AddressCard from './addressCard'
import AddressForm from './addressForm'

interface CustomerAddressProps {
  user: any
}

const CustomerAddressPanel = ({ user }: CustomerAddressProps) => {
  const { defaultAddress, addresses } = user
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {defaultAddress && (
        <AddressCard address={defaultAddress} isDefaultAddress={true} />
      )}
      {addresses &&
        addresses.edges.length >= 1 &&
        addresses.edges.map(({ node }) => {
          if (defaultAddress && node.id !== defaultAddress.id) {
            return <AddressCard key={node.id} address={node} />
          }
        })}
      <div>
        <AddressForm formType='Create' />
      </div>
    </div>
  )
}

export default CustomerAddressPanel
