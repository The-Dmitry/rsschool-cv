import projects from "./projects.js";

const projectList = document.querySelector('.projects-list')
const burgerMenu = document.querySelector('.header')
const burgerButton = document.querySelector('.burger')

function createProjectList(array){

  for(let i = 0; i < array.length; i++) {
    const item = document.createElement('li')
    item.className = 'projects-list__item'

    const link = document.createElement('a')
    link.className = 'project-link'
    link.href = array[i].link
    link.target = '_blank'

    const image = document.createElement('img')
    image.className = 'project-image'
    image.src = array[i].src
    image.alt = array[i].name.toLowerCase()

    const title = document.createElement('h3')
    title.className = 'project-title'
    title.textContent = array[i].name

    link.append(image, title)
    item.append(link)

    projectList.append(item)
  }
}

burgerButton.onclick = manageBurgerMenu

function manageBurgerMenu(){
  burgerMenu.classList.toggle('burger-open')
  burgerButton.classList.toggle('active')
  document.body.classList.toggle('blocked')
}

function closeBurger(e){
  if(!e.target.matches('nav-list__item')){manageBurgerMenu()}
  document.body.classList.remove('blocked')

}

function closeAll(e) {
  if(e.target.innerWidth > 800) {
    burgerMenu.classList.remove('burger-open')
    burgerButton.classList.remove('active')
    document.body.classList.remove('blocked')
  }
}

burgerMenu.onclick = closeBurger
window.addEventListener('resize', closeAll)
createProjectList(projects)