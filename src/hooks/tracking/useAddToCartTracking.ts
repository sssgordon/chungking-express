import { decode } from 'shopify-gid'

export const useAddToCartTracking = (
  StoreFrontID: string,
  title: string,
  price: number,
  location: { pathname: string },
  amount: number,
) => {
  const selectedAmount = amount ? amount : 1
  if (typeof window !== 'undefined' && window['dataLayer']) {
    window['dataLayer'].push({
      event: 'addToCart',
      ecommerce: {
        currencyCode: 'EUR',
        add: {
          products: [
            {
              id: decode(StoreFrontID).id,
              slug: location.pathname,
              name: title,
              variant: decode(StoreFrontID),
              price,
              amount: selectedAmount,
              value: price * selectedAmount,
            },
          ],
        },
      },
    })
  }
}
