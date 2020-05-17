import { APIGatewayEvent } from 'aws-lambda'
import axios from 'axios'
import { MailingAddressInput } from 'shopify-storefront-api-typings'

import {
  statusReturn,
  preparePayload,
  shopifyConfig,
  SHOPIFY_STORE,
  CUSTOMER_ADDRESS_CREATE,
} from './requestConfig'

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  if (event.httpMethod !== 'POST' || !event.body) return statusReturn(400, '')

  let data: {
    token: string
    address: MailingAddressInput
  }

  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.log('JSON parsing error:', error)
    return statusReturn(400, { error: 'Bad request body' })
  }

  const payload = preparePayload(CUSTOMER_ADDRESS_CREATE, {
    customerAccessToken: data.token,
    address: data.address,
  })

  try {
    let customerAddress = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payload),
    })
    customerAddress = customerAddress.data.data.customerAddress

    return statusReturn(200, {
      token: data.token,
      customerAddress,
    })
  } catch (err) {
    console.log(err)
    return statusReturn(500, { error: err.message })
  }

  //   try {
  //     let address = await axios({
  //       url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
  //       method: 'POST',
  //       headers: shopifyConfig,
  //       data: JSON.stringify(payloadCreateAddress),
  //     })
  //     if (address.data.data.customerAddressCreate.userErrors.length > 0) {
  //       throw address.data.data.customerAddressCreate.userErrors
  //     } else {
  //       address = address.data.customerAddressCreate
  //     }

  //     let response = {
  //       statusCode: 200,
  //       headers,
  //       body: JSON.stringify({
  //         address,
  //       }),
  //     }
  //     return response
  //   } catch (err) {
  //     console.log(err)
  //     let response = {
  //       statusCode: 500,
  //       headers,
  //       body: JSON.stringify({
  //         error: err.message,
  //       }),
  //     }
  //     return response
  //   }
  // }
}
