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
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='results' id='results'>
            <div className='results-bg' style={{backgroundColor: this.props.data.get('results').bgColor}}></div>
            <div className='results-outer'>
              <h1 style={this.getHeadlineStyle()} className='section_headline study_headline'>results</h1>
              <div className='results-inner'>
                <div className='stat-boxes'>
                  <div className='stat-device-left'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        26m
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        2015 Snapchat Live Stories
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        7.8m
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        users reached over Facebook over the 2015 shows 4 days - a record
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        doubled+
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        the size of the instagram <br /> community in 4d period
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        50k+
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        visitors driven to WKC website from social
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
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

// <Results template={'device'} data={this.props.data} bg={this.props.data.get('secColor')} />
// <div className='end'>
//   <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
//     <polygon style={{fill: this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
//   </svg>
// </div>
