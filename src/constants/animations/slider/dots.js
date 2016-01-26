/* eslint-disable */

export const active = {
  dur: 0.4,
  vars: {
    transformOrigin: 'center center',
    fillOpacity: 1,
    strokeWidth: 0,
    ease: Expo.easeInOuti,
    attr: {
      r: 6
    }

  }
};

export const inActive = {
  dur: 0.4,
  vars: {
    transformOrigin: 'center center',
    strokeWidth: 1,
    fillOpacity: 0,
    ease: Expo.easeInOut,
    attr: {
      r: 4
    }
  }
};