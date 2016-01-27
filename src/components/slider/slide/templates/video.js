import React from 'react';
import './video.scss';

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
      <video webkit-playsinline onPlay={this.onLoad} ref='video' className='home-video' muted loop src={this.props.data.get('video')}>
        <p>sorry cant play</p>
      </video>
    );
  },
  render () {
    return (
      <div ref='videoContainer' className='wrapper video-wrapper video-placeholder' style={{height: '100%', width: '100%'}}>
        {this.getVidTemplate()}
        </div>
    );
  }
});

export default Video;

// <div className='vid-box'><img src='/assets/images/test.png' alt=''/></div>
// <div className='wrap' style={{width: '90%'}}>
//  <h1 ref='hdl' className='featured-headline' >we are glow</h1>
//  <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.
//  </p>
// </div>
//
// return (this.getViewportIsSmall())
//   ? <div>
//   <div className='wrap' style={{width: '100%'}}>
//     <h1 ref='hdl' className='featured-headline' >we are glow</h1>
//     <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.  </p>
//   </div>
// </div>
//   : <video onPlay={this.onLoad} ref='video' className='home-video' autoPlay muted loop src={this.props.data.get('video')} />;
//
        // <div ref='vidOverlay' className='video-overlay'></div>
        // <div className='wrap' style={{width: '90%'}}>
        //   <h1 ref='hdl' className='featured-headline' >we are glow</h1>
        //   <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.
        //     </p>
        //   </div>
        //   <p ref='scroll' className='scroll-down'>scroll <br/> <span className='arrow'>&#8595;</span></p>
