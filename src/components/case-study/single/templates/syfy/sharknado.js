import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Sharknado extends BaseTemplate {
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
          <article className='approach'>
            {this.createHeadlineEl('approach')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>We knew we had a record to beat and that’s just what we did. We wanted to ensure that Americans had no excuse to not be talking about the third ‘Nado on social on the day of premiere. To make Sharknado-sized waves on social, the team developed and executed a strategy that engaged fans and influencers, created best-in-class creative, and dominated the social conversation on July 22. </p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-01.png' alt='' />
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('twitter war room')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>For this third installment of the franchise, we were armed and ready to slay a "night of" event that led to 2 Billion Twitter impressions. Our War Room consisted of 8 community managers tasked with pushing out hilarious GIFs and statics of the movie, responding to fans while tracking hashtags, @ mentions, keywords, influencers, Facebook mentions, cast, and brand sponsors. We also deployed 3 social managers, who handled trend alerts and curated tweets to feature on-air, along with art directors and designers who churned out social content to feed the social frenzy.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-02.jpg' alt='' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Sharknado;
