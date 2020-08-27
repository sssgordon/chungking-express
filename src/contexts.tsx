import React, { useEffect, useState } from 'react'
import ShopifyBuy from 'shopify-buy'
import { LocalStorage, LocalStorageKeys } from './utils'

interface InitialLayout {
  cartIsOpen: boolean
  menuIsOpen: boolean
}

const InitialLayoutState = {
  cartIsOpen: false,
  menuIsOpen: false,
}

interface ContextShape {
  client: ShopifyBuy.Client | null
  cart: ShopifyBuy.Cart | null
  setCart: React.Dispatch<React.SetStateAction<ShopifyBuy.Cart | null>>
  layout: InitialLayout
  setLayout: React.Dispatch<React.SetStateAction<any | null>>
}

export const StoreContext = React.createContext<ContextShape>({
  client: null,
  cart: null,
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
  layout: InitialLayoutState,
  setLayout: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
})

export function StoreContextProvider({ children }) {
  const initialCart = LocalStorage.getInitialCart()
  const [cart, setCart] = useState<ShopifyBuy.Cart | null>(initialCart)
  const [layout, setLayout] = useState<any | null>(InitialLayoutState)

  const client = ShopifyBuy.buildClient({
    storefrontAccessToken: process.env.SHOPIFY_ACCES_TOKEN,
    domain: `${process.env.SHOPIFY_STORE}.myshopify.com`,
  })

  useEffect(() => {
    async function getNewCart() {
      const newCart = await client.checkout.create()
      setCart(newCart)
    }

    async function refreshExistingCart(cartId: string) {
      try {
        const refreshedCart = await client.checkout.fetch(cartId)

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const cartHasBeenPurchased =
          refreshedCart && refreshedCart.completedAt != null
        if (cartHasBeenPurchased || cartHasBeenPurchased === null) {
          getNewCart()
        } else {
          setCart(refreshedCart)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (cart == null) {
      getNewCart()
    } else {
      refreshExistingCart(String(cart.id))
    }
  }, [])

  useEffect(() => {
    LocalStorage.set(LocalStorageKeys.CART, JSON.stringify(cart))
  }, [cart])

  return (
    <StoreContext.Provider
      value={{
        client,
        cart,
        setCart,
        layout,
        setLayout,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
