import { LocalStorage, LocalStorageKeys } from '../../utils/LocalStorage'

export function useRemoveCustomer() {
  async function removeCustomer() {
    LocalStorage.remove(LocalStorageKeys.USER)
  }
  return removeCustomer
}
