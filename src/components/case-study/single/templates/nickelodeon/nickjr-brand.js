import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './spongebob.css';
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
                <p style={copyStyle}>GLOW’s knowledge of the Nick Jr. IP shone through at every turn, with executions smartly navigating a rich and detailed array of characters and worlds to keep the feeds on-brand and on-point. Our ideas were crafted to be shareable, stimulate conversation and solidify Nick Jr. as a one-stop resource for parents and their kid’s favorite tv personalities.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='img-single inner_section' style={{marginTop: 0}}>
          <LoopingVideo videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nickjr-brand/all_in_one.mp4' />
        </div>
        <div className='img-single inner_section' style={{marginTop: 0}}>
          <div className={styles.nickJrRow}>
            <div className={styles.rowItem}>
              <LoopingVideo style={{marginTop: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nickjr-brand/individual_trucks.mp4' />
            </div>
            <div className={styles.rowItem}>
              <LoopingVideo style={{marginTop: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/nickelodeon/nickjr-brand/individual_sword.mp4' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NickJrBrand;
