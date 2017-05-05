import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './mindy.css';

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
            <div className='row'>
              <div className={styles.itemOne}>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/paleyfest.jpg' alt='' />
              </div>
              <div className={styles.itemTwo}>
                <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/HULU_MINDY_DOCTOR.mp4'></video>
              </div>
            </div>
            <div style={{marginTop: 6}} className='row'>
              <div className={styles.rowOne}>
                <div className='row'>
                  <div className={styles.itemThree}>
                    <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/HULU_MINDY_SNAPCHAT.mp4'></video>
                  </div>
                </div>
              </div>

              <div className={styles.rowTwo}>
                <div className='row'>
                  <div>
                    <img style={{marginBottom: 7}} src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/later-baby.jpg' alt='' />
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/now-streaming.jpg' alt='' />
                  </div>
                </div>
              </div>
              <div className={styles.rowThree}>
                <div className='row'>
                  <div>
                    <img style={{marginBottom: 6}}src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/jacket.jpg' alt='' />
                    <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/HULU_MINDY_MIAMI.mp4'></video>
                    <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/hulu/mindy-project/HULU_MINDY_DANCE.mp4'></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mindy;
