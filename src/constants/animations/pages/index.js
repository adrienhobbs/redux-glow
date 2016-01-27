export const EmployeeCardAnimation = {
  showImageRollover: {
    dur: 0.1,
    params: {autoAlpha: 1}
  },
  hideImageRollover: {
    dur: 0.1,
    params: {autoAlpha: 0},
    startTime: 'start+=0.1'
  },
  showInfo: {
    params: {scaleY: 1, transformOrigin: 'bottom center', ease: Expo.easeInOut},
    dur: 0.3,
    startTime: '-=0.2'
  },
  hideInfo: {
    params: {scaleY: 0, transformOrigin: 'bottom center', ease: Expo.easeInOut},
    dur: 0.3,
    startTime: 'start'
  },
  hideWrap: {
    params:{y: 80, ease: Expo.easeInOut},
    dur: 0.3,
    startTime: 'start+=0.2'
  },
  showWrap: {
    paramsFrom: {y: 80},
    paramsTo: {y: 0, ease: Expo.easeInOut},
    dur: 0.3,
    startTime: '-=0.3'
  }
};
