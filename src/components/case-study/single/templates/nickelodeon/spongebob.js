import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './spongebob.css';

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
                <p style={copyStyle}>One of our biggest activations during the campaign was the Flying Dutchman’s Instagram Treasure Hunt, where we partnered with Nickelodeon to create a gamified Instagram experience that took fans on an interactive treasure hunt through Instagram stories and multiple Instagram handles; all, based on the Season 1 episode, “Arrgh”. During the activation’s flight dates, the SpongeBob Instagram account grew 10x faster when compared to the average daily rate. The activation’s Instagram Stories generated a total of 1.5M views, and the feed content received more than 50k video views with an average engagement rate doubled the monthly average. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='img-single inner_section' style={{marginTop: 0}}>
          <div className={styles.rowOne}>
            <div className={styles.videoItem}>
              <video controls src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_video_bff.mp4'></video>
            </div>
            <div className={styles.videoItem}>
              <video controls src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_video_dad.mp4'></video>
            </div>
            <div className={styles.videoItem}>
              <video controls src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_video_party.mp4'></video>
            </div>
          </div>
          <div className={styles.rowTwo}>
            <div className={styles.videoItem}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_static_ig.jpg' />
            </div>
            <div className={styles.videoItem}>
              <video controls src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_video_ig.mp4'></video>
            </div>
          </div>
          <div className='img'>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/spongebob/nick_spongebob_static_360.jpg' alt='360 video'/>
          </div>
        </div>
      </div>
    );
  }
}

export default NickRetail;
