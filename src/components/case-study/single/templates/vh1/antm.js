import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class ANTM extends BaseTemplate {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  constructor (props) {
    super(props);
  }

  render () {
    const ResultsSection = this.getResultsTemplate();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <div className='social-strategy'>
            <h2 className='study_headline' style={this.getHeadlineStyle()}>social content</h2>
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>For premiere, ANTM released an innovative, first-to-market Snapchat lens that gave fans the opportunity to engage with a mini photo shoot, complete with a contact sheet of images they could share to their story. At the 10pm premiere hour on December 12, ANTM social was LIVE on every platform, partnering with GIPHY to live-GIF top moments from the show.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/social-01.png' alt='' />
            </div>
            <div className='media-campaign'>
              <h2 className='study_headline' style={this.getHeadlineStyle()}>360° & interactive FB lives</h2>
              <div className='copy'>
                <div className='copy-inner'>
                  <p style={this.getCopyStyle()}>As the campaign moved in season, ANTM took advantage of novel social technology at every opportunity, episodically releasing composited 360 photos/videos from photoshoot challenges, Instagram Live Aftershows with panelist Drew Elliott, Live Snapping by former contestant Will Jardell, Live Tweeting and custom Facebook LIVE videos, creating a deep second screen experience. After contestants were eliminated, we featured exclusive Q&As and thank you videos for their fans on Snapchat and Instagram Stories.</p>
                </div>
              </div>
              <div className='copy'>
                <div className='copy-inner'>
                  <p style={this.getCopyStyle()}>This was constantly met with "always-on" community management that proved to the fans that ANTM is listening. Cultivating the knowledge we gained from the fan base for finale, GLOW ideated & executed the first-ever Facebook Live Fan Challenge Photoshoot hosted by Drew Elliott bringing fan-favorite contestants back for one last challenge. The FB Live featured multiple live fan polling elements and user highlighted commentary helping to direct an actual photoshoot. It's above and beyond how brands are currently executing FB Live, a precise production for social driving finale tune-in.</p>
                </div>
              </div>
              <div className='img-single inner_section'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/media-01.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ANTM;

// <div className='end'> <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
//     <polygon style={{fill:  this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
//   </svg>auto
// </div>
