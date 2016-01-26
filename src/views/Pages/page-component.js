import React from 'react';
import { bindActionCreators } from 'redux';
import * as transitionActions from 'actions/page-transition';
import * as navActions from 'actions/nav';
import * as counterActions from 'actions/counter';
import * as viewportActions from 'actions/viewport';

import { resetScroll, setPageTitle } from 'utils';
import scrollMonitor from 'scrollmonitor';

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

  showHeaderGradient () {
    TweenLite.set(this.refs.headerGradient, {scaleY: 1});
  }

  hideHeaderGradient () {
    TweenLite.set(this.refs.headerGradient, {scaleY: 0});
  }

  removeHeaderWatcher () {
    this.headerWatcher.destroy();
  }

  watchHeaderScrollTop () {
    this.headerWatcher = scrollMonitor.create(this.refs.headerImage);
    this.headerWatcher.on('exitViewport', () => {
      console.log('yah')
    });
    // this.headerWatcher.on('exitViewport', this.showHeaderGradient.bind(this));
    this.headerWatcher.on('enterViewport', this.hideHeaderGradient.bind(this));
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
