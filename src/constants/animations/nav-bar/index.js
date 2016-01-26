export function ToggleVis (isVisible) {
  return {
    TL: new TimelineLite(),
    ease: Expo.easeInOut,
    dur: 0.6,
    transformPerspective: 300,
    scale: (isVisible) ? 1 : 0
  };
}
