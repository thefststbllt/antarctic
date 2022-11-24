import {iosVhFix} from './utils/ios-vh-fix';
import {initMobileMenu} from './modules/mobile-menu/mobile-menu';
import {initScrollTo} from './modules/scroll-to/scroll-to';
import {getPhoneMask} from './modules/phone-mask/phone-mask';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initScrollTo();
  initMobileMenu();
  getPhoneMask();
});
