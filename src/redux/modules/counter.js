/* @flow */
import { createAction, handleActions } from 'redux-actions';
import Counter from '../../utilities/counter';
// ------------------------------------
// Constants
// ------------------------------------
export const NEXT = 'NEXT';
export const BACK = 'BACK';
export const START = 'START';
export const GO_TO_NUMBER = 'GO_TO_NUMBER';

// ------------------------------------
// Actions
// ------------------------------------
export const next  = createAction(NEXT, (newState) => newState);
export const back  = createAction(BACK, (newState) => newState);
export const start  = createAction(START, (newState) => newState);
export const goToNumber  = createAction(GO_TO_NUMBER, (newState) => newState);

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  next,
  back,
  start,
  goToNumber
};

const initialState = {
  current:0,
  direction: null,
  isFirst: null,
  isLast: null,
  next: null,
  previous: null
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: number, action: {payload: number}): number => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [START] : (actionType, newState) => {
    Counter.start(newState.payload);
    return {
      current:   0,
      isFirst:   Counter.isFirst(),
      isLast:    Counter.isLast(),
      next:      Counter.nextSlide(),
      previous:  Counter.previousSlide()
    };
  },
  [NEXT] : () => {
    const newState = {
      current:   Counter.next(),
      isFirst:   Counter.isFirst(),
      isLast:    Counter.isLast(),
      next:      Counter.nextSlide(),
      previous:  Counter.previousSlide()
    };
    return newState;
  },

  [BACK] : (a, b) => {
    return {
      current:   Counter.back(),
      isFirst:   Counter.isFirst(),
      isLast:    Counter.isLast(),
      next:      Counter.nextSlide(),
      previous:  Counter.previousSlide()
    };
  },
  [GO_TO_NUMBER] : (state, {payload}) => {
    if (payload.number !== Counter.current()) {
      return {
        current:    Counter.setCurrent(payload.number),
        isFirst:    Counter.isFirst(),
        isLast:     Counter.isLast(),
        direction:  payload.direction
      };
    } else {
      return state;
    }
  }
}, initialState);
// export default function counterReducer (state: number = initialState, action: Action): number {
//   const handler = ACTION_HANDLERS[action.type]

//   return handler ? handler(state, action) : state
// }
