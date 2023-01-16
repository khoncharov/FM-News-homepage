import './style.scss';

const openMenuBtn = document.querySelector('#btn-menu-open') as HTMLButtonElement;
const closeMenuBtn = document.querySelector('#btn-menu-close') as HTMLButtonElement;

const backdrop = document.querySelector('.backdrop') as HTMLElement;
const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;

const toggleMobileMenu = () => {
  backdrop.classList.toggle('backdrop_hidden');
  mobileMenu.classList.toggle('mobile-menu_hidden');
};

openMenuBtn.addEventListener('click', toggleMobileMenu);

closeMenuBtn.addEventListener('click', toggleMobileMenu);

backdrop.addEventListener('click', toggleMobileMenu);
