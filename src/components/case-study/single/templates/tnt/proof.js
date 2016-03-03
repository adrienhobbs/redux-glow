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
    const ResultsSection = this.getResultsTemplate();

    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <article className='strategy'>
            {this.createHeadlineEl('approach')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>GLOW crafted an integrated marketing creative strategy to embrace both skeptics and believers using display and social channels to expand awareness for the new show.   We provided entry points to the conversation within media through the hashtags #ihaveproof and #ineedproof, and developed a series of similar creative elements for TNT’s social properties.</p>
                <p style={copyStyle}>We approached the Rich Media inventory with sampling as a key goal, and leveraged the placements’ capabilities to provide multiple opportunities to view different content within units, and developed high impact custom units that used large-format video to break through the ad clutter.</p>
                <p style={copyStyle}>The creative approach worked.  By organically incorporating the social hashtag elements into the creative, we leveraged the reach of the media campaign to drive the audience directly to the conversation on social, spiking conversation leading up to premiere and providing sustained engagement among fans for the length of the campaign.</p>
              </div>
            </div>
            <div className='inner_section'>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/media-01.png' alt='' />
              </div>
              <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tnt/proof/media-02.jpg' alt='' />
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Proof;

