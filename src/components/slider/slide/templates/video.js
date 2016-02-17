import React from 'react';
import styles from './video-slide.css';

const Video = React.createClass({
  propTypes: {
    viewport: React.PropTypes.object,
    data: React.PropTypes.object,
    TL: React.PropTypes.object,
    position: React.PropTypes.string
  },
  getInitialState () {
    return {
      hasVideo: null
    };
  },

  componentDidMount () {
    this.refs.video.play();
    // this.paramsIn = {rotationX: 0, transformOrigin: '50% 0%', transformPerspective:400, ease: Expo.easeInOut};
    // this.inDur = 0.5;
    // this.outDur = 0.5;
    // this.alphaInDur = 0.25;
    // this.alphaInDur = 0.25;
    // this.alphaOutDur = 0.2;
    // this.animateHeadline();
    //
  },

  headlineOneInTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlOne, this.inDur, this.paramsIn), 'start');
    TL.add(TweenLite.to(this.refs.hdlOne, this.alphaInDur, {autoAlpha: 1}), 'start+=0.25');
    return TL;
  },
  headlineOneOutTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlOne, this.outDur, {rotationX: '180deg', transformOrigin: '50% 0%', transformPerspective:400, ease: Quart.easeInOut}, 'start'));
    TL.add(TweenLite.to(this.refs.hdlOne, this.alphaOutDur, {autoAlpha: 0}), 'start+=0.1');
    return TL;
  },
  headlineTwoInTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlTwo, this.inDur, this.paramsIn), 'start');
    TL.add(TweenLite.to(this.refs.hdlTwo, this.alphaInDur, {autoAlpha: 1}), 'start+=0.25');
    return TL;
  },
  headlineTwoOutTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlTwo, this.outDur, {rotationX: '180deg', transformOrigin: '50% 0%', transformPerspective:400, ease: Quart.easeInOut}, 'start'));
    TL.add(TweenLite.to(this.refs.hdlTwo, this.alphaOutDur, {autoAlpha: 0}), 'start+=0.1');
    return TL;
  },
  headlineThreeInTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlThree, this.inDur, this.paramsIn), 'start');
    TL.add(TweenLite.to(this.refs.hdlThree, this.alphaInDur, {autoAlpha: 1}), 'start+=0.25');
    return TL;
  },
  headlineThreeOutTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlThree, this.outDur, {rotationX: '180deg', transformOrigin: '50% 0%', transformPerspective:400, ease: Quart.easeInOut}, 'start'));
    TL.add(TweenLite.to(this.refs.hdlThree, this.alphaOutDur, {autoAlpha: 0}), 'start+=0.1');
    return TL;
  },
  headlineFourInTl () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.add(TweenLite.to(this.refs.hdlFour, this.inDur, this.paramsIn), 'start');
    TL.add(TweenLite.to(this.refs.hdlFour, this.alphaInDur, {autoAlpha: 1}), 'start+=0.25');
    return TL;
  },

  animateHeadline () {
    this.tl = new TimelineLite();
    this.tl.addLabel('start');
    this.tl.addLabel('headlineOneIn', 'start+=3');
    this.tl.addLabel('headlineOneOut', 'start+=6');
    this.tl.addLabel('headlineTwoIn', 'start+=7');
    this.tl.addLabel('headlineTwoOut', 'start+=10');
    this.tl.addLabel('headlineThreeIn', 'start+=11');
    this.tl.addLabel('headlineThreeOut', 'start+=14');
    this.tl.addLabel('headlineFourIn', 'start+=15');
    this.tl.set([this.refs.hdlOne, this.refs.hdlTwo, this.refs.hdlThree, this.refs.hdlFour], {autoAlpha: 0, rotationX: '-180deg', transformOrigin: '50% 100%', transformPerspective: 500});
    this.tl.add(this.headlineOneInTl, 'headlineOneIn');
    this.tl.add(this.headlineOneOutTl, 'headlineOneOut');
    this.tl.add(this.headlineTwoInTl, 'headlineTwoIn');
    this.tl.add(this.headlineTwoOutTl, 'headlineTwoOut');
    this.tl.add(this.headlineThreeInTl, 'headlineThreeIn');
    this.tl.add(this.headlineThreeOutTl, 'headlineThreeOut');
    this.tl.add(this.headlineFourInTl, 'headlineFourIn');
    this.tl.play();
  },

  componentDidUpdate () {
    if (this.props.position !== 'center') {
      this.props.TL.eventCallback('onComplete', () => { this.refs.video.pause(); });
    } else if (this.props.position === 'center') {
      this.refs.video.play();
    }
  },

  onLoad () {
    // TweenLite.to([this.refs.hdl, this.refs.p, this.refs.scrollDown, this.refs.arrow], 1, {color: 'white', fill: 'white', ease: Expo.easeInOut});
    // TweenLite.to(this.refs.vidOverlay, 1, {
    //   backgroundColor: 'gray',
    //   opacity: 0.1,
    //   transformOrigin: 'bottom center',
    //   ease: Expo.easeInOut
    // });
  },
  getVidTemplate () {
    return (
      <video
        preload
        webkit-playsinline
        poster='https://s3.amazonaws.com/weareglow-assets/assets/video/home-poster.jpg'
        onPlay={this.onLoad}
        ref='video'
        className={styles.home_video}
        muted
        loop
        src={this.props.data.get('video')}>
        <p>sorry cant play</p>
      </video>
    );
  },

  restartTL () {
    this.tl.restart();
  },

  render () {
    return (
      <div ref='videoContainer' className={styles.video_placeholder}>
        <div className={styles.overlay}></div>
        {this.getVidTemplate()}

      </div>
    );
  }
});

export default Video;

          // <div className='restart' onClick={this.restartTL} ref='restart' style={{position: 'relative', top: -50, width: 200, background: 'black', margin: 'auto'}}>restart</div>
            // <span ref='words' className='words-wrapper'>
            //   <b ref='hdlOne'>social</b>
            //   <b ref='hdlTwo'>digital</b>
            //   <b ref='hdlThree'>cool</b>
            //   <b ref='hdlFour'>glow</b>
            // </span>
// //        <div className={styles.copy_wrap}>
//           <h1 ref='hdl' className={styles.featured_headline}>
//             <span>we are glow</span>
//           </h1>
//           <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.</p>
//         </div>
//         <p ref='scroll' className={styles.scroll_down}>scroll <br/> <span className='arrow'>&#8595;</span></p>
