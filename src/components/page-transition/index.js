import React, { PropTypes } from 'react';

// 1. animate pink slide
// 2. animate white slide
// 3. change zindex of view window to 13
// 4. animate new content slide
// 5. clear pink slide
// 6. clear white slide
// 7. reset zindex value of view window

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
    TL.to(this.refs.transLeft, 1.6, {z: 0.0, scaleX: 1, transformOrigin: startOrigin, ease: Expo.easeInOut});
    return TL;
  },
  rightTransTL (startOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 1.5, {z: 0.0, zIndex:12, scaleX: 1, transformOrigin: startOrigin, ease: Expo.easeInOut});
    return TL;
  },
  leftTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transLeft, 0.25, {z: 0.0, scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeInOut});
    return TL;
  },
  rightTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 0.25, {z: 0.0, scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeInOut});
    return TL;
  },
  pageTransTL (pageEl, xStart) {
    const TL = new TimelineLite();
    TL.fromTo(pageEl, 1.8, {xPercent: xStart, z: 0.0000}, {z: 0.0000,  xPercent: 0, ease: Expo.easeInOut, onComplete: () => {
      TweenLite.set(pageEl, {clearProps: 'all'});
    }});
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
    this.transitionTL.add(this.rightTransTL(transOriginStart), 'start+=0.4');
    this.transitionTL.add(this.goToNewPath(newPath), 'start+=1.2');
  },
  animateOut (pageEl, animDir) {
    const xStart         = (animDir === 'left') ? -130 : 130;
    this.transitionTL.set([this.refs.transLeft, this.refs.transRight], {height: this.getTransitionElementHeight(), xPercent: 0, scaleX: 0});

    if (pageEl) {
      TweenLite.set(pageEl, {position: 'relative', zIndex: 13});

      this.transitionTL.add(this.pageTransTL(pageEl, xStart), 'start+=0.4');
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
