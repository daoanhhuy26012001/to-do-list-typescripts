import { handleSubmitForm } from './controllers/handleSubmitForm'
import { renderList } from './controllers/renderList'
import { listenerUpdateList } from './controllers/updateList'

const setupForm = () => {
  const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')
  const groceryList = document.querySelector<HTMLUListElement>(
    '.grocery-container .grocery-list'
  )

  groceryList?.addEventListener('click', listenerUpdateList)
  groceryForm?.addEventListener('submit', handleSubmitForm)

  renderList()
}

setupForm()
