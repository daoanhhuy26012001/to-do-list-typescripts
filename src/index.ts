import { handleSubmitForm } from './controllers/handleSubmitForm'
import { renderList } from './controllers/renderList'

const setupForm = () => {
  const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')

  groceryForm?.addEventListener('submit', handleSubmitForm)

  renderList()
}

setupForm()
