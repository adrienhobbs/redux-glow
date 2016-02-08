import React from 'react';
import './nav-link.scss';
const NavLink = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    color: React.PropTypes.string,
    mobileNavOpen: React.PropTypes.bool,
    goTo: React.PropTypes.func,
    path: React.PropTypes.string,
    isCurrentPath: React.PropTypes.bool,
    num: React.PropTypes.number,
    setCurrentLinkIndex: React.PropTypes.func,
    mobile: React.PropTypes.bool,
    toggleMobileMenu: React.PropTypes.func,
    viewport: React.PropTypes.object
  },
  getInitialState () {
    return {
      isActive: false
    };
  },
  componentDidMount () {
    if (this.props.isCurrentPath) {
      this.props.setCurrentLinkIndex(this.props.num);
      this.toggleActiveState();
      if (!this.props.mobile) {
        this.splitLinkText();
      }
    }
  },
  componentWillReceiveProps (nextProps) {
    if (!nextProps.isCurrentPath && this.state.isActive) {
      if (!this.props.mobile) {
        this.splitLinkTextLeave();
      }
      this.toggleActiveState();
    }
    if (this.props.color !== nextProps.color) {
      this.setLinkColor(nextProps.color);
    }
  },

  onMouseEnter () {
    if (!this.state.isActive && !this.props.mobile) {
      this.splitLinkText();
    }
  },
  onMouseLeave () {
    if (this.splitTL && !this.state.isActive && !this.props.mobile) {
      // this.splitLinkTextLeave();
      this.splitTL.reverse();
    }
  },
  onTouchEnd () {
  },
  onClick (e) {
    if (!this.state.isActive) {
      if (this.props.mobile) {
        this.props.toggleMobileMenu();
      }
      this.toggleActiveState();
      this.props.goTo(this.props.path, this.props.num + 1, this.props.name);
    }
    if (this.state.isActive && this.props.mobile) {
      this.props.toggleMobileMenu();
    }
  },
  toggleActiveState () {
    this.setState({isActive: !this.state.isActive});
  },
  splitLinkText () {
    // const speed     = 0.15;
    // const offset    = 0.1;
    const lineWidth = this.refs.link.getBoundingClientRect().width + 6;

    // this.splitText = new SplitText(this.refs.link, {type: 'chars'});
    this.splitTL   = new TimelineMax({onReverseComplete: () => {
      TweenLite.set(this.refs.lineSvg, {clearProps: 'all'});
    }});
    this.splitTL.set(this.refs.lineSvg, {width: lineWidth});
    this.splitTL.to(this.refs.line, 0.3, {attr: {x1: lineWidth}, ease: Quad.easeInOut});
    // _.forEach(this.splitText.chars, (child, i) => {
    //   this.splitTL.to(child, speed, {y:-6, ease:Linear.easeNone}, ((speed * i) * offset));
    //   this.splitTL.to(child, speed, {y:-3, ease:Linear.easeNone}, (speed * i) * offset + speed);
    // });
  },
  splitLinkTextLeave () {
    // const speed     = 0.15;
    // const offset    = 0;
    const lineWidth = 0;

    this.splitTLLeave   = new TimelineMax({onComplete: () => {
    }});
    this.splitTLLeave.to(this.refs.line, 0.3, {attr: {x1: lineWidth}, ease: Quad.easeInOut});
    // _.forEach(this.splitText.chars, (child, i) => {
    //   // this.splitTLLeave.to(child, speed, {y:-3, ease:Linear.easeNone}, ((speed * i) * offset));
    //   this.splitTLLeave.to(child, speed, {y:0, ease:Linear.easeNone}, (speed * i) * offset + speed);
    // });
  },
  setLinkColor (color) {
    TweenLite.to(this.refs.link, 1.4, {color: color, ease: Expo.easeInOut});
  },
  render () {
    const lineHeight = 4;
    return (
      <div ref='linkCtr'  onClick={this.onClick} onTouchEnd={this.onTouchEnd} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}  className='nav-item'>
        <a ref='link'  >{this.props.name}</a>
        <svg ref='lineSvg' className='line' height={`${lineHeight}px`}>
          <line ref='line' id='underLine' fill='none' stroke={this.props.color} strokeWidth={lineHeight} strokeMiterLimit='10' x1='0' y1='0' x2='0' y2='0'/>
        </svg>
      </div>
    );
  }
});

export default NavLink;
