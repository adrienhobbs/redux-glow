import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import Video from 'components/video/video.js';

export class TwelveMonkeys extends BaseTemplate {
  static propTypes = {
    data: PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  render () {
    const copyStyle = this.getCopyStyle();
    const ResultsSection = this.getResultsTemplate();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
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

