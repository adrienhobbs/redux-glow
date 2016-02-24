import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
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
