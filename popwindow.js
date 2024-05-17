const clickPurchaseButton = document.querySelectorAll('[data-personal-target]')
const closepersonalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

clickPurchaseButton.forEach(button => {
  button.addEventListener('click', () => {
    const personal = document.querySelector(button.dataset.personalTarget)
    openpersonal(personal)
  })
})

overlay.addEventListener('click', () => {
  const personals = document.querySelectorAll('.personal.active')
  personals.forEach(personal => {
    closepersonal(personal)
  })
})

closepersonalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const personal = button.closest('.personal')
    closepersonal(personal)
  })
})

function openpersonal(personal) {
  if (personal == null) return
  personal.classList.add('active')
  overlay.classList.add('active')
}

function closepersonal(personal) {
  if (personal == null) return
  personal.classList.remove('active')
  overlay.classList.remove('active')
}