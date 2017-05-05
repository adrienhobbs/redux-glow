import React, { Component } from 'react';
import styles from './intro-animation.scss';

export default class IntroAnimation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasPlayed: false
    };
    this.TL = new TimelineMax();
    this.TL.pause();
  }

  animate () {
    var TL = new TimelineMax();

    // // settings for 'we are' animation
    const weAreVars = {
      y: -60.5,
      ease: Back.easeOut.config(3.4),
      dur: 0.35,
      staggerDur: 0.08
    };

    // // Settings for 'GLOW' animation
    const glowVars = {
      x: 0,
      ease: Quart.easeOut,
      dur: 0.7
    };

    TL.staggerTo(this.refs.weAreGroup.children, weAreVars.dur, weAreVars, weAreVars.staggerDur)
    .to(this.refs.glowGroup.children[3], glowVars.dur, glowVars, '+=0.05')
    .to(this.refs.glowGroup.children[2], glowVars.dur, glowVars, '-=0.6')
    .to(this.refs.glowGroup.children[1], glowVars.dur, glowVars, '-=0.55')
    .to(this.refs.glowGroup.children[0], glowVars.dur, glowVars, '-=0.525')
    .to(this.refs.introAnimation, 0.8, {autoAlpha: 0, display: 'none', onComplete: () => this.setState({hasPlayed: true})}, '+=1.8')
    .set('#intro-animation', {display: 'none'});
  }
  componentDidMount () {
    this.animate();
  }
  render () {
    return (
      <div className={styles.introAnimation} ref='introAnimation'>
        <div className={styles.introAnimationInner}>
          <svg fill='white' id='we_are_glow' className={styles.weAreGlowSvg} ref='svg' viewBox='0 0 500.3 60.5'>
            <g id='glow' ref='glowGroup'>
              <path transform='translate(-255)' id='glow_g' className={styles.cls1} d='M291.8,27.3h26.7V38.5c-2.1,13.2-12,22.1-28.9,22.1-19.7,0-30.6-13.8-30.6-30.2C259,14.7,270.2.2,289.5,0.2c16.6,0,27.4,9.8,28.5,21.5H299.2c-0.6-3.3-3.8-6.9-9.8-6.9-9.2,0-12.9,7.8-12.9,15.9,0,8.9,4.6,16,14,16,6.4,0,10-3.6,10.8-8.1h-9.5V27.3h0Z'/>
              <path transform='translate(-255)' id='glow_l' className={styles.cls1} d='M354.7,44.5V59.1h-32V1.8h17V44.6h15V44.5Z'/>
              <path id='glow_o' className={styles.cls1} d='M354.3,30.4c0-15.8,11.4-30.2,31.1-30.2s31.1,14.4,31.1,30.2-11.4,30.2-31.1,30.2S354.3,46.2,354.3,30.4Zm44.9,0c0-7.6-5.1-14.7-13.8-14.7s-13.8,7-13.8,14.7,5.2,14.7,13.8,14.7C394.2,45.1,399.2,38.1,399.2,30.4Z' transform='translate(-255, 0)'/>
              <path id='glow_w' className={styles.cls1} d='M455.3,27.9l-9.6,31.2H430.9L410.2,1.8h18L438.4,36,448.5,1.8h13.6l10,34.2L482.3,1.8h18L479.7,59.2H464.8Z' transform='translate(-255, 0)'/>
            </g>
            <rect id='we_are_mask' className={styles.cls2} width='248' height='62.5' transform='translate(0)'/>
            <g id='we_are' ref='weAreGroup' transform='translate(0, 60.5)'>
              <path id='we_are_w' className={styles.cls1} d='M34.7,34.35l-8.1,25.2H16.4L1.7,20H14.6l7.3,23.5,7-23.5H40.5l7,23.5L54.7,20h13L52.9,59.55H42.7Z' transform='translate(0 -0.15)'/>
              <path id='we_are_e' className={styles.cls1} d='M76.8,42.85c0.2,4.8,2.2,8.8,8.8,8.8,4.3,0,6.5-2,7.3-4.5h12.3c-1.1,7.5-8.2,13.5-19.5,13.5-13.8,0-21.3-8.6-21.3-20.8,0-11.6,7.3-20.8,21-20.8,12.4,0,20.3,8.4,20.3,18a32.45,32.45,0,0,1-.4,5.8H76.8Zm0-7.2H93.3c0-5.1-3.4-8.3-8.1-8.3S76.8,30.25,76.8,35.65Z' transform='translate(0 -0.15)'/>
              <path id='we_are_a' className={styles.cls1} d='M167.3,20v39.5H154.8v-5.6c-1.9,3.6-7,6.6-12,6.6-11.4,0-19.3-8.9-19.3-20.7s7.9-20.7,19.3-20.7c5.1,0,10.2,3,12,6.6V20h12.5Zm-12.5,19.7c0-5.4-3.8-10.1-9.4-10.1s-9.4,4.7-9.4,10.1,3.8,10.1,9.4,10.1S154.8,45.25,154.8,39.75Z' transform='translate(0 -0.15)'/>
              <path id='we_are_r' className={styles.cls1} d='M200.6,31.45a16.66,16.66,0,0,0-4.4-.6c-6.9,0-11.4,3.6-11.4,13.3v15.4H172.3V20h12.4v6.4c1.8-3.7,6.6-7,12-7a8.9,8.9,0,0,1,3.8.7v11.3h0.1Z' transform='translate(0 -0.15)'/>
              <path id='we_are_e_two' className={styles.cls1} d='M213,42.85c0.2,4.8,2.2,8.8,8.8,8.8,4.3,0,6.5-2,7.3-4.5h12.3c-1.1,7.5-8.2,13.5-19.5,13.5-13.8,0-21.3-8.6-21.3-20.8,0-11.6,7.3-20.8,21-20.8,12.4,0,20.3,8.4,20.3,18a32.45,32.45,0,0,1-.4,5.8H213Zm0-7.2h16.6c0-5.1-3.4-8.3-8.1-8.3C216.5,27.35,213,30.25,213,35.65Z' transform='translate(0 -0.15)'/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

