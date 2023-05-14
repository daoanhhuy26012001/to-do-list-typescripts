import { setDefaultForm } from '../views/setDefaultForm'
import { showGroceryContainer } from '../views/showList'
import { addToList } from '../views/todoItemView'
import { displayMessage } from '../views/displayMessageNotification'
import {
  MESSAGE_NOTIFICATION,
  GROCERY_COLLECT_PRODUCTS,
} from '../config/constants'
import { addItemToLocalStorage } from '../helpers/addItemToLocalStorage'

export const handleCreateNewItem = () => {
  const groceryField = document.querySelector<HTMLInputElement>('.form-input')

  // Get the input value and add it to the list and local storage
  const itemValue = groceryField?.value || ''

  const id = new Date().getTime().toString()
  const groceryItem = { id: id, value: itemValue }

  addToList(groceryItem)
  showGroceryContainer(true)

  // Save list to localStorage
  addItemToLocalStorage(GROCERY_COLLECT_PRODUCTS, groceryItem)

  displayMessage(MESSAGE_NOTIFICATION.success)

  setDefaultForm()
}
