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


window.openTab = (evt, infraName) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("infra__box__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(infraName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.slide = (reelId, dir) => {
  let reel = document.getElementById(reelId)
  let ch = reel.children.length - 1

  console.log(typeof i === 'undefined');
  if (typeof i === 'undefined') {
    console.log('init');
    var i = 0
  }
  
  if (dir === 'r' && i < ch) {i++}
  if (dir === 'l' && i > 1) {i--}
  reel.style.marginLeft = (-61 * i) + "rem";
  console.log(i < ch, dir, ch, i);
  
}