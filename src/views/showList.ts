export const showGroceryContainer = (isVisible: boolean) => {
  const groceryContainer = document.querySelector('.grocery-container')

  if (isVisible) {
    groceryContainer?.classList.add('show-container')
  } else {
    groceryContainer?.classList.remove('show-container')
  }
}
