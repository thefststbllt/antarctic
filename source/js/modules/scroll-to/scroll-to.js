import {closeMenu} from '../mobile-menu/mobile-menu';

const navigationLinks = document.querySelectorAll('.navigation__list-link');
const baseBlocks = document.querySelectorAll('section');

export const initScrollTo = () => {
  navigationLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const rightBlock = Array.from(baseBlocks).find((block) => block.id === `${evt.target.id}-block`);
      if (!rightBlock) {
        return;
      }
      rightBlock.scrollIntoView({behavior: 'smooth'});
      closeMenu();
    });
  });
};
