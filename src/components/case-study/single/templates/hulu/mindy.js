import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Mindy extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  getStatContent () {
    return this.props.data.get('results').stats.map((stat, i) => {
      return (
        <div key={i} className='stat-box-triple'>
          <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
            {stat.stat}
          </div>
          <div style={{color: this.props.data.get('results').statLabelColor}} className='stat-label'>
            {stat.label}
          </div>
        </div>
      );
    });
  }
  render () {
    // const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{fontWeight: 300, background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='approach'>
            {this.createHeadlineEl('social centric')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/social01.jpg' alt='mindy project social centric' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The Hulu Periscope and Snapchat were used during the red carpet premiere, connecting the Hulu brand to the series in real time. We also elevated the brand presence across social implementing a new official hashtag, #MindyOnHulu. Further connecting fans of the series to its new home on Hulu we launched the #MindyOnHulu Welcome Party across Facebook, Twitter, Instagram, and the Hulu Snapchat.</p>
                <p style={copyStyle}>Community management efforts were focused on making the platforms the ideal home for a continued conversation between the official series account and fans, culminating in a truly successful campaign, securing huge subscription growth week over week for the streaming service via social marketing efforts alone.</p>
              </div>
            </div>
          </article>
          <div className='img-single inner_section' >
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/social02.jpg' alt='mindy project social centric' />
          </div>
        </div>
      </div>
    );
  }
}

export default Mindy;
