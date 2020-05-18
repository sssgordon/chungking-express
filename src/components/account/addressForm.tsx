import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import {
  MailingAddress,
  MailingAddressInput,
} from 'shopify-storefront-api-typings'
import { useCustomer, useCreateAddress } from '../../hooks'

interface AddressFormProps {
  formType: string
  currentAddress?: MailingAddress
  setToggleForm?: React.Dispatch<React.SetStateAction<boolean>>
}

const AddressForm = ({
  formType,
  currentAddress,
  setToggleForm,
}: AddressFormProps) => {
  const getInitialValues = (address: MailingAddressInput) => ({
    address1: address.address1 || '',
    address2: address.address2 || '',
    city: address.city || '',
    company: address.company || '',
    country: address.country || '',
    firstName: address.firstName || '',
    lastName: address.lastName || '',
    phone: address.phone || '',
    province: address.province || '',
    zip: address.zip || '',
  })
  const user = useCustomer()
  const [createAddress, { response, loading, error }] = useCreateAddress()

  return (
    <Formik
      initialValues={getInitialValues(currentAddress || {})}
      onSubmit={values => {
        createAddress(user.token, values)
      }}
    >
      <Form>
        <b>{formType} address</b>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <label>First name*: </label>
            <Field required name='firstName' />
          </li>
          <li>
            <label>Last name*: </label>
            <Field required name='lastName' />
          </li>
          <li>
            <label>Company: </label>
            <Field name='company' />
          </li>
          <li>
            <label>Address 1*: </label>
            <Field required name='address1' />
          </li>
          <li>
            <label>Address 2: </label>
            <Field name='address2' />
          </li>
          <li>
            <label>Zip code*: </label>
            <Field required name='zip' />
          </li>
          <li>
            <label>City*: </label>
            <Field required name='city' />
          </li>
          <li>
            <label>Country*: </label>
            <Field required name='country' />
          </li>
          <li>
            <label>Phone: </label>
            <Field name='phone' />
          </li>
          {setToggleForm && (
            <button type='button' onClick={() => setToggleForm(false)}>
              Cancel
            </button>
          )}
          <button disabled={loading} type='submit'>
            {loading ? '...Loading' : 'Submit'}
          </button>
        </ul>
        {error && <span>{error}</span>}
      </Form>
    </Formik>
  )
}

export default AddressForm
