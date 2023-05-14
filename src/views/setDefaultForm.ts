export const setDefaultForm = () => {
  const submitBtn =
    (document.querySelector('.wrapper .btn-submit') as HTMLButtonElement) ||
    null
  const groceryForm = document.getElementById(
    'grocery-form'
  ) as HTMLFormElement | null

  submitBtn.textContent = 'Submit'

  groceryForm?.reset()
}
