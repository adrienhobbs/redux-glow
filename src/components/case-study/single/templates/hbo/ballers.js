import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import ResponsiveVideo from '../../../../video/responsive-video.js';

export class Ballers extends BaseTemplate {
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
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <ResponsiveVideo src='http://player.vimeo.com/video/216015518?title=0&byline=0&portrait=0' />
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/ballers/grid_wall.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ballers;
