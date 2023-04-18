/* Popup window menu */

const btn = document.querySelector('#menu-button-display');

function display() {
  const menu = document.querySelector('nav');
  const iconmenu = document.querySelector('.menu-button img');
  const links = document.querySelector('nav ul');
  menu.classList.toggle('display-menu-window');
  iconmenu.classList.toggle('menu-quit-display');
  links.classList.toggle('links-display-menu');

  const link = document.querySelector('nav ul');
  link.addEventListener('click', display);
}

btn.addEventListener('click', display);