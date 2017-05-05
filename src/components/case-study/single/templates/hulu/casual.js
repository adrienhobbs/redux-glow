import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Casual extends BaseTemplate {

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
    return (
      <div ref='studyContent' className='study-content' style={{fontWeight: 300, background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='approach'>
            {this.createHeadlineEl('social awareness')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/casual/social01.jpg' alt='casual social awareness' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Casual;
