import { getLocalStorage } from '../helpers/getItemLocalStorage'

export const addItemToLocalStorage = (key: string, item: any) => {
  const listItem = getLocalStorage(key)

  listItem.push(item)

  localStorage.setItem(key, JSON.stringify(listItem))
}
