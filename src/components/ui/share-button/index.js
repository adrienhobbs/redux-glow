import React from 'react';
import './share-button.scss';
import EmailShare from './email-share';
import TwitterShare from './twitter-share';
import FacebookShare from './facebook-share';

const ShareButton = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    strokeColor: React.PropTypes.string,
    copyColor: React.PropTypes.string
  },
  getInitialState () {
    return {
      isOpen: false,
      isHovered: false
    };
  },
  componentDidMount () {
    this.tl = new TimelineMax();
    // this.setupTl();
  },
  shouldComponentUpdate (prevProps, prevState) {
    return (this.state.isOpen !== prevState.isOpen);
  },
  componentDidUpdate () {
    if (this.state.isOpen) {
      // this.tl.play();
      this.setupTl();
    } else {
      this.tl.reverse();
    }
  },
  onClick () {
    this.setState({isOpen: !this.state.isOpen});
  },
  getStrokeColor () {
    return this.props.strokeColor || this.props.color || '#fff';
  },
  setupTl () {
    const twCircleX = '27.8';
    const emCircleX = '176.5';
    const circleR   = '25';
    const speed     = 0.5;
    const speed3    = 0.35;

    this.tl.add(TweenMax.to(this.refs.shareText, speed, {scale:0, transformOrigin:'50% 50%', ease:Expo.easeInOut}));
    this.tl.add(TweenMax.to(this.refs.shareBox, speed, {attr:{rx: 25, width:50, x: 76.5}, ease:Expo.easeInOut, delay:-(speed - 0)}));

    this.tl.add(TweenMax.to(this.refs.shareBox, 0.2, {skewX:20, transformOrigin:'50% 50%', ease:Quad.easeIn, delay:-(speed - 0.1)}));
    this.tl.add(TweenMax.to(this.refs.shareBox, 0.15, {rotation:-45, skewX:0, transformOrigin:'50% 50%', ease:Quad.easeOut, delay:-0.2}));
    this.tl.add(TweenMax.to(this.refs.twitterCircle, 0.0, {attr:{r:circleR}, transformOrigin:'50% 50%', ease:Quad.easeOut, delay:-0.15}));
    this.tl.add(TweenMax.to(this.refs.emailCircle, 0.0, {attr:{r:circleR}, transformOrigin:'50% 50%', ease:Quad.easeOut, delay:-0.15}));

    this.tl.add(TweenMax.to(this.refs.twitterCircle, speed3, {attr:{cx:twCircleX}, transformOrigin:'50% 50%', ease:Expo.easeOut, delay:0.05}));
    this.tl.add(TweenMax.to(this.refs.emailCircle, speed3, {attr:{cx:emCircleX}, transformOrigin:'50% 50%', ease:Expo.easeOut, delay:-(speed3)}));

    this.tl.add(TweenMax.from(this.refs.twitter.refs.icon, speed, {y:'+=18', opacity:0, ease:Back.easeOut.config(3), delay:-0.1}));
    this.tl.add(TweenMax.to(this.refs.twitter.refs.icon, speed, {opacity:1, ease:Quad.easeOut, delay:-speed}));
    this.tl.add(TweenMax.from(this.refs.facebook.refs.icon, speed, {y:'+=18', opacity:0, ease:Back.easeOut.config(3), delay:-(speed - 0.1)}));
    this.tl.add(TweenMax.to(this.refs.facebook.refs.icon, speed, {opacity:1, ease:Quad.easeOut, delay:-speed}));
    this.tl.add(TweenMax.from(this.refs.email.refs.icon, speed, {y:'+=18', opacity:0, ease:Back.easeOut.config(3), delay:-(speed - 0.1)}));
    this.tl.add(TweenMax.to(this.refs.email.refs.icon, speed, {opacity:1, ease:Quad.easeOut, delay:-speed}));
    // this.tl.pause();
  },
  render () {
    return (
      <svg onClick={this.onClick} id='svg_share' version='1.1'  x='0px' y='0px' viewBox='0 0 203 55' >
        <g ><circle onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} id='twitter_circle' stroke={this.getStrokeColor()} ref='twitterCircle'  cx='101.5' cy='26.5' r='0'/></g>
        <g><circle id='email_circle' ref='emailCircle'  cx='101.5' cy='26.5' r='0' stroke={this.getStrokeColor()}/></g>
        <rect ref='shareBox' id='share_box' x='1.5' y='1.5' style={{ fillOpacity: 0, stroke: this.getStrokeColor(), strokeWidth:3, strokeMiterlimit:10 }} width='200' height='50' rx='0'/>
        <g id='Share_Text' ref='shareText'>
          <text  className='clip-svg' fill={this.props.copyColor || this.props.color || '#fff'} transform='matrix(1 0 0 1 70.0633 31.9807)'>share</text>
        </g>
        <EmailShare {...this.props} ref='email' />
        <FacebookShare {...this.props} ref='facebook'/>
        <TwitterShare {...this.props} ref='twitter' />
      </svg>
    );
  }
});

export default ShareButton;
