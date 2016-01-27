const getBreakpoint = (val = window.innerWidth) => {
  let breakPoint = '';
  if (val >= 320 || val < 320) {
    breakPoint = 'xsmall';
  }
  if (val > 768) {
    breakPoint = 'small';
  }
  if (val >= 992) {
    breakPoint = 'medium';
  }
  if (val > 1200) {
    breakPoint = 'large';
  }
  return breakPoint;
};

export default getBreakpoint;
