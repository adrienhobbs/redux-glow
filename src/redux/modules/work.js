import Immutable from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import data from 'constants/data/data.js';
import {snakeCase} from 'lodash';
export const SET_CURRENT_STUDY = 'SET_CURRENT_STUDY';

export const setCurrentStudy = createAction(SET_CURRENT_STUDY, (newState) => newState);

const createAppItem = (slide) => {
  return Immutable.Map(slide);
};

const studyData = Immutable.List(data.map(createAppItem));

const getCurrentCaseStudy = function (params) {
  const current = {};
  studyData.map(function (a, b) {
    if (snakeCase(a.get('title')) === params.project) {
      current.study = a;
      current.number = b;
    }
    // if (a.includes(params.project)) {
    //   current.study = a;
    //   current.number = b;
    // }
  }, this);
  return current;
};

const getFeatured = function () {
  return studyData
  .filter(function filterProjects (studies) {
    return (studies.get('featured'));
  });
};

const getColors = function () {
  return getFeatured()
  .map(function (colors) {
    return colors.get('logoColor');
  });
};
const initialState = {
  // currentLocation: window.location.pathname,
  studyData: studyData,
  featured: getFeatured(),
  colors: getColors()
};

export const actions = {
  setCurrentStudy
};

export default handleActions({
  [SET_CURRENT_STUDY] : (state, params) => {
    return {
      studyData: studyData,
      featured: state.featured,
      colors: getColors(),
      current: getCurrentCaseStudy(params.payload)
    };
  }
}, initialState);
