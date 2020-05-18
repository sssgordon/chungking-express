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
  // console.log(event.body)
  if (event.httpMethod !== 'POST' || !event.body)
    return statusReturn(400, 'No Body')

  let data: {
    customerAccessToken: string
    address: MailingAddressInput
  }

  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.log('JSON parsing error:', error)
    return statusReturn(400, { error: 'Bad request body' })
  }

  const payload = preparePayload(CUSTOMER_ADDRESS_CREATE, {
    customerAccessToken: data.customerAccessToken,
    address: data.address,
  })

  // console.log(`payload: `, payload)

  try {
    let customerAddress = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payload),
    })

    const { customerAddressCreate } = customerAddress.data.data

    if (customerAddressCreate.customerUserErrors.length > 0)
      throw customerAddressCreate.customerUserErrors[0]

    return statusReturn(200, { customerAddressCreate })
  } catch (err) {
    console.error(err)
    return statusReturn(500, { error: err.message })
  }
}
