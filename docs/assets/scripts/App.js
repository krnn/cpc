import '../styles/styles.css'
// import HamburgerMenu from './modules/HamburgerMenu'
//
// let burger = new HamburgerMenu();

window.toggleMenu = () => {
  document.getElementById('main-menu').classList.toggle("header__menu--visible");
  document.getElementById('ham-slice').classList.toggle("ham-slice--x");
}

// window.toggleMenu = toggleMenu

if (module.hot) {
  module.hot.accept()
}
