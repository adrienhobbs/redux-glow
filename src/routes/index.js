import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from  'react-router/lib/IndexRoute';
import Redirect from 'react-router/lib/Redirect';

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout           from 'layouts/CoreLayout/CoreLayout';
import HomeView             from 'views/HomeView/HomeView';
import NotFoundView         from 'views/NotFoundView/NotFoundView';
import AboutView            from 'views/Pages/AboutView';
import ServicesView         from 'views/Pages/ServicesView';
import CareersView          from 'views/Pages/CareersView';
import ConnectView          from 'views/Pages/ConnectView';
import WorkView             from 'views/WorkView/work';
import Direct from 'components/case-study/direct';
import TestingStuff from 'components/testing-view/testingview.js';

export default (
  <Route path='/' component={CoreLayout}>
    <Route component={TestingStuff} path='/testing' />
    <IndexRoute component={HomeView} />
    <Route component={HomeView} path='/featured/:project' />
    <Route      component={Direct} path='work/:project'/>
    <Route      component={AboutView} path='about' />
    <Route      component={ServicesView} path='services'/>
    <Route      component={CareersView} path='careers'/>
    <Route      component={ConnectView} path='connect'/>
    <Route      component={WorkView}  path='work'>
      <Route    component={WorkView}  path='/case-study/:project'/>
    </Route>
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
);

    // <Route component={HomeView} path='/featured/:project' />
