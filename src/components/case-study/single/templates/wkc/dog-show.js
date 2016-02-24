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
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <article className='strategy'>
            <h1 style={this.getHeadlineStyle()} className='section_headline study_headline'>strategy + highlights</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Through social innovation combined with a focused strategy, GLOW launched Westminster Kennel Club into a new and exciting era. Our teams worked together to understand and define clear goals to modernize communication flow and ignite fan engagement in order to reach our younger fan base without isolating the traditional core Westminster demographic. </p>
                <p style={copyStyle}>GLOW launched a redesigned Facebook and Twitter presence in conjunction with the creation of custom content to provide WKC with a new way to engage and interact with fans. Twitter community growth increased significantly through the use of the #WKCDogShow hashtag, and overall yielded a striking number of impressions throughout the competition. The WKC Instagram community more than doubled in a four day period and diligent community management throughout the years has earned a continual rise in Instagram engagement. In 2015, the third year of our partnership, we recorded two massive wins.  Working closely with Snapchat, we launched a Snapchat Live Story that earned staggering results: 26 million Snapchat stories viewed across the event weekend! Not to be outdone, 7.8 million users were reached over the same 4 day period via Facebook - a record.  We significantly increased our reach to the younger (25-34 years of age) demographic while keeping the core demo (45-64) active and engaged - a core strategic goal. Generating site traffic remains an important goal and our social efforts have driven more traffic than ever to the WKC website.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/social-01.png' alt='' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default DogShow;

