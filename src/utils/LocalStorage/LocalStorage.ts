import ShopifyBuy from 'shopify-buy'
import { LocalStorageKeys } from './keys'
import { isCart } from '../../utils'

function set(key: string, value: string) {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    window.localStorage.setItem(key, value)
  }
}

function remove(key: string) {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    window.localStorage.removeItem(key)
  }
}

function get(key: string) {
  const isBrowser = typeof window !== 'undefined'
  if (!isBrowser) {
    return null
  }

  try {
    const item = window.localStorage.getItem(key)
    return item
  } catch {
    return null
  }
}

function getInitialCart(): ShopifyBuy.Cart | null {
  const existingCartString = get(LocalStorageKeys.CART)
  if (existingCartString == null) {
    return null
  }

  try {
    const existingCart = JSON.parse(existingCartString)
    if (!isCart(existingCart)) {
      return null
    }

    return existingCart as ShopifyBuy.Cart
  } catch {
    return null
  }
}

function getInitialUser() {
  const existingUser = get(LocalStorageKeys.USER)
  if (existingUser == null) {
    return null
  }

  try {
    const existingUserData = JSON.parse(existingUser)
    if (existingUser) {
      return existingUserData
    }
    return existingUserData
  } catch {
    return null
  }
}

export const LocalStorage = {
  get,
  remove,
  set,
  getInitialCart,
  getInitialUser,
}
