import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import LoopingVideo from '../../../../video/looping-video.js';
import styles from './night-of.css';

export class NightOf extends BaseTemplate {
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
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>In order to get people to the pilot and get them hooked, we utilized sampling tactics such as critic praise quote cards and captivating countdowns which resulted in 1.5 million people streaming the first episode on HBO NOW and HBO GO before the premiere.</p>
              </div>
            </div>
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>Each week, we highlighted the breathtaking cinematography through gritty, visually compelling GIFs, character-based cinemagraphs, and video quote cards.  To spark conversation, we emphasized quotes that played to the philosophical edge of the series as well as in real life facts about the judicial system.  All content was showcased on The Night Of’s Facebook Page and HBO’s Twitter account.</p>
              </div>
            </div>
            <div className='img-single'>
              <div className={styles.fullWidth}>
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-one.mp4' />
              </div>
              <div className={styles.row}>
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-two.mp4' />
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-three.mp4' />
              </div>
              <div className={styles.row}>
                <div className='inner_section'><img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-four.jpg' alt=''/></div>
                <div className='inner_section'><img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-five.jpg' alt=''/></div>
              </div>
              <div className={styles.row}>
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-six.mp4' />
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-seven.mp4' />
              </div>
              <div className={styles.fullWidth}>
                <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/the-night-of/night-of-8.mp4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NightOf;
