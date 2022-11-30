import {iosVhFix} from './utils/ios-vh-fix';
import {initMobileMenu} from './modules/mobile-menu/mobile-menu';
import {initScrollTo} from './modules/scroll-to/scroll-to';
import {getPhoneMask} from './modules/phone-mask/phone-mask';
import {handleMobileCruises} from './modules/cruises-fix/cruises-fix.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initScrollTo();
  initMobileMenu();
  getPhoneMask();
  handleMobileCruises();
});
