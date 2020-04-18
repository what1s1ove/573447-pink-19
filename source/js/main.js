const header = document.querySelector('.header')
const toggleBtn = document.querySelector('.header__toggle-button')

header.classList.remove('header--nojs')

toggleBtn.addEventListener('click', () =>
  header.classList.contains('header--active')
    ? header.classList.remove('header--active')
    : header.classList.add('header--active')
)
