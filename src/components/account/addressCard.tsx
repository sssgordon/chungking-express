import React, { useState } from 'react'
import { MailingAddress } from 'shopify-storefront-api-typings'
import AddressForm from './addressForm'
import { useCustomer } from '../../hooks'
import { useCustomerAddress } from '../../hooks/user/useCustomerAddress'

interface AddressCardProps {
  address: MailingAddress
  isDefaultAddress?: boolean
}

const AddressCard = ({ address, isDefaultAddress }: AddressCardProps) => {
  console.log(address)
  const [toggleForm, setToggleForm] = useState(false)
  const [
    { updateDefaultAddress, deleteAddress },
    { response, loading, error },
  ] = useCustomerAddress()
  const user = useCustomer()

  return (
    <div>
      {!toggleForm ? (
        <>
          <b>{isDefaultAddress ? 'Default address' : 'Address'}</b>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>First name: {address.firstName}</li>
            <li>Last name: {address.lastName}</li>
            <li>Company: {address.company || '-'}</li>
            <li>Address 1: {address.address1 || '-'}</li>
            <li>Address 2: {address.address2 || '-'}</li>
            <li>Zip code: {address.zip || '-'}</li>
            <li>City: {address.city || '-'}</li>
            <li>Country: {address.country || '-'}</li>
            <li>Phone: {address.phone || '-'}</li>
            <li>
              <button onClick={() => setToggleForm(true)}>Update</button>
              {!isDefaultAddress && (
                <button
                  onClick={() => updateDefaultAddress(user.token, address.id)}
                >
                  Make default
                </button>
              )}
              <button onClick={() => deleteAddress(user.token, address.id)}>
                Remove
              </button>
            </li>
          </ul>
          {error && <span>{error}</span>}
        </>
      ) : (
        <AddressForm
          formType='Update'
          setToggleForm={setToggleForm}
          currentAddress={address}
        />
      )}
    </div>
  )
}

export default AddressCard
