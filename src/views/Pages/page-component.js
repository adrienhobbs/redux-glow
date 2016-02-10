import React from 'react';
import { bindActionCreators } from 'redux';
import * as transitionActions from 'actions/page-transition';
import * as navActions from 'actions/nav';
import * as counterActions from 'actions/counter';
import * as viewportActions from 'actions/viewport';

import { resetScroll, setPageTitle } from 'utils';

export class PageComponent extends React.Component {

  static propTypes = {
    work: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  setupPageInfo (pageName) {
    setPageTitle(pageName);
  }

  bindTransitionActions () {
    this._transitionActions = bindActionCreators(transitionActions, this.props.dispatch);
  }

  bindNavActions () {
    this._navActions = bindActionCreators(navActions, this.props.dispatch);
  }

  bindCounterActions () {
    this._counterActions = bindActionCreators(counterActions, this.props.dispatch);
  }
  bindViewportActions () {
    this._viewportActions = bindActionCreators(viewportActions, this.props.dispatch);
  }

  animatePageContentIn () {
    if (!(_.isNull(this.props.location.state))) {
      if (this.props.location.state.animateIn) {
        this._transitionActions.endTransition(this.refs.page);
      }
    }
    resetScroll();
  }
}

export default PageComponent;
