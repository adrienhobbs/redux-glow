import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import styles from './brockmire.css';

export class Brockmire extends BaseTemplate {
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
          <ResultsSection data={this.props.data} />
          <div className='copy'>
            <div className='copy-inner'>
              <p style={copyStyle}>The goal was to migrate fans of IFC’s hit show Portlandia and other similar comedy series over to a show about a foul-mouthed, risky sports announcer. Through a bevy of social content that included kinetic scene lifts, hilarious reaction GIFs, and relatable creative that said what viewers were really thinking, GLOW built a community of fans who wanted to, “Keep it Brockmire.”</p>
              <p style={copyStyle}>The content put Brockmire himself, Hank Azaria, front and center. Fans gravitated to Azaria’s voice and hysterical one-liners. Brockmire was an instant hit, becoming the #1 most talked about cable series on its premiere night. </p>
            </div>
          </div>
          <div className='social-strategy'>
            <div className='img-single inner_section' style={{marginBottom: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/ifc/brockmire/brockmire-static.jpg' alt='brockmire image' />
            </div>
            <div className='img-single inner_section' style={{marginBottom: 0, marginTop: 0}}>
              <div className={styles.brockmireVideoRow}>
                <div className={styles.notLooping}>
                  <video controls src='https://s3.amazonaws.com/weareglow-assets/case-studies/ifc/brockmire/brockmire-clip-2.mp4'></video>
                </div>
                <div className={styles.looping}>
                  <video src='https://s3.amazonaws.com/weareglow-assets/case-studies/ifc/brockmire/brockmire-fully-exposed.mp4' playsinline muted loop autoPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brockmire;
