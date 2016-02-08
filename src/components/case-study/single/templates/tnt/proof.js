import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Proof extends BaseTemplate {
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
              <h1 style={this.getHeadlineStyle()} className='page-title'>results</h1>
              <div className='results-inner'>
                <div className='stat-boxes'>
                  <div className='stat-device-left'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        6.9 Million
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        video views
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        400K+
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        clicks
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        30 Million
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        unique visitors reached
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        0000
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        lorem ipsum stat goes here
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className='strategy'>
            {this.createHeadlineEl('approach')}
              <div className='copy'>
                <div className='copy-inner'>
                  <p style={copyStyle}>GLOW crafted an integrated marketing creative strategy to embrace both skeptics and believers using display and social channels to expand awareness for the new show.   We provided entry points to the conversation within media through the hashtags #ihaveproof and #ineedproof, and developed a series of similar creative elements for TNT’s social properties.</p>
                  <p style={copyStyle}>We approached the Rich Media inventory with sampling as a key goal, and leveraged the placements’ capabilities to provide multiple opportunities to view different content within units, and developed high impact custom units that used large-format video to break through the ad clutter.</p>
                  <p style={copyStyle}>The creative approach worked.  By organically incorporating the social hashtag elements into the creative, we leveraged the reach of the media campaign to drive the audience directly to the conversation on social, spiking conversation leading up to premiere and providing sustained engagement among fans for the length of the campaign.</p>
                </div>
              </div>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/media-01.png' alt='' />
              </div>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/media-02.jpg' alt='' />
              </div>
          </article>

        </div>
      </div>
    );
  }
}

export default Proof;

// <Results template={'device'} data={this.props.data} bg={this.props.data.get('secColor')} />
// //          <div className='end'>
//             <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
//               <polygon style={{fill: this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
//             </svg>
//           </div>
