import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './style.css';
import LoopingVideo from 'components/video/looping-video';

export class DaytimeDivas extends BaseTemplate {
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
                <p style={this.getCopyStyle()}>Early paid testing showed that new and existing audiences responded best to beloved talent such as Vanessa Williams versus drama content themes. Based on these learnings, we adjusted strategy in real-time putting talent at the forefront with custom, beautifully-styled and hilarious social content, as well as weekly talent takeovers. To spark conversation, we leveraged superstar guest talent and created an open space to discuss topical issues from the show, such as trans advocacy with an enlightening Facebook Live featuring guest star Janet Mock and Drew Elliott (Paper Magazine, ANTM).</p>
                <p style={this.getCopyStyle()}>Daytime Divas was a huge hit with the VH1 fan base, trending #3 on Twitter premiere night and garnering over 100K fans throughout the season on social.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <div className={styles.rowOne}>
                <div className={styles.col}>
                  <LoopingVideo style={{marginTop: 0, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/vh1/daytime-divas/vh1_dtd_video_gal.mp4' />
                </div>
                <div className={styles.col}>
                  <LoopingVideo style={{marginTop: 0, marginBottom: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/vh1/daytime-divas/vh1_dtd_video_guy.mp4' />
                </div>
              </div>
              <div>
                  <LoopingVideo style={{marginTop: 0}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/vh1/daytime-divas/VH1_DD_video_wall.mp4' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DaytimeDivas;
