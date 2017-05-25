import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import ResponsiveVideo from 'components/video/responsive';

export class ILNY extends BaseTemplate {
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
            <h1 style={this.getHeadlineStyle()} className='study_headline section_headline'>influencer strategy</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>GLOW identified an opportunity to connect with consumers and inspire travel to the Catskills during the Fall season. By partnering with Beautiful Destination, a strategic campaign was developed to leverage the social influence of their content creators to reach our target demographic and a content aesthetic that would perform at top levels across I LOVE NEW YORK’s social channels.</p>
                <p style={copyStyle}>The content creators were sent to the Catskills to capture photo, video and real-time social content using the latest drone and 360 degree camera technology. Using insights from past campaigns, we positioned the content to capture the activities that we knew would draw our target audience. The content created a comprehensive story of a journey to the Catskills producing a holistic campaign of visual storytelling on social, which was elevated with paid support. Though our strategy was to use a breadth of channels to ensure that we reach our audience wherever they happen to be, our execution leveraged specific platform features to maximize each channel – such as Snapchat and Instagram Stories, Facebook Live and 360, and native video posts.  </p>
                <p style={copyStyle}>Launching the content on Beautiful Destinations brand and creator channels with a push to I LOVE NEW YORK and Catskills regional and county accounts allowed us to leverage new audiences and to tell a deeper story for those who wanted to explore more.  By encouraging social conversations, we were able to start a dialogue around travel to the Catskills with users tagging their friends and, in some cases, beginning the trip planning process directly in the comments.</p>
                <p style={copyStyle}>The campaign successfully drove travel. Using geo-tags on Instagram, Beautiful Destinations was able to identify that users who engaged with campaign content on the platform not only traveled to the Catskills during the Fall, but also became advocates by sharing their own travel photos to Instagram. </p>
              </div>
            </div>
          </article>
          <article>
            <div className='img-single inner_section'>
              <ResponsiveVideo style={{paddingBottom: '41.25%'}} src='https://player.vimeo.com/video/218172884' />
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/iloveny/social-retainer/ilny_content_wall.png' alt='ilny' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ILNY;
