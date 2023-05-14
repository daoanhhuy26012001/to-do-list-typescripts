type groceryItem = {
  id: string
  value: string
}
export const addToList = (groceryItem: groceryItem) => {
  const groceryList = document.querySelector<HTMLUListElement>(
    '.grocery-container .grocery-list'
  )
  const groceryItemList = `<li class="grocery-item" data-edit=${groceryItem.id}>
    <p>${groceryItem.value}</p>
    <div class="btn-container">

      <!-- EDIT BUTTON -->
      <button class="btn btn-edit" data-edit>
        <i class="fa-solid fa-pen-to-square"></i>
      </button>

      <!-- DELETE BUTTON -->
      <button class="btn btn-delete">
        <i class="fa-sharp fa-solid fa-trash"></i>
      </button>
    </div>
  </li>`

  const tempGroceryList = groceryList
  
  if (tempGroceryList !== null) {
    tempGroceryList.innerHTML += groceryItemList
  }
}
