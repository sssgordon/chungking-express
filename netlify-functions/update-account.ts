const axios = require('axios')

const { SHOPIFY_STORE, SHOPIFY_ACCES_TOKEN } = process.env

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}
const shopifyConfig = {
  'Content-Type': 'application/json',
  'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCES_TOKEN,
}

const CUSTOMER_ADDRESS = `
  firstName
  lastName
  address1
  address2
  company
  phone
  city
  country
  province
  zip
`

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
    console.log('JSON parsing error:', error)

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Bad request body',
      }),
    }
  }

  const payloadCustomer = {
    query: `query customerQuery($customerAccessToken: String!){
      customer(customerAccessToken: $customerAccessToken) {
        firstName
        lastName
        acceptsMarketing
        phone
        email
        defaultAddress {
          ${CUSTOMER_ADDRESS}
        }
        orders(first:100){
          edges{
            node{
              orderNumber
              totalPrice
              processedAt
              statusUrl
              successfulFulfillments(first: 100){
                trackingInfo(first: 100){
                  number
                  url
                }
              }
              lineItems(first:100){
                edges{
                  node{
                    quantity
                    title
                    variant{
                      title
                      price
                      image{
                        originalSrc
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    variables: {
      customerAccessToken: data.accessToken,
    },
  }

  try {
    let customer = await axios({
      url: `https://${SHOPIFY_STORE}.myshopify.com/api/graphql`,
      method: 'POST',
      headers: shopifyConfig,
      data: JSON.stringify(payloadCustomer),
    })
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
