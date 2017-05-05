import React, {PropTypes} from 'react';
import ms from './mobile.css';
import classnames from 'classnames';
import Links from 'constants/page-links';
import CustomLink from './custom-link.js';
import {primaryColor} from 'constants/colors';

export class MobileNav extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    setLogoClick: PropTypes.func
  };
  static contextTypes = {
    transitionToNewRoute: PropTypes.func
  };
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }
  getActiveStyle () {
    return {
      borderBottom: `4px solid ${primaryColor}`
    };
  }
  getLinks () {
    return Links.map((link, i) => {
      return (
        <div key={i} className={ms.link_ctr}>
          <CustomLink  activeStyle={this.getActiveStyle()} {...this.props} toggleNavState={this.toggleNavState.bind(this)} linkNum={i} data={link} />
        </div>
      );
    });
  }
  toggleNavState () {
    this.setState({open: !this.state.open});
  }
  getClassname () {
    return (this.state.open) ? classnames(ms.nav_icon, ms.open) : ms.nav_icon;
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.open && !prevState.open) {
      TweenLite.fromTo(this.refs.mobileNav, 0.6, {scale: 2, autoAlpha: 0}, {scale: 1, autoAlpha: 1, transformOrigin: 'center center', ease: Expo.easeInOut});
    }
    if (!this.state.open && prevState.open) {
      TweenLite.to(this.refs.mobileNav, 0.4, {scale: 1.3, autoAlpha: 0, transformOrigin: 'center', ease: Expo.easeInOut});
    }
  }
  componentDidMount () {
    this.props.setLogoClick(this.logoClick.bind(this));
  }
  logoClick () {
    if (this.state.open) {
      this.toggleNavState();
    }
    this.context.transitionToNewRoute('/');
  }
  render () {
    return (
      <nav className={ms.mobile}>
        <div className={ms.mobile_outer}>
          <div className={ms.nav_icon_ctr}>
            <div onClick={this.toggleNavState.bind(this)} className={this.getClassname()}>
              <div className={ms.span_ctr}>
                <span style={{backgroundColor: this.props.color}}></span>
                <span style={{backgroundColor: this.props.color}}></span>
                <span style={{backgroundColor: this.props.color}}></span>
                <span style={{backgroundColor: this.props.color}}></span>
              </div>
            </div>
          </div>
        </div>
        <div className={ms.mobile_inner} ref='mobileNav'>
          <div className={ms.mobile_item_ctr}>
            {this.getLinks()}
          </div>
        </div>
      </nav>
    );
  }
}

export default MobileNav;
