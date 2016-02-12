import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as navActions } from '../../redux/modules/nav';
import { actions as workActions } from '../../redux/modules/work';
import { actions as viewportActions } from '../../redux/modules/viewport';
import { actions as transitionActions } from '../../redux/modules/page-transition.js';
import isNull from 'lodash/isNull';
import du from 'domutil';
import Helpers from '../../utilities/helpers';
import Footer from 'components/footer';
import classnames from 'classnames';

export class PageLayout extends React.Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.object,
    dispatch: PropTypes.func,
    location: PropTypes.object,
    viewport: PropTypes.object
  };
  getClassnames (cn) {
    return classnames(cn);
  }
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
  checkBodyVisibility () {
    if (du.hasClass(document.body, 'isHidden')) {
      TweenLite.to(document.body, 0.8, {autoAlpha: 1, className: '-=isHidden', ease: Circ.easeInOut});
    }
  }
  getCurrentDevice () {
    return (this.props.viewport.isPhone) ? 'mobile' : 'desktop';
  }
  setupPageInfo (pageName) {
    Helpers.setPageTitle(pageName);
  }
}

export default PageLayout;
