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
import {ToggleVis} from 'constants/animations/nav-bar';
import {isNull} from 'lodash';
import { VelocityComponent, velocityHelpers } from 'velocity-react';

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
    this.setLogoBgColor();
    if (this.props.viewport.breakpointChanged) {
      this.handleResize();
    }
    if (prevProps.nav.isVisible !== this.props.nav.isVisible) {
      this.toggleNavVisibility();
    }
    if (this.state.mobileNavOpen && !prevState.mobileNavOpen) {
      TweenLite.fromTo(this.refs.mobileNav, 0.6, {scale: 2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: 'center center', ease: Expo.easeInOut});
    }
    if (!this.state.mobileNavOpen && prevState.mobileNavOpen) {
      TweenLite.to(this.refs.mobileNav, 0.6, {scale: 2, autoAlpha: 0, transformOrigin: 'center', ease: Expo.easeInOut});
    }
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
    AnimVals.TL.add(TweenLite.to(this.refs.nav, AnimVals.dur, {scaleY: AnimVals.scale, transformOrigin: 'top center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.add(TweenLite.to(this.refs.frameLeft, AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'left center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.add(TweenLite.to(this.refs.frameRight, AnimVals.dur, {scaleX: AnimVals.scale, transformOrigin: 'right center', transformPerspective: AnimVals.transformPerspective, ease: AnimVals.ease}), 'start');
    AnimVals.TL.play();
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
    if ((this.props.viewport.isPhone) && path === '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'absolute'});
    }
    if (!(isNull(this.props.viewport.isPhone)) && path !== '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'fixed'});
    }
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
    TweenLite.to(this.refs.ham, 1.8, {fill: this.getLinkColor(), ease: Expo.easeInOut});
  }
  render ()  {
    const defaultDur = 600;
    const hamAnim = {
      topOpen: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            translateY: '-3px',
            rotateZ: ['45deg', [600, 60]],
            transformOrigin: 'left center'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      topClosed: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            translateY: '0px',
            rotateZ: [0, [600, 60]],
            transformOrigin: 'left center'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      bottomOpen: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            translateY: '1px',
            rotateZ: ['-45deg', [600, 60]],
            transformOrigin: 'left center'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      bottomClosed: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            translateY: '0px',
            rotateZ: [0, [700, 60]],
            transformOrigin: 'left center'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      midOpen: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            scaleX: [0, [100, 20]],
            opacity: 0,
            transformOrigin: '0% 50%'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      midClosed: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            scaleX: [1, [100, 30]],
            opacity: 1,
            transformOrigin: '0% 50%'
          }, 1, {
            easing: 'spring'
          }]
        ]
      }),
      menuClosedOut: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            translateZ: 0, // Force HA by animating a 3D property
            scale: [2, [600, 20]],
            opacity: 0,
            transformOrigin: '50% 50%'
          }, 1, {
            visibility: 'hidden',
            easing: 'spring'
          }]
        ]
      }),
      menuOpenIn: velocityHelpers.registerEffect({
        defaultDuration: defaultDur,
        calls: [
          [{
            visibility: 'visible',
            translateZ: 0, // Force HA by animating a 3D property
            scale: [1, [600, 20]],
            opacity: 1,
            transformOrigin: '50% 50%'
          }, 1, {
            visibility: 'visible',
            easing: 'spring'
          }]
        ]
      })
    };
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
                <svg ref='ham' fill='#F12D5C' width='28px' height='20px' viewBox='0 0 28 20' version='1.1' style={{overflow: 'visible'}}>
                  <g id='Page-1' strokeWidth='1' fill-rule='evenodd'>
                    <g id='hamburger' >
                      <VelocityComponent animation={this.state.mobileNavOpen ? hamAnim.bottomOpen : hamAnim.bottomClosed}>
                        <path d='M26,16 L2,16 C0.896,16 0,16.896 0,18 C0,19.104 0.896,20 2,20 L26,20 C27.104,20 28,19.104 28,18 C28,16.896 27.104,16 26,16 L26,16 Z' ref='hamBottom' id='bottom'></path>
                      </VelocityComponent>
                      <VelocityComponent animation={this.state.mobileNavOpen ? hamAnim.topOpen : hamAnim.topClosed}>
                        <path d='M2,4 L26,4 C27.104,4 28,3.104 28,2 C28,0.896 27.104,0 26,0 L2,0 C0.896,0 0,0.896 0,2 C0,3.104 0.896,4 2,4 L2,4 Z' id='top' ref='hamTop'></path>
                      </VelocityComponent>
                      <VelocityComponent animation={this.state.mobileNavOpen ? hamAnim.midOpen : hamAnim.midClosed}>
                        <path d='M26,8 L2,8 C0.896,8 0,8.896 0,10 C0,11.104 0.896,12 2,12 L26,12 C27.104,12 28,11.104 28,10 C28,8.896 27.104,8 26,8 L26,8 Z' id='middle' ref='hamMid'></path>
                      </VelocityComponent>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className='nav-right'>
              {this.getNavLinks()}
              <Link className='twitter-link' to='http://www.twitter.com/weareglow'><Twitter ref='twitterSVG' color={this.getLinkColor()}/></Link>
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
