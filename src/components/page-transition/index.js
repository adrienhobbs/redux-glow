import React, { PropTypes } from 'react';

const PageTransition = React.createClass({
  propTypes: {
    status: React.PropTypes.object,
    location: React.PropTypes.object,
    history: React.PropTypes.object,
    actions: React.PropTypes.object
  },
  contextTypes: {
    router: PropTypes.object,
    viewport: PropTypes.object
  },
  componentWillMount () {
    this.transitionTL = new TimelineLite();
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.status.startTransition && !this.props.status.startTransition) {
      this.animateIn(nextProps.status.path, nextProps.status.animationDirection);
    }
    if (!nextProps.status.startTransition && this.props.status.startTransition) {
      this.animateOut(nextProps.status.pageCtr, nextProps.status.animationDirection);
    }
  },
  getCurrentDocHeight () {
    const ctr = document.getElementsByClassName('page-container')[0];
    return ctr.getBoundingClientRect().height;
  },
  getCurrentWindowHeight () {
    return window.innerHeight;
  },
  getTransitionElementHeight () {
    return (this.getCurrentDocHeight() < this.getCurrentWindowHeight()) ? this.getCurrentWindowHeight() : this.getCurrentDocHeight();
  },
  leftTransTL (startOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transLeft, 0.42, {scaleX: 1, transformOrigin: startOrigin, ease: Quart.easeIn});
    return TL;
  },
  rightTransTL (startOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 0.42, {scaleX: 1, transformOrigin: startOrigin, ease: Quart.easeIn});
    return TL;
  },
  leftTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transLeft, 0.42, {scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeIn});
    return TL;
  },
  rightTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 0.12, {scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeIn});
    return TL;
  },
  pageTransTL (pageEl, xStart) {
    const TL = new TimelineLite();
    TL.fromTo(pageEl, 0.4, {xPercent: xStart}, {xPercent: 0, ease: Quart.easeOut, onComplete: () => { TweenLite.set(pageEl, {clearProps: 'all'}); }});
    return TL;
  },
  goToNewPath (path) {
    return () => this.context.router.push({state: {animateIn: true}, pathname: path});
  },
  animateIn (newPath, animDir) {
    const transOriginStart = (animDir === 'left') ? 'center left' : 'center right';
    this.transitionTL.set([this.refs.transLeft, this.refs.transRight], {height: this.getTransitionElementHeight()});
    this.transitionTL.addLabel('start');
    this.transitionTL.add(this.leftTransTL(transOriginStart), 'start');
    this.transitionTL.add(this.rightTransTL(transOriginStart), 'start+=0.33');
    this.transitionTL.add(this.goToNewPath(newPath));
  },
  animateOut (pageEl, animDir) {
    const transOriginEnd = (animDir === 'left') ? 'center right' : 'center left';
    const xStart         = (animDir === 'left') ? -500 : 500;
    this.transitionTL.set([this.refs.transLeft, this.refs.transRight], {height: this.getTransitionElementHeight()});
    this.transitionTL.addLabel('start');
    this.transitionTL.add(this.leftTransTLOut(transOriginEnd), 'start');
    this.transitionTL.add(this.rightTransTLOut(transOriginEnd), 'start+=0.33');
    if (pageEl) {
      console.log(this);
      this.transitionTL.add(this.pageTransTL(pageEl, xStart), 'start+=0.33');
    }
  },
  render () {
    return (
      <div className='transition' ref='transitionEl'>
          <div ref='transRight' className='transition-right'></div>
          <div ref='transLeft' className='transition-left'></div>
      </div>
    );
  }
});

export default PageTransition;
