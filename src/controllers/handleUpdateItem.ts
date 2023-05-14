import { setDefaultForm } from '../views/setDefaultForm'
import { displayMessage } from '../views/displayMessageNotification'
import {
  MESSAGE_NOTIFICATION,
  GROCERY_COLLECT_PRODUCTS,
} from '../config/constants'
import { updateItemFromLocalStorage } from '../helpers/updateLocalStorage'

export const handleEditItem = () => {
  const groceryField = document.querySelector<HTMLInputElement>('.form-input')
  const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')
  const editedValue = groceryField?.value || ''
  const itemId = groceryForm?.getAttribute('data-edit') || ''
  const groceryItem = { id: itemId, value: editedValue }

  // Call updateLocalStorage to update the value in local storage
  updateItemFromLocalStorage(GROCERY_COLLECT_PRODUCTS, groceryItem)
  displayMessage(MESSAGE_NOTIFICATION.edit)
  groceryForm?.removeAttribute('data-edit')
  setDefaultForm()

  // Reload the updated item
  const updatedItem = document.querySelector(`[data-edit="${itemId}"]`)

  if (updatedItem) {
    const paragraph =
      (updatedItem.querySelector('.grocery-item p') as HTMLParagraphElement) ||
      null
    paragraph.textContent = editedValue
  }
}
