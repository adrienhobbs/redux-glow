import { createAction, handleActions } from 'redux-actions';
import {isNull} from 'lodash';
import MobileDetect from 'mobile-detect';
require('modernizr/modernizr');

import Helpers from '../../utilities/helpers.js';
const md = new MobileDetect(window.navigator.userAgent || navigator.userAgent);
export const SET_PAGE_VIEWPORT = 'SET_PAGE_VIEWPORT';
export const GET_ORIENTATION = 'GET_ORIENTATION';

export const setPageViewport = createAction(SET_PAGE_VIEWPORT, (newState) => newState);
export const getPageOrientation = createAction(GET_ORIENTATION, (newState) => newState);
export const actions = {
  setPageViewport,
  getPageOrientation
};

const initialState = {
  isPhone: !(isNull(md.phone())),
  isMobile: (!isNull(md.mobile())),
  isTablet: (!(isNull(md.tablet()))),
  breakpoint: Helpers.getBreakpoint(),
  orientation: Helpers.getOrientation(),
  orientationChanged: null,
  breakpointChanged: null,
  hasTouch: Modernizr.touchevents
};

export default handleActions({
  [SET_PAGE_VIEWPORT] : (state, viewport) => {
    return {
      breakpoint: viewport.payload.breakpoint,
      orientation: viewport.payload.orientation,
      isPhone: !(isNull(md.phone())),
      isMobile: (!isNull(md.mobile())),
      isTablet: (!(isNull(md.tablet()))),
      orientationChanged: (state.orientation !== viewport.payload.orientation),
      breakpointChanged: (state.breakpoint !== viewport.payload.breakpoint),
      hasTouch: Modernizr.touchevents
    };
  },
  [GET_ORIENTATION] : (state, viewport) => {
    return {
      breakpoint: viewport.payload.breakpoint,
      orientation: viewport.payload.orientation,
      isPhone: !(isNull(md.phone())),
      isMobile: (!isNull(md.mobile())),
      isTablet: (!(isNull(md.tablet()))),
      hasTouch: Modernizr.touchevents
    };
  }
}, initialState);
