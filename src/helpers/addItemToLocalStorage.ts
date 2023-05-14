import { getLocalStorage } from '../helpers/getItemLocalStorage'

export const addItemToLocalStorage = <T>(key: string, item: T) => {
  const listItem = getLocalStorage(key)

  listItem.push(item)

  localStorage.setItem(key, JSON.stringify(listItem))
}
