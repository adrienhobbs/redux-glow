import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class DogShow extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
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
          <article className='strategy'>
            <h1 style={this.getHeadlineStyle()} className='section_headline study_headline'>strategy + results</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Through social innovation combined with a focused strategy, GLOW launched Westminster Kennel Club into a new and exciting era. Our teams worked together to understand and define clear goals to modernize communication flow and ignite fan engagement in order to reach our younger fan base without isolating the traditional core Westminster demographic.</p>
                <p style={copyStyle}>Throughout the years, GLOW’s diligent community management on Facebook, Twitter & Instagram has earned Westminster a continual rise in engagement and community growth across all three platforms. For the 140th Anniversary Show in 2016 and our fourth year partnering with Westminster, we had our best year yet. Working closely with Snapchat, we launched a Snapchat Live Story that earned staggering results: 100 million Snapchat stories viewed globally in 24 hours. Not to be outdone, the social team shared live behind-the-scenes coverage of the event on Facebook, with three Facebook Live videos garnering a combined reach of 1.2 million and over 450,000 video views. Over that four-day period, we had a total reach of 5.8 million users on Facebook alone. In another platform win, Westminster was one of the first brands to partner with Instagram for the Live Event initiative; a curated mix of branded and influencer video content which was broadcast to 98% of domestic Instagram iPhone users. </p>
                <p style={copyStyle}>We significantly increased our reach to the younger (25-34 years of age) demographic while keeping the core demo (45-64) active and engaged - a core strategic goal. </p>
                <p style={copyStyle}>To better serve our client, we recently kicked-off the ‘Road to Westminster’ campaign to keep Westminster front-of-mind for the audience year-round. We’re continuing to work with the client to improve on this strategy, which has already started seeing incredible results in growth and engagement.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/social-01-2016.png' alt='' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default DogShow;
