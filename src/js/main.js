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
    menuItem.firstElementChild.addEventListener('click', () => {
      // the element has no submenus
      if (menuItem.children.length === 1) {
        return
      }
      // bg-header-selected
      const subMenu = menuItem.querySelector('.jsMenuContainer')
      // we get the second parent (prev menu Cont)
      const prevMenu = menuItem.parentElement
      if (subMenu.classList.contains('h-0')) {
        const openedMenu = prevMenu.querySelector('.jsMenuContainer:not(.h-0)')
        if (openedMenu) {
          openedMenu.classList.add('h-0')
          openedMenu.removeAttribute('style')
          if (openedMenu.parentElement.classList.contains('bg-header')) {
            openedMenu.parentElement.classList.remove('bg-header')
          } else {
            openedMenu.parentElement.classList.remove('bg-header-selected')
          }
        }
        if (prevMenu.parentElement.classList.contains('bg-header')) {
          menuItem.classList.add('bg-header-selected')
        } else {
          menuItem.classList.add('bg-header')
        }
        // subMenu.scrollHeight stores the height of element in pixels, regardless height: 0
        subMenu.setAttribute('style', `height: ${subMenu.scrollHeight}px`)
        if (prevMenu && prevMenu.classList.contains('jsMenuContainer')) {
          prevMenu.setAttribute('style', `height: ${subMenu.scrollHeight + prevMenu.scrollHeight}`)
        }
        subMenu.classList.remove('h-0')
      } else {
        if (prevMenu.parentElement.classList.contains('bg-header')) {
          menuItem.classList.remove('bg-header-selected')
        } else {
          menuItem.classList.remove('bg-header')
        }
        subMenu.classList.add('h-0')
        subMenu.removeAttribute('style')
      }
    })
  })
}

window.addEventListener('DOMContentLoaded', () => {
  handleMenu()
  handleMobileMenus()
})
