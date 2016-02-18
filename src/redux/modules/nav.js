import { createAction, handleActions } from 'redux-actions';
import isUndefined from 'lodash/isUndefined';
export const NAV_STATE_CHANGED = 'NAV_STATE_CHANGED';

export const changeNavState = createAction(NAV_STATE_CHANGED, (newState) => newState);

const initialState = {
  isVisible: true,
  shouldAnimate: true
};

const getAnimateState = function shouldAnimate (state, newState) {
  if (newState.shouldAnimate === false) {
    return false;
  } else if (isUndefined(newState.shouldAnimate)) {
    return (state.shouldAnimate);
  } else {
    return newState.shouldAnimate;
  }
};

export const actions = {
  changeNavState
};

export default handleActions({
  [NAV_STATE_CHANGED]: (state, { payload }) => {
    return {
      isVisible: payload.isVisible,
      shouldAnimate: getAnimateState(state, payload)
    };
  }
}, initialState);
