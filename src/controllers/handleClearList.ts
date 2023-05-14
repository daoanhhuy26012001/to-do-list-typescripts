import { clearAllDataFromLocalStorage } from '../helpers/clearItemLocalStorage'
import {
  GROCERY_COLLECT_PRODUCTS,
  MESSAGE_NOTIFICATION,
} from '../config/constants'
import { showGroceryContainer } from '../views/showList'
import { displayMessage } from '../views/displayMessageNotification'

export const handleClearItems = () => {
  const groceryList =
    (document.querySelector(
      '.grocery-container .grocery-list'
    ) as HTMLUListElement) || null
  groceryList.innerHTML = ''

  showGroceryContainer(false)

  clearAllDataFromLocalStorage(GROCERY_COLLECT_PRODUCTS)

  displayMessage(MESSAGE_NOTIFICATION.clear)
}
