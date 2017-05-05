import React, { PropTypes } from 'react';
import styles from './page-transition.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const PageTransition = React.createClass({
  mixins: [PureRenderMixin],
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
    TL.to(this.refs.transLeft, 1.6, {z: 0, scaleX: 1, transformOrigin: startOrigin, ease: Expo.easeInOut});
    return TL;
  },
  rightTransTL (startOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 1, {z: 0, zIndex:12, scaleX: 1, transformOrigin: startOrigin, ease: Expo.easeInOut});
    return TL;
  },
  leftTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transLeft, 0.75, {z: 0, scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeInOut});
    return TL;
  },
  rightTransTLOut (endOrigin) {
    const TL = new TimelineLite();
    TL.to(this.refs.transRight, 0.75, {z: 0, scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeInOut});
    return TL;
  },
  pageTransTL (pageEl, xStart) {
    const TL = new TimelineLite();
    TL.fromTo(pageEl, 1.7, {autoAlpha: 0, z: 0}, {z: 0,  autoAlpha: 1, ease: Expo.easeInOut, onComplete: () => {
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
    this.transitionTL.add(this.rightTransTL(transOriginStart), 'start+=0.6');
    this.transitionTL.add(this.goToNewPath(newPath), 'start+=1.35');
  },
  animateOut (pageEl, animDir) {
    const xStart         = (animDir === 'left') ? -130 : 130;
    this.transitionTL.set([this.refs.transLeft, this.refs.transRight], {height: this.getTransitionElementHeight(), xPercent: 0, scaleX: 0});

    if (pageEl) {
      TweenLite.set(pageEl, {position: 'relative', zIndex: 13});

      this.transitionTL.add(this.pageTransTL(pageEl, xStart), 'start+=0.85');
    }
  },
  render () {
    return (
      <div className='transition' ref='transitionEl'>
        <div ref='transRight' className={styles.transition_right}></div>
        <div ref='transLeft' className={styles.transition_left}></div>
      </div>
    );
  }
});

export default PageTransition;
