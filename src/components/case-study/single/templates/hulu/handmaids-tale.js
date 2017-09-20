import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './styles.css';
import LoopingVideo from 'components/video/looping-video';

export class NickJrBrand extends BaseTemplate {
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
                <p style={copyStyle}>We moderated and grew membership for the series’s official group, #Maidez, a page strategically focused on letting users draw their real-world connections from the show. </p>
                <p style={copyStyle}>Additionally, we provided live coverage for events and activations promoting the series. We went on to surprise users weekly with custom giveaways, contests, and continuous highlights of the community’s creations and thoughts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='img-single inner_section' style={{marginTop: 0}}>
          <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/handmaids/hulu_handmaids_static_wall.jpg' alt='handmaids tale creative work'/>
          <div className={styles.loopingRow}>
            <div className={styles.loopingVideo}>
              <LoopingVideo style={{marginTop: 19, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/handmaids/hulu_handmaids_video_1.mp4' />
            </div>
            <div className={styles.loopingVideo}>
              <LoopingVideo style={{marginTop: 19, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/handmaids/hulu_handmaids_video_2.mp4' />
            </div>
            <div className={styles.loopingVideo}>
              <LoopingVideo style={{marginTop: 19, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/handmaids/hulu_handmaids_video_3.mp4' />
            </div>
            <div className={styles.loopingVideo}>
              <LoopingVideo style={{marginTop: 19, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/handmaids/hulu_handmaids_video_4.mp4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NickJrBrand;
