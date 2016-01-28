export const EmployeeCardAnimation = {
  showImageRollover: {
    dur: 0.1,
    params: {autoAlpha: 1},
    startTime: 'start'
  },

  hideImageRollover: {
    dur: 0.1,
    params: {autoAlpha: 0},
    startTime: 'start+=0.05'
  },

  showInfo: {
    params: {y: 1, ease: Expo.easeInOut},
    dur: 0.3,
    startTime: 'start'
  },

  hideInfo: {
    params: {y: 180, ease: Expo.easeInOut},
    dur: 0.3,
    startTime: 'start'
  }

};
