export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)

  return value ? JSON.parse(value) : []
}
