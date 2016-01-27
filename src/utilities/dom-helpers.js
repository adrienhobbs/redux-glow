import scroll from 'scroll';

function scrollReset () {
  scroll.top(document.body, 0, {duration: 1});
};

function getOffsetSum (elem) {
  var top = 0, left = 0;

  while (elem) {
    top = top + parseInt(elem.offsetTop, 10);
    left = left + parseInt(elem.offsetLeft, 10);
    elem = elem.offsetParent;
  }

  return {top: top, left: left};
}
function getOffsetRect (elem) {
  // (1)
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docElem = document.documentElement;

  // (2)
  const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

  // (3)
  const clientTop = docElem.clientTop || body.clientTop || 0;
  const clientLeft = docElem.clientLeft || body.clientLeft || 0;

  // (4)
  const top  = box.top +  scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
};

function getOffset (elem) {
  if (elem.getBoundingClientRect) {
    return getOffsetRect(elem);
  } else { // old browser
    return getOffsetSum(elem);
  }
}

const DomHelpers = {
  getOffset:      getOffset,
  getOffsetRect:  getOffsetRect,
  getOffsetSum:   getOffsetSum,
  resetScroll:    scrollReset
};
export default DomHelpers;
