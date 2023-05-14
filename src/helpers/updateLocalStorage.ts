import { getLocalStorage } from '../helpers/getItemLocalStorage'

type listItem = {
  id: string
  value: string
}

export const updateItemFromLocalStorage = (key: string, item: listItem) => {
  const list = getLocalStorage(key)

  // Find the index of the item with the given id
  const index = list.findIndex((listItem: listItem) => listItem.id === item.id)

  // If the item is found, update its value and exit the loop
  if (index !== -1) {
    list[index].value = item.value
  }

  localStorage.setItem(key, JSON.stringify(list))
}
