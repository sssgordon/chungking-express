import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { MailingAddress } from 'shopify-storefront-api-typings'

interface InputFieldProps {
  value: string
  label: string
  name: string
  required?: boolean
}

interface AddressFormProps {
  currentAddress?: MailingAddress
  setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}

const AddressForm = ({ currentAddress, setToggleForm }: AddressFormProps) => {
  // console.log(currentAddress)
  return (
    <Formik
      initialValues={{ ...currentAddress }}
      onSubmit={values => {
        // same shape as initial values
        console.log(values)
      }}
    >
      <Form>
        <ul>
          <li>
            <label>First name: </label>
            <Field required name='firstName' />
          </li>
          <li>
            <label>Last name: </label>
            <Field name='lastName' />
          </li>
          <li>
            <label>Company: </label>
            <Field name='company' />
          </li>
          <li>
            <label>Address 1: </label>
            <Field name='address1' />
          </li>
          <li>
            <label>Address 2: </label>
            <Field name='address2' />
          </li>
          <li>
            <label>Zip code: </label>
            <Field name='zip' />
          </li>
          <li>
            <label>City: </label>
            <Field name='city' />
          </li>
          <li>
            <label>Phone: </label>
            <Field name='phone' />
          </li>
          <button type='button' onClick={() => setToggleForm(false)}>
            Cancel
          </button>
          <button type='submit'>Submit</button>
        </ul>
      </Form>
    </Formik>
  )
}

export default AddressForm
