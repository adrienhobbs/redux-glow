const sm = 34 * 16;
const md = 48 * 16;
const lg = 62 * 16;
const xl = 75 * 16;

const getBreakpoint = (val = window.innerWidth) => {
  let breakPoint = '';
  if (val >= 320 || val < 320) {
    breakPoint = 'xsmall';
  }
  if (val > sm) {
    breakPoint = 'small';
  }
  if (val >= md) {
    breakPoint = 'medium';
  }
  if (val > lg) {
    breakPoint = 'large';
  }
  if (val >= xl) {
    breakPoint = 'x-large';
  }
  return breakPoint;
};

export default getBreakpoint;
