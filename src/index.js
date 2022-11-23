const hamburgerBtn = document.getElementById('hamburger')
const navList = document.getElementById('navlist')

function toggleButton() {
  navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleButton)