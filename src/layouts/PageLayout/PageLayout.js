import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as navActions } from '../../redux/modules/nav';
import { actions as workActions } from '../../redux/modules/work';
import { actions as viewportActions } from '../../redux/modules/viewport';
import { actions as transitionActions } from '../../redux/modules/page-transition.js';
import {isNull} from 'lodash';
import du from 'domutil';
import Helpers from '../../utilities/helpers';
// import scrollMonitor from 'scrollmonitor';
import Footer from 'components/footer';

export class PageLayout extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.object,
    dispatch: PropTypes.func,
    location: PropTypes.object,
    viewport: PropTypes.object
  };
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, transitionActions, counterActions, navActions, workActions, viewportActions), props.dispatch);
    this.Footer = Footer;
  }
  static contextTypes = {
    router: PropTypes.object,
    location: PropTypes.object
  };
  toggleNavState (navState) {
    this.actions.changeNavState(navState);
  }
  animatePageContentIn () {
    if (!(isNull(this.props.location.state))) {
      if (this.props.location.state.animateIn) {
        this.actions.endTransition(this.refs.page);
      }
    }
    Helpers.dom.resetScroll();
  }
  getFooter () {
    return <Footer />;
  }

  showHeaderGradient () {
    // TweenLite.set(this.refs.headerGradient, {scaleY: 1});
  }
  checkBodyVisibility () {
    if (du.hasClass(document.body, 'isHidden')) {
      TweenLite.to(document.body, 0.8, {autoAlpha: 1, className: '-=isHidden', ease: Circ.easeInOut});
    }
  }
  hideHeaderGradient () {
    // TweenLite.set(this.refs.headerGradient, {scaleY: 0});
  }

  removeHeaderWatcher () {
    // console.log('destory')
    // if (typeof this.headerWatcher !== undefined) {
    //   this.headerWatcher.destroy();
    // }
  }

  watchHeaderScrollTop () {
    // this.headerWatcher = scrollMonitor.create(this.refs.headerImage);

    // console.log(this.refs.headerImage);
    // this.headerWatcher.on('enterViewport', function() {
    //   console.log('yah')
    // })
    // this.headerWatcher.on('exitViewport', function() {
    //   console.log('exit')
    // })
    // // this.headerWatcher.exitViewport(this.showHeaderGradient.bind(this));
    // // this.headerWatcher.enterViewport(this.hideHeaderGradient.bind(this));
  }

  getCurrentDevice () {
    return (this.props.viewport.isPhone) ? 'mobile' : 'desktop';
  }

  setupPageInfo (pageName) {
    Helpers.setPageTitle(pageName);
  }
}

export default PageLayout;
