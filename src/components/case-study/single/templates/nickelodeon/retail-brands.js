
import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import LoopingVideo from 'components/video/looping-video';
import styles from './retail-brands.css';

export class NickRetail extends BaseTemplate {
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
                <p style={copyStyle}>GLOW’s social content ran the gamut of creative executions including custom stop-motion, still photography and motion graphics. Top-notch studio production supported by strong post-production workflows allowed GLOW to create content that was visually striking, effective at communicating important details, and engaging users in their social feeds.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='img-single inner_section' style={{marginBottom: 0}}>
          <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nick-retail/nick_retail_static_wall.jpg' alt='nick-retail-images'/>
        </div>
        <div className='img-single inner_section' style={{marginTop: 0}}>
          <div className={styles.nickVideoRow}>
            <div className={styles.nickLoopingVideo}>
              <LoopingVideo  style={{marginTop: 0, marginBottom: 11}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nick-retail/nick_retail_video_bows.mp4' />
            </div>
            <div className={styles.nickLoopingVideo}>
              <LoopingVideo style={{marginTop: 0, marginBottom: 11}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nick-retail/nick_retail_video_pizza.mp4' />
            </div>
            <div className={styles.nickLoopingVideo}>
              <LoopingVideo style={{marginTop: 0, marginBottom: 11}}  videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nick-retail/nick_retail_video_cake.mp4' />
            </div>
            <div className={styles.nickLoopingVideo}>
              <LoopingVideo  style={{marginTop: 0, marginBottom: 11}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nick-retail/nick_retail_video_shirts.mp4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NickRetail;
