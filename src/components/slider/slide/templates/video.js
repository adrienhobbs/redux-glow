import React from 'react';
import styles from './video-slide.css';
import DriveIn from 'react-drive-in';

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

  onCanPlay () {
    this.videoWrap = document.getElementsByClassName('drive-in-media');
    this.video     = this.videoWrap[0].getElementsByTagName('video')[0];
    TweenLite.to(this.refs.videoIntro, 0.6, {autoAlpha: 0, ease: Expo.easeInOut});
    TweenLite.to([this.refs.p, this.refs.hdl], 0.6, {color: '#ffffff', ease: Expo.easeInOut});
  },
  componentDidUpdate () {
    if (this.props.position !== 'center') {
      this.props.TL.eventCallback('onComplete', () => { this.video.pause(); });
    } else if (this.props.position === 'center') {
      this.video.play();
    }
  },

  restartTL () {
    this.tl.restart();
  },

  render () {
    return (
      <div ref='videoContainer' className={styles.video_placeholder}>
        <div className={styles.overlay}></div>
        <DriveIn ref='video' onCanPlay={this.onCanPlay} show={[this.props.data.get('video'), 'https://s3.amazonaws.com/weareglow-assets/assets/video/Glow_Website_Animatic_poster.jpg']} />
        <div ref='videoIntro' className={styles.video_intro}>
        </div>
        <div className={styles.copy_wrap}>
          <h1 ref='hdl' className={styles.featured_headline}>
            <span>we are GLOW</span>
          </h1>
          <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.</p>
        </div>
        <p ref='scroll' className={styles.scroll_down}>scroll <br/> <span className='arrow'>&#8595;</span></p>
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
