import { getLocalStorage } from '../helpers/getItemLocalStorage'
import { deleteItemFromLocalStorage } from '../helpers/removeItemLocalStorage'
import {
  GROCERY_COLLECT_PRODUCTS,
  MESSAGE_NOTIFICATION,
} from '../config/constants'
import { showGroceryContainer } from '../views/showList'
import { displayMessage } from '../views/displayMessageNotification'

export const listenerUpdateList = (event: Event) => {
  event.preventDefault()

  const savedItemsList = getLocalStorage(GROCERY_COLLECT_PRODUCTS)

  // Get the current button that was clicked
  const currentBtn = (event.target as Element)?.parentElement

  // Get the parent element of the button, which is the item element
  const currentItem =
    (currentBtn?.closest('.grocery-item') as HTMLLIElement | null) ?? null

  if (currentBtn?.classList.contains('btn-delete')) {
    const id = currentItem?.dataset.edit || ''
    const groceryList = document.querySelector<HTMLUListElement>(
      '.grocery-container .grocery-list'
    )

    deleteItemFromLocalStorage(GROCERY_COLLECT_PRODUCTS, id)

    currentItem?.remove()

    if (groceryList?.children.length == 0) {
      showGroceryContainer(false)
    }

    displayMessage(MESSAGE_NOTIFICATION.remove)

    return
  }

  // If the clicked button has a class of 'btn-edit'
  if (currentBtn?.classList.contains('btn-edit')) {
    const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')
    const groceryField =
      (document.querySelector('.form-input') as HTMLInputElement) || null
    const submitBtn =
      (document.querySelector('.wrapper .btn-submit') as HTMLButtonElement) ||
      null
    const groceryItemId = currentItem?.getAttribute('data-edit') || ''

    type item = {
      id: string
      value: string
    }

    const groceryItem = savedItemsList.find(
      (item: item) => item.id === groceryItemId
    )

    groceryField.value = groceryItem.value

    submitBtn.innerHTML = 'edit'

    groceryForm?.setAttribute('data-edit', groceryItemId)
  }
}
