import { LocalStorage, LocalStorageKeys } from '../../utils/LocalStorage'

export function useSetCustomer() {
  async function setCustomer(
    res: {
      token: string
      customer: {
        firstName: string
        orders?: object
      }
    },
    email?: string,
  ) {
    const userDetails = {
      firstName: res.customer.firstName,
      orders: res.customer.orders,
      email: email,
      token: res.token,
    }
    LocalStorage.set(LocalStorageKeys.USER, JSON.stringify(userDetails))
  }

  return setCustomer
}
