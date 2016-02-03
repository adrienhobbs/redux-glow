export function ToggleVis (navState) {
  return {
    TL: new TimelineLite(),
    ease: Expo.easeInOut,
    dur: (navState.shouldAnimate) ? 0.6 : 0.0001,
    transformPerspective: 300,
    scale: (navState.isVisible) ? 1 : 0
  };
}
