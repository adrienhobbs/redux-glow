import React, { PropTypes } from 'react';
import du from 'domutil';
import './video.scss';

export class VideoComponent extends React.Component {
  static propTypes = {
    videoSrc: PropTypes.string.isRequired,
    posterImg: PropTypes.string,
    bgColor: PropTypes.string,
    btnColor: PropTypes.string,
    autoplay: PropTypes.bool,
    showBtn: PropTypes.bool,
    loop: PropTypes.bool
  };

  static contextTypes = {
    viewport: PropTypes.object
  };

  componentDidMount () {
    if (this.props.autoplay) {
      this.onVideoClick();
    }
  }

  constructor (props) {
    super(props);
    this.state = {
      isStopped: true,
      isPlaying: false
    };
  };

  videoPlayNow () {
    const TL = new TimelineLite();
    TL.add(() => this.refs.video.play());
    return TL;
  }

  pauseVideo () {
    this.refs.video.pause();
    this.resetVideo();
  }

  stopVideo () {
    this.refs.video.stop();
  }

  onVideoClick () {
    if (this.state.isStopped) {
      this.playVideo();
      this.setState({isStopped: false, isPlaying: true});
    } else if (this.state.isPlaying) {
      this.pauseVideo();
      this.setState({isStopped: true, isPlaying: false});
    }
    du.toggleClass(this.refs.videoBlock, 'isStopped');
    du.toggleClass(this.refs.videoBlock, 'isPlaying');
  }

  playVideo () {
    const width = this.refs.videoBlock.getBoundingClientRect().width;
    const TL = new TimelineLite();
    TL.addLabel('start');
    // TL.set(this.refs.videoBlock, {width: width, maxWidth: '100%'}, 'start');
    TL.to(this.refs.videoBlock, 0.5, {width: '100%', ease: Expo.easeInOut}, 'start+=0.5');

    if (this.props.showBtn) {
      TL.to(this.refs.playBtn, 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, 'start+=0.5');
      TL.to(this.refs.controls, 0.5, {autoAlpha: 1}, 'start+=1.8');
    }

    TL.add(this.videoPlayNow.bind(this), 'start+=1.5');
  }

  resetVideo () {
    if (!this.props.autoplay) {
      const TL = new TimelineLite();
      TL.addLabel('start');
      // TL.to(this.refs.videoBlock, 0.7, {maxWidth: '51.25em', ease: Expo.easeInOut}, 'start+=0.5');
      if (this.props.showBtn) {
        TL.to(this.refs.playBtn, 0.5, {autoAlpha: 1, ease: Expo.easeInOut}, 'start+=0.5');
        TL.to(this.refs.controls, 0.5, {autoAlpha: 0}, 'start+=1');
      }
    }
  }

  getMobileVideo () {
    return (
      <div className='video-block-mobile'>
        <video ref='video' className='mobile-video' controls src={this.props.videoSrc} poster={this.props.posterImg}></video>;
      </div>
    );
  }

  restartVideo () {
    this.refs.video.play();
  }

  getBtn () {
    if (this.props.showBtn) {
      return (
        <div>
          <div ref='playBtn' className='play-button-outer'>
            <div className='play-button-inner'>
              <div className='inner-ctr-wrap' style={{backgroundColor: this.props.btnColor || '000'}}>
                <div className='inner-ctr'>
                  <div className='inner-btn'>
                    <svg width='22px' height='28px' viewBox='0 0 22 28' version='1.1'>
                      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                        <g id='1450930478_ic_play_arrow_48px'  transform='translate(-854.000000, -2242.000000)' fill='#FFFFFF'>
                          <path d='M854,2242 L854,2270 L876,2256 L854,2242 Z' id='play-button'></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='controls' ref='controls'>
            <div style={{display: 'none'}} className='stop-button-ctr' onClick={this.stopVideo.bind(this)} ref='stopBtn'>
              <svg className='stop-button' height='32px' version='1.1' viewBox='0 0 32 32' width='32px' >
                <g id='_x34__audio_stop'><path d='M26.167,4.833H5.833c-0.552,0-1,0.448-1,1v20.334c0,0.553,0.448,1,1,1h20.334c0.553,0,1-0.447,1-1V5.833   C27.167,5.281,26.72,4.833,26.167,4.833z'/></g>
              </svg>
            </div>
            <div className='pause-button-ctr' onClick={this.pauseVideo.bind(this)} ref='pauseBtn' >
              <svg className='pause-button' height='512px' id='Layer_1' version='1.1' viewBox='0 0 512 512' width='512px'>
                <g><path d='M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z'/><path d='M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z'/></g>
              </svg>
            </div>
          </div>
        </div>
      );
    }
  }
  onEnd () {
    (this.props.loop) ? this.resetVideo() : this.restartVideo();
  }
  getDesktopVideo () {
    return (
      <div className='video-block isStopped' onClick={this.onVideoClick.bind(this)} ref='videoBlock' style={{backgroundColor: this.props.bgColor || '000'}}>
        <div className='video-block-inner'>
          <video onEnded={this.onEnd.bind(this)} webkit-playsinline ref='video' src={this.props.videoSrc} poster={this.props.posterImg}></video>
          {this.getBtn()}
        </div>
      </div>
    );
  }
  getVideoContent () {
    return (this.context.viewport.isMobile) ? this.getMobileVideo() : this.getDesktopVideo();
  }
  render () {
    return (
      <div> {this.getVideoContent()} </div>
    );
  }
}

export default VideoComponent;
