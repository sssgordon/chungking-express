import { APIGatewayEvent } from 'aws-lambda'
import axios from 'axios'
import { MailingAddress } from 'shopify-storefront-api-typings'

import {
  statusReturn,
  preparePayload,
  shopifyConfig,
  SHOPIFY_STORE,
  CUSTOMER_ADDRESS_UPDATE,
} from './requestConfig'

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  if (event.httpMethod !== 'POST' || !event.body) return statusReturn(400, '')

  let data: {
    token: string
    id?: string
    address?: MailingAddress
    addressId?: string
  }

  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.error('JSON parsing error:', error)
    return statusReturn(400, { error: 'Bad request body' })
  }

  const payload = preparePayload(CUSTOMER_ADDRESS_UPDATE, {
    customerAccessToken: data.token,
    id: data.id,
    address: data.address,
    addressId: data.addressId,
  })

  try {
    let customer = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payload),
    })
    customer = customer.data.data.customer

    return statusReturn(200, {
      token: data.token,
      customer,
    })
  } catch (err) {
    console.error(err)
    return statusReturn(500, { error: err.message })
  }
}
