import './style.scss';

const openMenuBtn = document.querySelector('#btn-menu-open') as HTMLButtonElement;
const closeMenuBtn = document.querySelector('#btn-menu-close') as HTMLButtonElement;
const menuContainer = document.querySelector('#mobile-navigation') as HTMLElement;

openMenuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('mobile-navigation_active');
});

closeMenuBtn.addEventListener('click', () => {
  menuContainer.classList.toggle('mobile-navigation_active');
});
