const burgerButton = document.querySelector('.menu')
const burgerMenu = document.querySelector('.navigation')
const darkBackground = document.querySelector('.dark_background')
const burgerLink = document.querySelectorAll('.nav-item')

burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle('navigation_opened')
    darkBackground.classList.toggle('bg_active')
    document.body.classList.toggle('lock')
})

darkBackground.addEventListener("click", () => {
    burgerMenu.classList.remove('navigation_opened')
    darkBackground.classList.remove('bg_active')
    document.body.classList.remove('lock')
})

burgerLink.forEach(elem => elem.addEventListener("click", () => {
    burgerMenu.classList.remove('navigation_opened')
    darkBackground.classList.remove('bg_active')
    document.body.classList.remove('lock')
}))



