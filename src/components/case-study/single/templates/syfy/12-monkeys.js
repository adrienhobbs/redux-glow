import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import Video from 'components/video/video.js';
import Results from 'components/case-study/content-modules/results';
export class TwelveMonkeys extends BaseTemplate {
  static propTypes = {
    data: PropTypes.object
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
          <Results data={this.props.data} />
          <div className='copy'>
            <div className='copy-inner'>
              <p style={copyStyle}>By creating a dynamic interactive experience, a compelling social media content campaign, and a targeted digital media campaign ensured viewers were met at every opportunity with variations of 12 Monkeys content and messaging geared for each platform. Consolidating all asks of a campaign into one agency allowed for extreme efficiencies and shared platform learnings—paving the way for GLOW to deliver a successful campaign across the board.</p>
              <p style={copyStyle}>Overall, during January to May 2015, the 12 Monkeys Time Map on Syfy.com exceeded expectations on total page views, uniques, and site visits and garnered a time spent average of 3+ minutes per visit, which is an outstanding “dwell time” that’s notably above industry average. </p>
            </div>
          </div>
          <article className='strategy'>
            {this.createHeadlineEl('approach')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The heart of the campaign was the digital Time Map activation that lived on Syfy.com, which GLOW designed and produced. We put animation and interactivity at the forefront so the user could learn and digest the action at their own pace as they watched the timeline “build” over the course of the 13 weeks that the series aired. </p>
              </div>
              <Video autoplay btnColor='#000' bgColor='#1D1D1D' videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/site-01.mp4' />
              <div className='copy-inner'>
                <p style={copyStyle}>Each week, the Time Map would update with the new episode’s time travel, which was depicted with photos and video clips directly from the show as well as text-based summaries all working together to contextualize and dramatize several of James Cole’s “jumps.” We outfitted the Time Map with a number of special features to help both casual viewers as well as superfans delve as deep as they wanted to. Users could look at individual episodes and explore the jumps, toggle through the entire timeline episode by episode, or turn on the “onion skin” function to see the buildup of all the time travel throughout the course of the series while still being able to scroll through episode by episode. The Time Map updates were also optimized on mobile so the audience could have a similarly rich experience no matter what device they were using.  </p>
              </div>
              <Video autoplay btnColor='#000' bgColor='#1D1D1D' videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/site-02.mp4' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>To extend the Time Map activation socially on Twitter and Facebook beyond our regular teaser posts, each week we created special content to push to the Time Map’s newest update. We also produced exclusive “When Is Cole?” video episode recaps that combined show clips and animations from the Time Map.  All of the social content served as drivers back to the Time Map and to support tune in to the series. Syfy supported the Time Map on air with promo spots. </p>
                <p style={copyStyle}>Finally, GLOW designed and developed the digital media campaign for both desktop and mobile. The digital media campaign ran in tandem with the interactive and social experiences to serve the goal of wide-reaching tune in awareness for audiences outside of Syfy’s owned media channels. Eye-catching design and animation brought the 12 Monkeys key art to life in a visually eerie way. </p>
              </div>
            </div>
            <div className='inner_section'>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/media-01.png' alt='' />
              </div>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/social-01.png' alt='' />
              </div>
            </div>
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
//
          // <article className='results' id='results'>
          //   <div className='results-bg' style={{backgroundColor: this.props.data.get('results').bgColor}}></div>
          //   <div className='results-outer'>
          //     <h1 style={this.getHeadlineStyle()} className='page-title'>results</h1>
          //     <div className='results-inner'>
          //       <div className='stat-boxes'>
          //         <div className='stat-device-left'>
          //           <div className='stat-box-device'>
          //             <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
          //               100k
          //             </div>
          //             <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
          //               Facebook Fans in season 1
          //             </h5>
          //           </div>
          //           <div className='stat-rule'></div>
          //           <div className='stat-box-device'>
          //             <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
          //               55%
          //             </div>
          //             <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
          //               Increase in organic page likes
          //             </h5>
          //           </div>
          //         </div>
          //         <div className='stat-device-image'>
          //           <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/12-monkeys/device.png' alt='' />
          //         </div>
          //         <div className='stat-device-right'>
          //           <div className='stat-box-device'>
          //             <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
          //               0000
          //             </div>
          //             <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
          //               Total pieces of social content & video created
          //             </h5>
          //           </div>
          //           <div className='stat-rule'></div>
          //           <div className='stat-box-device'>
          //             <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
          //               120+
          //             </div>
          //             <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
          //               Display media units created
          //             </h5>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </article>
