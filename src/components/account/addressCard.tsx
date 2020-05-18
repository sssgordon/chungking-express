import React, { useState } from 'react'
import { MailingAddress } from 'shopify-storefront-api-typings'
import AddressForm from './addressForm'

interface AddressCardProps {
  address: MailingAddress
  isDefaultAddress?: boolean
}

const AddressCard = ({ address, isDefaultAddress }: AddressCardProps) => {
  const [toggleForm, setToggleForm] = useState(false)
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
                <button onClick={() => console.log('make default')}>
                  Make default
                </button>
              )}
            </li>
          </ul>
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
