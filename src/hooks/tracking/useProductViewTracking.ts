import { decode } from 'shopify-gid'

export const useProductViewTracking = (
  StoreFrontID: string,
  title: string,
  price: number,
  location: { action: string; pathname: string },
) => {
  if (location.action) {
    if (typeof window !== 'undefined' && window['dataLayer']) {
      window['dataLayer'].push({
        event: 'productDetailView',
        ecommerce: {
          currency: 'EUR',
          detail: {
            products: [
              {
                id: decode(StoreFrontID).id,
                slug: location.pathname,
                name: title,
                variant: decode(StoreFrontID),
                price,
              },
            ],
          },
        },
      })
    }
  } else {
    setTimeout(() => {
      if (typeof window !== 'undefined' && window['dataLayer']) {
        window['dataLayer'].push({
          event: 'productDetailView',
          ecommerce: {
            currency: 'EUR',
            detail: {
              products: [
                {
                  id: decode(StoreFrontID).id,
                  slug: location.pathname,
                  name: title,
                  variant: decode(StoreFrontID),
                  price,
                },
              ],
            },
          },
        })
      }
    }, [process.env.GTM_DELAY])
  }
}
