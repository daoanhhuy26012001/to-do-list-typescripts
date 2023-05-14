interface Notification {
  message: string
  className: string
}

export const displayMessage = (notification: Notification) => {
  // Select the element to display the error message
  const errorMessage = document.querySelector('.message')

  if (errorMessage) {
    errorMessage.textContent = notification.message
  }

  // Add the appropriate CSS class to the error message element based on the action
  errorMessage?.classList.add(`${notification.className}`)

  // After 1 second, remove the text content and CSS class from the error message element
  setTimeout(() => {
    if (errorMessage) {
      errorMessage.textContent = ''
    }
    
    errorMessage?.classList.remove(`${notification.className}`)
  }, 1000)
}
