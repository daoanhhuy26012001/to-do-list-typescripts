import { getLocalStorage } from '../helpers/getItemLocalStorage'

interface GroceryItem {
  id: string
  value: string
}

export const deleteItemFromLocalStorage = (key: string, id: string): void => {
  let list: GroceryItem[] = getLocalStorage(key)

  list = list.filter((item: GroceryItem) => {
    return item.id !== id
  })

  localStorage.setItem(key, JSON.stringify(list))
}
