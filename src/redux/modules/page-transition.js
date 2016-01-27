import { createAction, handleActions } from 'redux-actions';

export const START_TRANSITION = 'START_TRANSITION';
export const END_TRANSITION = 'END_TRANSITION';

export const startTransition = createAction(START_TRANSITION, (newState) => newState);
export const endTransition = createAction(END_TRANSITION, (newState) => newState);

export const actions = {
  startTransition,
  endTransition
};

const initialState = {
  startTransition: false,
  path: '/',
  name: null,
  animationDirection: null
};

export default handleActions({
  [START_TRANSITION]: (state, {payload}) => {
    return {
      startTransition: payload.startTransition,
      path: payload.path,
      name: payload.name,
      animationDirection: payload.animationDirection
    };
  },
  [END_TRANSITION]: (state, {payload}) => {
    return {
      startTransition: false,
      path: state.path,
      pageCtr: payload,
      animationDirection: state.animationDirection
    };
  }
}, initialState);
