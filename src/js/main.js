const handleMenu = () => {
  const menuCont = document.querySelector('#menu')
  const openMenuButton = document.querySelector('#openMenuButton')
  openMenuButton.addEventListener('click', () => {
    menuCont.classList.remove('w-0')
    menuCont.classList.add('w-full')
  })
  const closeMenuButton = document.querySelector('#closeMenuButton')
  closeMenuButton.addEventListener('click', () => {
    menuCont.classList.remove('w-full')
    menuCont.classList.add('w-0')
  })
}
const handleMobileMenus = () => {
  const menuItems = document.querySelectorAll('.jsMenuItem')
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      // the element has no submenus
      if (menuItem.children.length === 1) {
        return
      }
      // bg-header-selected
      menuItem.classList.add('bg-header-selected')
      const subMenu = menuItem.querySelector('.jsMenuContainer')
      if (subMenu.classList.contains('h-0')) {
        subMenu.classList.remove('h-0')
      } else {
        subMenu.classList.add('h-0')
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  handleMenu()
  handleMobileMenus()
})
