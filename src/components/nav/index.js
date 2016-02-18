import React, { PropTypes } from 'react';
import Colors from 'constants/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as transitionActions } from '../../redux/modules/page-transition.js';
import {ToggleVis} from 'constants/animations/nav-bar';
import isNull from 'lodash/isNull';
import MobileNav from './mobile.js';
import DesktopNav from './desktop.js';
import styles from './nav.css';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  pageTransition: state.pageTransition,
  routerState: state.router,
  currentPath: state.router.location.pathname,
  viewport: state.viewport,
  colors: state.work.colors,
  currentColor: state.work.colors.get(state.counter.current)
});

export class Nav extends React.Component {

  static propTypes = {
    routerState: PropTypes.object,
    viewport: PropTypes.object,
    currentPath: PropTypes.string,
    dispatch: PropTypes.func,
    nav: PropTypes.object,
    colors: PropTypes.object,
    counter: PropTypes.object
  };
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, counterActions, transitionActions), props.dispatch);
    this.state = {
      currentLinkIndex: 0,
      mobileNavOpen: false
    };
  }
  componentDidMount () {
    this.checkFramePositionType(this.props.currentPath);
    if (!this.props.nav.isVisible) {
      this.toggleNavVisibility();
    }
  }
  componentDidUpdate (prevProps, prevState) {
    // this.setLogoBgColor();
    if (this.props.viewport.breakpointChanged) {
      this.handleResize();
    }
    if (prevProps.nav.isVisible !== this.props.nav.isVisible) {
      this.toggleNavVisibility();
    }
    // if (this.state.mobileNavOpen && !prevState.mobileNavOpen) {
    //   TweenLite.fromTo(this.refs.mobileNav, 0.6, {scale: 2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: 'center center', ease: Expo.easeInOut});
    // }
    // if (!this.state.mobileNavOpen && prevState.mobileNavOpen) {
    //   TweenLite.to(this.refs.mobileNav, 0.6, {scale: 2, autoAlpha: 0, transformOrigin: 'center', ease: Expo.easeInOut});
    // }
  }
  setCurrentLink (ind) {
    this.setState({currentLinkIndex: ind});
  }
  getAnimationDirection (newIndex) {
    return (newIndex > this.state.currentLinkIndex) ? 'right' : 'left';
  }
  toggleNavVisibility () {
    const AnimVals = ToggleVis(this.props.nav);
    AnimVals.TL.addLabel('start', '0');
    AnimVals.TL.add(TweenLite.to(this.refs.nav, AnimVals.dur, {y: AnimVals.y, transformOrigin: 'top center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.add(TweenLite.to('#frame-left', AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'left center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.add(TweenLite.to('#frame-right', AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'right center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.play();
  }
  getLinkColor () {
    return (this.props.currentPath !== '/') ? Colors.radRed : this.props.colors.get(this.props.counter.current);
  }

  handleResize () {
    if (window.innerWidth >= 992 && this.state.mobileNavOpen) {
      this.toggleMobileMenu();
    }
  }
  checkFramePositionType (path) {
    if ((this.props.viewport.isPhone) && path === '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'absolute'});
    }
    if (!(isNull(this.props.viewport.isPhone)) && path !== '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'fixed'});
    }
  }

  logoClick () {
    if (this.props.currentPath === '/') {
      if (this.state.mobileNavOpen) {
        this.toggleMobileMenu();
      }
      this.actions.goToNumber({number: 0});
    } else if (this.props.currentPath !== '/') {
      this.goTo('/', 0);
      if (this.state.mobileNavOpen) {
        this.toggleMobileMenu();
      }
    }
  }
  restartSliderPos () {
    this.actions.goToNumber({number: 0});
  }
  setLogoBgColor () {
    TweenLite.to(this.refs.logoBg, 1.4, {backgroundColor: this.getLinkColor(), ease: Expo.easeInOut});
    TweenLite.to(this.refs.twitterSVG.refs.twitterIcon, 1.8, {fill: this.getLinkColor(), ease: Expo.easeInOut});
    TweenLite.to(this.refs.ham, 1.8, {fill: this.getLinkColor(), ease: Expo.easeInOut});
  }
  getNav () {
    if (this.props.viewport.hasTouch || window.innerWidth <= 992) {
      return <MobileNav currentPath={this.props.currentPath} color={this.getLinkColor()} />;
    } else if (!this.props.viewport.hasTouch) {
      return <DesktopNav restartSliderPos={this.restartSliderPos.bind(this)} color={this.getLinkColor()} currentPath={this.props.currentPath} />;
    }
  }
  render ()  {
    return (
      <div className={styles.site_nav} ref='nav'>
      {this.getNav()}
      </div>
    );
  }
};

export default connect(mapStateToProps)(Nav);
