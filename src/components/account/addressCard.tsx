import React, { useState } from 'react'
import { MailingAddress } from 'shopify-storefront-api-typings'
import AddressForm from './addressForm'

interface Props {
  address: MailingAddress
}

const AddressCard = ({ address }: Props) => {
  const [toggleForm, setToggleForm] = useState(false)
  return (
    <div
      style={{
        backgroundColor: 'var(--lightGrey)',
        width: '50%',
        margin: 'var(--size)',
        padding: 'var(--size)',
      }}
    >
      <li>
        {!toggleForm ? (
          <>
            <ul>
              <li>Name: {address.firstName + ' ' + address.lastName}</li>
              <li>Company: {address.company || '-'}</li>
              <li>Address 1: {address.address1 || '-'}</li>
              <li>Address 2: {address.address2 || '-'}</li>
              <li>Zipcode: {address.zip || '-'}</li>
              <li>City: {address.city || '-'}</li>
              <li>Country: {address.country || '-'}</li>
              <li>Phone: {address.phone || '-'}</li>
            </ul>
            <button onClick={() => setToggleForm(true)}>Update</button>
          </>
        ) : (
          <AddressForm setToggleForm={setToggleForm} currentAddress={address} />
        )}
      </li>
    </div>
  )
}

export default AddressCard
