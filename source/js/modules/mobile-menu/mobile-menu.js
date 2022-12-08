import {MAX_DEVICE_WIDTH} from '../../utils/platforms';

const siteNavigation = document.querySelector('.navigation');
const burgerButton = siteNavigation.querySelector('.navigation__menu-button');
const buttonLine = burgerButton.querySelector('.navigation__button-line');
const menuOverlay = siteNavigation.querySelector('.navigation__mobile-layout');

const closeMenu = () => {
  siteNavigation.classList.toggle('navigation--menu-opened');
  siteNavigation.classList.toggle('navigation--menu-closed');
  document.body.style.overflow = 'visible';
};

const toggleMenu = (evt) => {
  if (evt.target === burgerButton || evt.target === buttonLine || evt.target === menuOverlay) {
    closeMenu();
    if (siteNavigation.classList.value.includes('navigation--menu-opened')) {
      document.body.style.overflow = 'hidden';
    }
  } else if (!evt.target.classList.value.includes('navigation') && siteNavigation.classList.value.includes('navigation--menu-opened')) {
    closeMenu();
  }
};

const initMobileMenu = () => {
  if (window.matchMedia(`(max-width: ${MAX_DEVICE_WIDTH.mobile}px)`).matches) {
    siteNavigation.classList.add('navigation--menu-closed');
    document.addEventListener('click', (evt) => toggleMenu(evt));
  }
};

export {closeMenu, initMobileMenu};
