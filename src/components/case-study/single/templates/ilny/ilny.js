import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class ILNY extends BaseTemplate {
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
    TL.addLabel('start');
    TL.set(this.refs.videoBlock, {width: width, maxWidth: '100%'}, 'start');
    TL.to(this.refs.videoBlock, 0.5, {width: '100%', ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.playBtn, 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, 'start+=0.5');
    TL.add(this.videoPlayNow.bind(this), 'start+=1.5');
    TL.to(this.refs.controls, 0.5, {autoAlpha: 1}, 'start+=1.8');
  }
  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='results' id='results'>
            <div className='results-bg' style={{backgroundColor: this.props.data.get('results').bgColor}}></div>
            <div className='results-outer'>
              <h1 style={this.getHeadlineStyle()} className='page-title'>results</h1>
              <div className='results-inner'>
                <div className='stat-boxes'>
                  <div className='stat-device-left'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        lorem ipsum stat goes here
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        lorem ipsum stat goes here
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        lorem ipsum stat goes here
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        lorem ipsum stat goes here
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='strategy'>
              <h1 style={this.getHeadlineStyle()} className='page-title'>social strategy</h1>
              <div className='copy'>
                <div className='copy-inner'>
                  <p style={copyStyle}>To achieve our goals for I Love New York, we first had to assess the situation.  We saw that there was potential for ILNY to break through using great content, but it wasn’t quite there.  We looked at trends across the travel industry as well as the social behaviors of the target.  After cross-referencing them, we found a way in for each of the active platforms that would resonate with followers more than it had been.</p>
                  <p style={copyStyle}>For each of the three active platforms (Facebook, Twitter and Instagram), we developed a specific role that would dictate the types of content and voice depending on the audience.  This helped segment out the messaging, ensuring the most relevant content was reaching the most relevant people, and being presented in a way that would stimulate the most engagement.  </p>
                  <p style={copyStyle}>Facebook was revitalized as a “social magazine,” offering relevant travel content and posted at times that was optimized for the Gen Xer audience.  Twitter was reshaped in a “social newspaper,” increasing the posting cadence and focusing content around trending topics outside of travel as well as within.  Instagram shifted to be a “social look book,” focusing heavily on the UGC images and using hashtags and geotags to wide the reach of the posts.  </p>
                  <p style={copyStyle}>As the platform roles evolved, it was supported with influencer campaigns that took advantage of New York’s busiest and most beautiful months (fall and winter).  With the quality of the photography raised, engagement and visibility for the owned channels went up as well.</p>
                  <p style={copyStyle}>Meanwhile, Glow took over editorial duties for the I Love New York’s blog, using the social channels to drive traffic to their site and facilitate trip bookings.</p>
                </div>
              </div>
              <div className='img-wrap video-looping-row'>
                <div className='video-looping-full'>
                  <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/social-01.mp4'></video>
                </div>
                <div className='video-looping-full'>
                  <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/social-02.png' alt='' />
                </div>
                <div className='video-looping-half'>
                  <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/social-03.mp4'></video>
                </div>
                <div className='video-looping-half'>
                  <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/social-04.mp4'></video>
                </div>
              </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ILNY;

          // <div className='end'>
          //   <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
          //     <polygon style={{fill: this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
          //   </svg>
          // </div>

// <Results template={'device'} data={this.props.data} bg={this.props.data.get('secColor')} />
