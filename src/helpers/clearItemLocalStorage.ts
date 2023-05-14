export const clearAllDataFromLocalStorage = (key: string) => {
  // Remove the item with the given key from local storage
  localStorage.removeItem(key)
}
