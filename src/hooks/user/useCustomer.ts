import { useRemoveCustomer } from './useRemoveCustomer'
import { LocalStorage } from '../../utils'

export function useCustomer() {
  const user = LocalStorage.getInitialUser()
  const removeCustomer = useRemoveCustomer()

  if (user == null) {
    return null
  }

  if (user) {
    const currentDate = new Date().getTime()
    const expireDate = new Date(user.token.expiresAt).getTime()

    if (expireDate <= currentDate) {
      removeCustomer()
      return null
    } else {
      return user
    }
  }
}
