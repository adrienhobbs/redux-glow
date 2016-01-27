import raf from 'raf';
import du from 'domutil';
import MobileDetect from 'mobile-detect';
import getBreakpoint from './get-breakpoint';
import getOrientation from './get-orientation';
import {debounce} from 'lodash';

const resizeUtil  = (function resizeUtility () {
  const md        = new MobileDetect(window.navigator.userAgent || navigator.userAgent);
  let init        = false;
  let running     = false;
  let hasLoaded   = false;
  let orientation = getOrientation();
  let Actions;

  const dims = {
    get isTablet () {
      return md.tablet();
    },
    get isPhone () {
      return md.phone();
    },
    get isMobile () {
      return md.mobile();
    },
    get orientation () {
      return orientation;
    },
    get windowHeight () {
      return du.viewportSize().height;
    },
    get windowWidth () {
      return du.viewportSize().width;
    },
    get docHeight () {
      return (document.height !== undefined) ? document.height : document.body.offsetHeight;
    },
    get docWidth () {
      return (document.width !== undefined) ? document.width : document.body.offsetWidth;
    },
    get breakpoint () {
      return getBreakpoint(this.windowWidth);
    }
  };

  // Run Callbacks on resize
  const runCallbacks = function runCallbacksFn () {
    try {
      if (orientation !== getOrientation()) {
        orientation = getOrientation();
      }
      Actions.setPageViewport(dims);
    } catch (err) {
      // console.warn('actions havent been bound yet to resize');
    }
    hasLoaded = (!hasLoaded);
    running = false;
  };

  const resize = function resizeFn () {
    if (!running) {
      running = true;
      raf(runCallbacks);
    }
  };

  du.bind(window, 'resize', debounce(resize, 300));

  return {
    init: function initActions (actions) {
      Actions = actions;
      init = true;
    },
    getDims: () => {
      if (init) {
        return dims;
      } else if (!init) {
        return false;
      }
    },
    isPhone: dims.isPhone,
    isTablet: dims.isTablet,
    isMobile: dims.isMobile,
    get breakpoint () {
      return dims.breakpoint;
    }
  };
})();

export default resizeUtil;
