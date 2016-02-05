import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class SouthernKitchen extends BaseTemplate {

  static propTypes = {
    data: React.PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  videoPlayNow () {
    const TL = new TimelineLite();
    TL.add(() => this.refs.video.play());
    return TL;
  }
  pauseVideo () {
    this.refs.video.pause();
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.to(this.refs.videoBlock, 0.7, {maxWidth: '51.25em', ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.playBtn, 0.5, {autoAlpha: 1, ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.controls, 0.5, {autoAlpha: 0}, 'start+=1');
  }
  stopVideo () {
    this.refs.video.stop();
  }
  onVideoClick () {
    const width = this.refs.videoBlock.getBoundingClientRect().width;
    const TL = new TimelineLite();
    // this.refs.videoBlock.webkitRequestFullscreen();
    TL.addLabel('start');
    TL.set(this.refs.videoBlock, {width: width, maxWidth: '100%'}, 'start');
    TL.to(this.refs.videoBlock, 0.5, {width: '100%', ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.playBtn, 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, 'start+=0.5');
    TL.add(this.videoPlayNow.bind(this), 'start+=1.5');
    TL.to(this.refs.controls, 0.5, {autoAlpha: 1}, 'start+=1.8');
  }
  render () {
    // const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='results' id='results'>
            <section className='' style={{backgroundColor: 'rgb(232,232,232)'}}>
              <h2 className='page-title' style={{color: this.props.data.get('headlineColor') || '#000'}}>results</h2>
              <div className='results-inner outer'>
                <div className='results-info-box'>
                  <h2 className='lite'>October 29, 2014</h2>
                  <h1>Successfully raised $264,704 with 1,550 backers.</h1>
                </div>
                <div className='stat-boxes'>
                  {this.getStatContent()}
                </div>
              </div>
            </section>
          </article>
          <article className='video-campaign'>
            <h2 style={this.getHeadlineStyle()} className='page-title'>video campaign</h2>
            <div className='video-block' ref='videoBlock'>
              <video webkit-playsinline ref='video' src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/Carla+Hall+-+Kickstarter-HD.mp4'></video>
              <div ref='playBtn' className='play-button-outer' onClick={this.onVideoClick.bind(this)}>
                <div className='play-button-inner'>
                  <div className='inner-ctr-wrap'>
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
            <div className='copy-inner'>
              <p style={copyStyle}>Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times.  You need me to write it down for you? Well I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me.  Where are you going? So things are quire, y'know? Not a lot of cyrstal on the streets right now. Well, we keep hearing a name.  Heisenberg. Lately pretty much every dimebagger we come across. Yeah, I Know. Maybe it's a tweaker urban legend. Still, somebody somewhere is cooking that big blue we keep finding.</p>
            </div>
            <div className='image-container-large'>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-01.jpg' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-02.jpg' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-03.jpg' />
              </div>
            </div>
            <div className='copy-inner'>
              <p style={copyStyle}>I think you know who Tuco Salamanca was. I think your car was there because you were there. Tuco had a bullet in him when I got there and I think you know something about that, too. Sky, the, um... I know it's none of my business, but uh... keeping him away from the kids? Whoa, whoa, no heavy lifting. I got it. jesus, what you got in there - cinder blocks? If I have to. I think you know who Tuco Salamanca was. i think your car was there</p>
            </div>
          </article>
          <div className='full-width-bg' style={{backgroundImage: 'url(' + this.props.data.get('fullScreenBgImg') + ')'}}></div>
          <article className='social' id='social'>
            <h2 style={this.getHeadlineStyle()} className='page-title'>social campaign</h2>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times.  You need me to write it down for you? Well I'm just saying, y'know, I said Cheetos.Ch-ch-ch sound. Virtually impossible to <span className='link'>confuse Cheetos with Fritos </span>it seems to me.  Where are you going? So things are quire, y'know? Not a lot of cyrstal on the streets right now. Well, we keep hearing a name.  Heisenberg. Lately pretty much every dimebagger we come across. Yeah, I Know. Maybe it's a tweaker urban legend. Still, somebody somewhere is cooking that big blue we keep finding.</p>
              </div>
              <div className='image-large' style={{backgroundImage: 'url(https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/chick-fry.jpg)'}}></div>
              <div className='copy-inner'>
                <p style={copyStyle}>Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times.  You need me to write it down for you? Well I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me.  Where are you going? So things are quire, y'know? Not a lot of cyrstal on the streets right now. Well, we keep hearing a name.  Heisenberg. Lately pretty much every dimebagger we come across. Yeah, I Know. Maybe it's a tweaker urban legend. Still, somebody somewhere is cooking that big blue we keep finding.</p>
              </div>
            </div>
          </article>
          <div className='end'>
            <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
              <polygon style={{fill:  '#c3c3c3'}} points='0,0 1920,314.6 1920,600 0,600 '/>
            </svg>
            <div className='copy' style={{backgroundColor: '#c3c3c3'}}>
              <div className='copy-inner end'>
                <div className='image-large'>
                  <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/social-01.gif' alt='' />
                </div>
                <h2 style={this.getHeadlineStyle()} className='page-title'>recap</h2>
                <p style={copyStyle}>That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default SouthernKitchen;
