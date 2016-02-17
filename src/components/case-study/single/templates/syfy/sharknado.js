import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Sharknado extends BaseTemplate {

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
              <h1 style={this.getHeadlineStyle()} className='study_headline section_headline'>results</h1>
              <div className='results-inner'>
                <div className='stat-boxes'>
                  <div className='stat-device-left'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        #Trending
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Trended #1 in U.S. & #2 across the planet
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        6m
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        video views
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        100%
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                       increase in Twitter traffic
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        2b
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Twitter impressions
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('approach')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>We knew we had a record to beat and that’s just what we did. We wanted to ensure that Americans had no excuse to not be talking about the third ‘Nado on social on day of premiere. To make Sharknado sized waves on social, the team developed and executed a strategy that engaged fans and influencers, created best in-class creative, and dominated the social conversation on July 22. </p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-01.png' alt='' />
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('twitter war room')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>For this 3rd installment of the franchise, we were armed and ready to slay a "night of" event that led to 2 Billion Twitter impressions. Our War Room consisted of 8 community managers tasked with pushing out hilarious GIFs and statics of the movie, responding to fans while tracking hashtags, @mentions, keywords, influencers, Facebook mentions, cast, and brand sponsors. We also deployed 3 social managers handling trend alerts and featured on-air tweets along with art directors and designers churning out social content to feed the social frenzy.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-02.jpg' alt='' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Sharknado;
