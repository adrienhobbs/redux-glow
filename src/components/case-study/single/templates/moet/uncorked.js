import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import ResponsiveVideo from 'components/video/responsive';

export class Uncorked extends BaseTemplate {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <h2 className='study_headline' style={this.getHeadlineStyle()}>promo cut</h2>
          <div className='social-strategy'>
            <div className='img-single inner_section'>
              <ResponsiveVideo src='https://player.vimeo.com/video/218979738' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>GLOW worked with Believe on concepting and casting, and took on full production and post-production duties, creating the first two episodes of the eventual 10 part series slated for release across Time Inc. properties mid-summer 2017. GLOW also produced a slew of ancillary social content to support each five-minute episodes, with pieces for FaceBook, Twitter and Instagram. The resulting episodes and social content perfectly capture the essence of the iconic Moet Chandon brand. At the same time, our content successfully updates the tone and look-and-feel of Moet for the millennial audience.</p>
                <p style={copyStyle}>For the three-day shoot in Downtown Manhattan, GLOW's production staff organized a 45-person crew of production technicians and assistants. The episodes were directed by our Dir. of Video Production. The multi-camera shoot was captured using the RED Dragon 4k Camera. GLOW handled everything from set design to product shots. Our in-house post team of editors and motion designers did full color grading, edit and logo motion treatments on the content.</p>
              </div>
            </div>
          </div>
          <div className='social-strategy'>
            <h2 className='study_headline' style={this.getHeadlineStyle()}>behind the scenes</h2>
            <div className='img-single inner_section'>
              <ResponsiveVideo src='https://player.vimeo.com/video/218974208' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Uncorked;
