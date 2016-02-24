import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import Video from 'components/video/video.js';

export class SouthernKitchen extends BaseTemplate {
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
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <article className='video-campaign'>
            <h2 style={this.getHeadlineStyle()} className='study_headline section_headline'>kickstarter</h2>
            <Video posterImg={'https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/poster.jpg'} videoSrc={'https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/Carla+Hall+-+Kickstarter-HD.mp4'}/>
            <div className='copy-inner '>
              <p style={copyStyle}>GLOW's video team produced, scripted, directed, shot and edited a dynamic series of videos for the Kickstarter campaign. The main video was a direct plea to Carla's fans with Carla front and center. The follow up videos included a how-to video on cooking the perfect Hot Chicken, followed by the story of Carla's cooking inspiration, and finally Carla in the streets of New York City talking Hot Chicken as she mixes and mingles with residents of the big city.</p>
            </div>
            <div className='image-container-large inner_section'>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-01.jpg' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-02.jpg' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/video-03.jpg' />
              </div>
            </div>
            <div className='copy-inner '>
              <p style={copyStyle}>GLOW’s strategy proved successful, having exceeded our financial goal of $250k.  The team continues to provide updates on Kickstarter and engage with backers.  Since then, GLOW has taken control of all social efforts for Carla, driving numerous efforts yielding very positive results. </p>
            </div>
          </article>
          <div className='full-width-bg' style={{backgroundImage: 'url(' + this.props.data.get('fullScreenBgImg') + ')'}}></div>
          <article className='social' id='social'>
            <h2 style={this.getHeadlineStyle()} className='study_headline section_headline'>social campaign</h2>
            <div className='copy'>
              <div className='copy-inner'>
                <div className='video-looping inner_section' style={{marginTop: 0}}>
                  <video className='video-looping-el' loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/social-01.mp4'></video>
                </div>
                <p style={copyStyle}>In just 3.5 months, we increased page likes by 20.73 % - twitter followers by 8.08 % and Instagram follows by 34.48%.</p>
                <p style={copyStyle}>After effectively completing this social overhaul, we then launched into our Kickstarter campaign.  GLOW's video team produced, scripted, directed, shot and edited a dynamic series of videos for the Kickstarter campaign. The main video was a direct plea to Carla's fans with Carla front and center. The follow up videos included a how-to video on cooking the perfect Hot Chicken, followed by the story of Carla's cooking inspiration, and finally Carla in the streets of New York City talking Hot Chicken as she mixes and mingles with residents of the big city.</p>
              </div>
              <div className='image-large inner_section'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/social-02.gif' alt='' />
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default SouthernKitchen;

// <div className='end'>
//   <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
//     <polygon style={{fill:  '#c3c3c3'}} points='0,0 1920,314.6 1920,600 0,600 '/>
//   </svg>
// </div>
