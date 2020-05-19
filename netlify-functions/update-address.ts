import { APIGatewayEvent } from 'aws-lambda'
import axios from 'axios'
import { MailingAddressInput } from 'shopify-storefront-api-typings'

import {
  statusReturn,
  preparePayload,
  shopifyConfig,
  SHOPIFY_STORE,
  CUSTOMER_ADDRESS_UPDATE,
  CUSTOMER_DEFAULT_ADDRESS_UPDATE,
  CUSTOMER_ADDRESS_DELETE,
  CUSTOMER_ADDRESS_CREATE,
} from './requestConfig'

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  if (event.httpMethod !== 'POST' || !event.body)
    return statusReturn(400, 'No Body')

  let data: {
    action: string
    customerAccessToken: string
    address?: MailingAddressInput
    id?: string
  }

  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.error('JSON parsing error:', error)
    return statusReturn(400, { error: 'Bad request body' })
  }
  console.log('PAYLOAD_DATA: ', data.action, data)

  const payload = () => {
    switch (data.action) {
      case 'CREATE':
        return preparePayload(CUSTOMER_ADDRESS_CREATE, {
          customerAccessToken: data.customerAccessToken,
          address: data.address,
        })
      case 'DEFAULT_UPDATE':
        return preparePayload(CUSTOMER_DEFAULT_ADDRESS_UPDATE, {
          customerAccessToken: data.customerAccessToken,
          addressId: data.id,
        })
      case 'UPDATE':
        return preparePayload(CUSTOMER_ADDRESS_UPDATE, {
          customerAccessToken: data.customerAccessToken,
          id: data.id,
          address: data.address,
        })
      case 'DELETE':
        return preparePayload(CUSTOMER_ADDRESS_DELETE, {
          customerAccessToken: data.customerAccessToken,
          id: data.id,
        })
      default:
        throw new Error('No action passed')
    }
  }

  console.log(`PAYLOAD VAR: `, payload())

  try {
    let response = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payload()),
    })
    console.log(`RESPONSE.DATA:`, data.action, response.data.errors)
    switch (data.action) {
      case 'CREATE':
        if (response.data.errors) {
          throw response.data.errors
        }
        const { customerAddressCreate } = response.data.data
        if (customerAddressCreate.customerUserErrors.length > 0)
          throw customerAddressCreate.customerUserErrors[0]
        if (customerAddressCreate.customer)
          return statusReturn(200, customerAddressCreate.customer)
      case 'DEFAULT_UPDATE':
        const { customerDefaultAddressUpdate } = response.data.data
        if (customerDefaultAddressUpdate.customerUserErrors.length > 0)
          throw customerDefaultAddressUpdate.customerUserErrors[0]
        if (customerDefaultAddressUpdate.customer)
          return statusReturn(200, customerDefaultAddressUpdate.customer)
      case 'UPDATE':
        const { customerAddressUpdate } = response.data.data
        if (customerAddressUpdate.customerUserErrors.length > 0)
          throw customerAddressUpdate.customerUserErrors[0]
        if (customerAddressUpdate)
          return statusReturn(200, customerAddressUpdate)
      case 'DELETE':
        const { customerAddressDelete } = response.data.data
        if (customerAddressDelete.customerUserErrors.length > 0)
          throw customerAddressDelete.customerUserErrors[0]
        if (customerAddressDelete.deletedCustomerAddressId)
          return statusReturn(
            200,
            customerAddressDelete.deletedCustomerAddressId,
          )
      default:
        throw new Error('No action passed')
    }
  } catch (err) {
    console.error(err)
    return statusReturn(500, { error: err.message })
  }
}
