import { createAction, handleActions } from 'redux-actions';
import Links from 'constants/page-links';
export const START_TRANSITION = 'START_TRANSITION';
export const END_TRANSITION = 'END_TRANSITION';
export const SET_CURRENT_LINK_INDEX = 'SET_CURRENT_LINK_INDEX';

export const startTransition = createAction(START_TRANSITION, (newState) => newState);
export const endTransition = createAction(END_TRANSITION, (newState) => newState);
export const setCurrentLinkIndex = createAction(SET_CURRENT_LINK_INDEX, (newState) => newState);

export const actions = {
  startTransition,
  endTransition,
  setCurrentLinkIndex
};

const initialState = {
  startTransition: false,
  path: '/',
  name: null,
  animationDirection: null,
  currentLinkIndex: null
};

const getLinkIndex = function getIndexOfCurrentLink (pathname) {
  return Links.findIndex(function (link, i) {
    return link.get('path') === pathname;
  });
};

const getAnimationDirection = function getAnimDir (currentPathIndex, nextPath) {
  return (getLinkIndex(nextPath) > currentPathIndex) ? 'left' : 'right';
};

export default handleActions({
  [START_TRANSITION]: (state, {payload}) => {
    return {
      startTransition: payload.startTransition,
      path: payload.pathname,
      animationDirection: getAnimationDirection(state.currentLinkIndex, payload.pathname),
      currentLinkIndex: getLinkIndex(payload.pathname)
    };
  },
  [END_TRANSITION]: (state, {payload}) => {
    return {
      startTransition: false,
      path: state.path,
      pageCtr: payload,
      animationDirection: state.animationDirection,
      currentLinkIndex: state.currentLinkIndex
    };
  },
  [SET_CURRENT_LINK_INDEX]: (state, {payload}) => {
    return {
      startTransition: false,
      path: state.path,
      pageCtr: payload,
      animationDirection: state.animationDirection,
      currentLinkIndex: getLinkIndex(payload)
    };
  }
}, initialState);
