import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from  'react-router/lib/IndexRoute';
import Redirect from 'react-router/lib/Redirect';

import CoreLayout           from 'layouts/CoreLayout/CoreLayout';
import HomeView             from 'views/HomeView/HomeView';
import NotFoundView         from 'views/NotFoundView/NotFoundView';
import AboutView            from 'views/Pages/AboutView';
import ServicesView         from 'views/Pages/ServicesView';
import CareersView          from 'views/Pages/CareersView';
import ConnectView          from 'views/Pages/ConnectView';
import WorkView             from 'views/WorkView/work';
import PageViewLayout       from 'layouts/PageViewLayout/Page_View_Layout.js';
import TestingStuff         from 'components/testing-view/testingview.js';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />

    <Route component={PageViewLayout}>
      <Route component={ServicesView} path='services'/>
      <Route component={AboutView} path='about' />
      <Route component={CareersView} path='careers'/>
      <Route component={ConnectView} path='connect'/>
    </Route>

    <Route component={HomeView} path='/'>
      <Route component={HomeView} path='/featured/:project'/>
    </Route>

    <Route component={WorkView} path='work'>
      <Route component={WorkView} path='/work/:project'/>
    </Route>

    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
    <Route component={TestingStuff} path='/testing' />
  </Route>
);
