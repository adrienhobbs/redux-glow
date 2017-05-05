import getBreakpoint from './get-breakpoint.js';
import getOrientation from './get-orientation.js';
import setPageTitle from './set-page-info.js';
import domHelpers from './dom-helpers.js';

const helpers = {
  setPageTitle: setPageTitle,
  getBreakpoint: getBreakpoint,
  getOrientation: getOrientation,
  dom: domHelpers
};

export default helpers;
