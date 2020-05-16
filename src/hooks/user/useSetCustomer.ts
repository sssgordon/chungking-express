import { LocalStorage, LocalStorageKeys } from '../../utils/LocalStorage'
import {
  MailingAddress,
  MailingAddressConnection,
  OrderConnection,
} from 'shopify-storefront-api-typings'
export function useSetCustomer() {
  async function setCustomer(
    res: {
      token: string
      customer: {
        firstName: string
        lastName: string
        orders?: OrderConnection
        defaultAddress?: MailingAddress
        addresses?: MailingAddressConnection
      }
    },
    email?: string,
  ) {
    const userDetails = {
      firstName: res.customer.firstName,
      lastName: res.customer.lastName,
      orders: res.customer.orders,
      email: email,
      token: res.token,
      defaultAddress: res.customer.defaultAddress,
      addresses: res.customer.addresses,
    }
    LocalStorage.set(LocalStorageKeys.USER, JSON.stringify(userDetails))
  }

  return setCustomer
}
