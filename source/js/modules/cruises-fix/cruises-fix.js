import {MAX_DEVICE_WIDTH} from '../../utils/platforms.js';

const cruiseButtons = document.querySelectorAll('.cruises-item__order-button');
const isDeviceMatches = window.matchMedia(`(max-width: ${MAX_DEVICE_WIDTH.tablet}px)`).matches;

export const handleMobileCruises = () => {
  if (isDeviceMatches) {
    cruiseButtons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        if (evt.target !== 'cruises-item__order-button') {
          evt.preventDefault();
        }
      });
    });
  }
};
