import { getLocalStorage } from '../helpers/getItemLocalStorage'
import { GROCERY_COLLECT_PRODUCTS } from '../config/constants'
import { addToList } from '../views/todoItemView'
import { showGroceryContainer } from '../views/showList'

const savedItemsList = getLocalStorage(GROCERY_COLLECT_PRODUCTS)

export const renderList = () => {
  // Check if savedItemsList is an array
  if (Array.isArray(savedItemsList) && savedItemsList.length > 0) {
    showGroceryContainer(true)

    // Loop through each item in the fetchSavedItem array and add it to the list
    savedItemsList.forEach((item) => {
      addToList(item)
    })
  }
}
