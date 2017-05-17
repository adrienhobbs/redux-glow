import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Boxing extends BaseTemplate {
  static propTypes = {
    data: PropTypes.object.isRequired
  };
  constructor (props) {
    super(props);
  }

  render () {
    const ResultsSection = this.getResultsTemplate();
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <div className='copy'>
            <div className='copy-inner'>
              <p style={copyStyle}>By focusing on the drama of each fighter's individual story through a dynamic campaign, social media content served as the connection between the fighters and the fans.  Following the dramatic beats of their preparation for the fight instilled awareness, excitement and anticipation.  Through this content, GLOW permanently raised the quality of HBO Boxing social content creative, and is now the standard going forward.</p>
            </div>
          </div>
          <div className='social-strategy'>
            <div className='img-single inner_section'>
              <video width='100%' playsinline preload muted autoPlay loop>
                <source src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/boxing/HBO_boxing_content_wall.mp4' type='video/mp4'/>
              </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxing;
