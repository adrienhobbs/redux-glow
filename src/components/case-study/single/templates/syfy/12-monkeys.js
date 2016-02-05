import React from 'react';
import shader from 'constants/shade-blender';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
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
    const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
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
            <h1 style={this.getHeadlineStyle()} className='page-title'>strategy</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week. That's right. Two pounds a week, thirty-five thousand a pound. Look... I feel like I'm running out of ways to explain this to you but once more, I shall try. <span style={subStyle}>This fly is a major problem for us. </span>It will ruin our batch. And we need to destroy it and every trace of it, so we can cook.</p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/proof-1.png' alt='' />
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/proof-2.png' alt='' />
            </div>
            <div className='end'>
              <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
                <polygon style={{fill: this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
              </svg>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default TwelveMonkeys;

