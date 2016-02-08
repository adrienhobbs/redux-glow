import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import Video from 'components/video/video.js';

export class TwelveMonkeys extends BaseTemplate {
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
                       100k
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Facebook Fans in season 1
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        55%
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Increase in organic page likes
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Total pieces of social content & video created
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        120+
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Display media units created
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='strategy'>
            {this.createHeadlineEl('strategy')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Our goals were clear: amplify awareness in key audience categories with display and content, and build community among hardcore and casual fans of Syfy/12 Monkeys/ Terry Gilliam fans throughout social.  </p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/strategy-01.jpg' alt='' />
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/strategy-02.png' alt='' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The result was a passionate fan base on FB with more than 100k fans engaging regularly with show content and almost 16k fans on Twitter discussing the show weekly.  We delivered a massive display campaign packed with rich media, high impact placements and sampling opportunity, and a site experience that launched in two phases, pre and post premiere.  The site evolved weekly alongside the series where fans could return throughout the season for a deeper dive into time travel, information and content. </p>
              </div>
            </div>
            <Video btnColor='#000' bgColor='#000' videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/site-01.mp4' />
            <Video btnColor='#000' bgColor='#000' videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/site-02.mp4' />
          </article>
        </div>
      </div>
    );
  }
}

export default TwelveMonkeys;

            // <div className='end'>
            //   <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
            //     <polygon style={{fill: this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
            //   </svg>
            // </div>
