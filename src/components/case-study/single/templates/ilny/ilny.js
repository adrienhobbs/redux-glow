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
  render () {
    const copyStyle = this.getCopyStyle();
    // const ResultsSection = this.getResultsTemplate();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <article className='strategy'>
            <h1 style={this.getHeadlineStyle()} className='study_headline section_headline'>social strategy</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>To achieve our goals for I Love New York, we first had to assess the situation.  We saw that there was potential for ILNY to break through using great content, but it wasn’t quite there.  We looked at trends across the travel industry as well as the social behaviors of the target.  After cross-referencing them, we found a way in for each of the active platforms that would resonate with followers more than it had been.</p>
                <p style={copyStyle}>For each of the three active platforms (Facebook, Twitter and Instagram), we developed a specific role that would dictate the types of content and voice depending on the audience.  This helped segment out the messaging, ensuring the most relevant content was reaching the most relevant people, and being presented in a way that would stimulate the most engagement.  </p>
                <p style={copyStyle}>Facebook was revitalized as a “social magazine,” offering relevant travel content and posted at times that was optimized for the Gen Xer audience.  Twitter was reshaped in a “social newspaper,” increasing the posting cadence and focusing content around trending topics outside of travel as well as within.  Instagram shifted to be a “social look book,” focusing heavily on the UGC images and using hashtags and geotags to wide the reach of the posts.  </p>
                <p style={copyStyle}>As the platform roles evolved, it was supported with influencer campaigns that took advantage of New York’s busiest and most beautiful months (fall and winter).  With the quality of the photography raised, engagement and visibility for the owned channels went up as well.</p>
                <p style={copyStyle}>Meanwhile, Glow took over editorial duties for the I Love New York’s blog, using the social channels to drive traffic to their site and facilitate trip bookings.</p>
                <p style={copyStyle}>In order to increase brand awareness for two of I Love NY's primary social channels (Facebook and Instagram), GLOW spearheaded a partnership with Beautiful Destinations, the largest travel and lifestyle community on the internet. This partnership exposed I Love NY's content to a combined social audience of over 12 million active users and inspired tangible results in travel across New York state. I Love NY's Instagram followers increased by 125% and engagement across all social platforms over the course of the 3 month partnership totaled 1.9M.</p>
                <p style={copyStyle}>This Fall, GLOW is excited to announce that we've once again launched a partnership with Beautiful Destinations and I Love NY for an even greater campaign to drive awareness to the Catskills. The partnership includes sending four of Beautiful Destinations top content creators to the region to capture imagery, 360 photos, drone and video footage to be shared across all parties social platforms.</p>
              </div>
            </div>
            <div className='img-wrap video-looping-row inner_section'>
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
              <div className='video-looping-full' style={{marginTop: 20}}>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/ilny-social-4.png' alt='' />
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ILNY;

