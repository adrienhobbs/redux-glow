import React, { PropTypes } from 'react';
import { Link }  from 'react-router';
import Twitter from 'components/ui/icons/twitter';
import GlowLogo from 'components/icons/glow-logo';
import NavLink from './nav-link';
import Colors from 'constants/colors';
import Links from 'constants/page-links';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as transitionActions } from '../../redux/modules/page-transition.js';
import Isvg from 'react-inlinesvg';
import {ToggleVis} from 'constants/animations/nav-bar';

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
    // this.checkFramePositionType(this.props.routerState.path);
    this.ham = document.getElementsByClassName('ham')[0].getElementsByTagName('svg');
  }
  componentDidUpdate (prevProps, prevState) {
    this.setLogoBgColor();
    if (this.props.viewport.breakpointChanged) {
      this.handleResize();
    }
    if (prevProps.nav.isVisible !== this.props.nav.isVisible) {
      this.toggleNavVisibility();
    }
    if (this.state.mobileNavOpen && !prevState.mobileNavOpen) {
      TweenLite.to(this.refs.mobileNav, 0.4, {scaleY: 1, transformOrigin: 'center top', ease: Expo.easeInOut});
    }
    if (!this.state.mobileNavOpen && prevState.mobileNavOpen) {
      TweenLite.set(this.refs.mobileNav, {scaleY: 0, transformOrigin: 'center top', ease: Expo.easeInOut});
    }

    TweenLite.set(this.ham, {attr: {fill: this.getLinkColor()}});
  }
  componentWillUnmount () {
  }
  setCurrentLink (ind) {
    this.setState({currentLinkIndex: ind});
  }
  getAnimationDirection (newIndex) {
    return (newIndex > this.state.currentLinkIndex) ? 'right' : 'left';
  }

  toggleNavVisibility () {
    const AnimVals = ToggleVis(this.props.nav.isVisible);
    AnimVals.TL.addLabel('start', '0');
    if (this.props.nav.shouldAnimate) {
      AnimVals.TL.add(TweenLite.to(this.refs.nav, AnimVals.dur, {scaleY: AnimVals.scale, transformOrigin: 'top center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
      AnimVals.TL.add(TweenLite.to(this.refs.frameLeft, AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'left center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
      AnimVals.TL.add(TweenLite.to(this.refs.frameRight, AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'right center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
      AnimVals.TL.play();
    }
  }
  getMobileLinks () {
    return Links.map((link, i) => {
      return (
        <NavLink
          viewport={this.props.viewport}
          mobile
          toggleMobileMenu={this.toggleMobileMenu.bind(this)}
          goTo={this.goTo.bind(this)}
          ref={link.get('name')}
          isCurrentPath={(link.get('path') === this.props.currentPath)}
          num={i}
          color={this.getLinkColor()}
          name={link.get('name')}
          path={link.get('path')}
          currentPath={this.props.currentPath}
          setCurrentLinkIndex={this.setCurrentLink.bind(this)}
          key={i} />
      );
    }, this);
  }

  getNavLinks (mobile) {
    return Links.map((link, i) => {
      return (
        <NavLink
          viewport={this.props.viewport}
          toggleMobileMenu={this.toggleMobileMenu.bind(this)}
          goTo={this.goTo.bind(this)}
          ref={link.get('name')}
          isCurrentPath={(link.get('path') === this.props.currentPath)}
          num={i}
          color={this.getLinkColor()}
          name={link.get('name')}
          path={link.get('path')}
          currentPath={this.props.currentPath}
          setCurrentLinkIndex={this.setCurrentLink.bind(this)}
          key={i} />
      );
    }, this);
  }

  getLinkColor () {
    return (this.props.currentPath !== '/') ? Colors.radRed : this.props.colors.get(this.props.counter.current);
  }
  toggleMobileMenu () {
    this.setState({mobileNavOpen: !this.state.mobileNavOpen});
  }
  handleResize () {
    if (window.innerWidth >= 992 && this.state.mobileNavOpen) {
      this.toggleMobileMenu();
    }
  }
  checkFramePositionType (path) {
    // if (!(_.isNull(this.props.viewport.isPhone)) && path === '/') {
    //   TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'absolute'});
    // }
    // if (!(_.isNull(this.props.viewport.isPhone)) && path !== '/') {
    //   TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'fixed'});
    // }
  }
  goTo (path = '/', newIndex, newPathName) {
    if (this.props.currentPath !== path) {
      this.checkFramePositionType(path);
      this.actions.startTransition({
        startTransition: true,
        path: path,
        name: newPathName,
        animationDirection: this.getAnimationDirection(newIndex)
      });
      this.setCurrentLink(newIndex);
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

  setLogoBgColor () {
    TweenLite.to(this.refs.logoBg, 1.4, {backgroundColor: this.getLinkColor(), ease: Expo.easeInOut});
    TweenLite.to(this.refs.twitterSVG.refs.twitterIcon, 1.8, {fill: this.getLinkColor(), ease: Expo.easeInOut});
  }

  render () {
    return (
      <div className='nav-container'>
        <nav ref='mobileNav' className='mobile'>
          <div className='inner'>
            {this.getMobileLinks()}
          </div>
        </nav>
        <nav ref='nav' className='nav'>
          <div className='nav-inner desktop'>
            <div className='nav-left'>
              <div style={{backgroundColor: Colors.radRed}} ref='logoBg' onClick={this.logoClick.bind(this)} className='logo' >
                <GlowLogo width='90%' />
              </div>
              <div onClick={this.toggleMobileMenu.bind(this)} className='hamburger'>
                <Isvg ref='ham' className='ham svg' src='https://s3.amazonaws.com/weareglow-assets/assets/ham.svg' />
              </div>
            </div>
            <div className='nav-right'>
                {this.getNavLinks()}
                <Link className='twitter-link' to='/about'><Twitter ref='twitterSVG' color={this.getLinkColor()}/></Link>
            </div>
          </div>
        </nav>
        <div ref='frameLeft' className='frame-left' id='frame-left'></div>
        <div ref='frameRight' className='frame-right' id='frame-right'></div>
      </div>
    );
  }

};

export default connect(mapStateToProps)(Nav);
