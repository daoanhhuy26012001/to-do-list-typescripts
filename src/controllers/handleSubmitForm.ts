import { MESSAGE_NOTIFICATION } from '../config/constants'
import { handleCreateNewItem } from '../controllers/handleCreateItem'
import { displayMessage } from '../views/displayMessageNotification'

export const handleSubmitForm = (event: Event) => {
  event.preventDefault()

  // const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')
  const groceryField = document.querySelector<HTMLInputElement>('.form-input')
  const itemValue = groceryField?.value

  // If there is no value in the input field
  if (!itemValue) {
    displayMessage(MESSAGE_NOTIFICATION.error)

    return
  }

  // if (groceryForm?.hasAttribute('data-edit')) {
  //   // handleEditItem()

  //   return
  // }

  handleCreateNewItem()
}
