window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY >= 30) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassTargetLine = targetLine >= sectionTop

  const sectionEnd = sectionTop + sectionHeight

  const sectionEndPassTargetLine = sectionEnd <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassTargetLine && !sectionEndPassTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .card, #about .colb, #about header, #about .content, #contact .colb, #contact header, #contact .content'
)
