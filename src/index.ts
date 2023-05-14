import { handleSubmitForm } from './controllers/handleSubmitForm'
import { renderList } from './controllers/renderList'
import { listenerUpdateList } from './controllers/updateList'
import { handleClearItems } from './controllers/handleClearList'

const setupForm = () => {
  const groceryForm = document.querySelector<HTMLFormElement>('#grocery-form')
  const groceryList = document.querySelector<HTMLUListElement>(
    '.grocery-container .grocery-list'
  )
  const clearBtn = document.querySelector('.btn-clear')

  groceryList?.addEventListener('click', listenerUpdateList)
  groceryForm?.addEventListener('submit', handleSubmitForm)
  clearBtn?.addEventListener('click', handleClearItems)

  renderList()
}

setupForm()
