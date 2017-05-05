export function ToggleVis (navState) {
  return {
    TL: new TimelineLite(),
    ease: Expo.easeInOut,
    dur: (navState.shouldAnimate) ? 0.6 : 0.0001,
    transformPerspective: 2000,
    scale: (navState.isVisible) ? 1 : 0,
    y: (navState.isVisible) ? 0 : -200
  };
}
