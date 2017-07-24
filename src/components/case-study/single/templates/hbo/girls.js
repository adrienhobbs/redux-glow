import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Girls extends BaseTemplate {
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
          <ResultsSection hideHeadline data={this.props.data} />
          <div className='social-strategy'>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The social strategy celebrated the nostalgia and evolution of the GIRLS through custom, snackable social content that highlighted fan favorite moments throughout the years, emphasizing the wit and humor of the show. The overall look and feel was deeply tinged with nostalgia through sunset-hued gradients, rose-colored treatments and glowing transparent text.</p>
                <p style={copyStyle}>GIRLS delivered an incredible final season and HBO and GLOW matched that with a campaign that achieved its goals while showing the HBO viewer the respect it has for its talent and the creative process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Girls;
