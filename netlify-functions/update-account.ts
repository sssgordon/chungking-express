const axios = require('axios')
import {
  preparePayload,
  shopifyConfig,
  SHOPIFY_STORE,
  CUSTOMER_QUERY,
} from './requestConfig'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

exports.handler = async (event: any) => {
  if (event.httpMethod !== 'POST' || !event.body) {
    return {
      statusCode: 400,
      headers,
      body: '',
    }
  }

  let data

  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.error('JSON parsing error:', error)

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Bad request body',
      }),
    }
  }
  const payload = preparePayload(CUSTOMER_QUERY, {
    customerAccessToken: data,
  })

  try {
    let customer = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payload),
    })

    console.log(customer.data)
    customer = customer.data.data.customer

    let response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token: data,
        customer,
      }),
    }
    return response
  } catch (err) {
    let response = {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: err.message,
      }),
    }
    return response
  }
}
