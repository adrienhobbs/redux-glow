import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import counter from './modules/counter';
import nav from './modules/nav';
import work from './modules/work';
import viewport from './modules/viewport';
import pageTransition from './modules/page-transition.js';

export default combineReducers({
  counter,
  router,
  nav,
  work,
  viewport,
  pageTransition
});
