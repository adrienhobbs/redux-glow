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
    // const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='results' id='results'>
            <section className='' style={{backgroundColor: 'rgb(232,232,232)'}}>
              <h2 className='page-title' style={{color: this.props.data.get('headlineColor') || '#000'}}>results</h2>
              <div className='results-inner outer'>
                <div className='results-info-box'>
                  <h2 className='lite'>October 29, 2014</h2>
                  <h1>Successfully raised $264,704 with 1,550 backers.</h1>
                </div>
                <div className='stat-boxes'>
                  {this.getStatContent()}
                </div>
              </div>
            </section>
          </article>
          <article className='video-campaign'>
            <h2 style={this.getHeadlineStyle()} className='page-title'>kickstarter</h2>
            <Video posterImg={'https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/poster.jpg'} videoSrc={'https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/Carla+Hall+-+Kickstarter-HD.mp4'}/>
            <div className='copy-inner'>
              <p style={copyStyle}>GLOW's video team produced, scripted, directed, shot and edited a dynamic series of videos for the Kickstarter campaign. The main video was a direct plea to Carla's fans with Carla front and center. The follow up videos included a how-to video on cooking the perfect Hot Chicken, followed by the story of Carla's cooking inspiration, and finally Carla in the streets of New York City talking Hot Chicken as she mixes and mingles with residents of the big city.</p>
            </div>
            <div className='image-container-large'>
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
            <div className='copy-inner'>
              <p style={copyStyle}>I think you know who Tuco Salamanca was. I think your car was there because you were there. Tuco had a bullet in him when I got there and I think you know something about that, too. Sky, the, um... I know it's none of my business, but uh... keeping him away from the kids? Whoa, whoa, no heavy lifting. I got it. jesus, what you got in there - cinder blocks? If I have to. I think you know who Tuco Salamanca was. i think your car was there</p>
            </div>
          </article>
          <div className='full-width-bg' style={{backgroundImage: 'url(' + this.props.data.get('fullScreenBgImg') + ')'}}></div>
          <article className='social' id='social'>
            <h2 style={this.getHeadlineStyle()} className='page-title'>social campaign</h2>
            <div className='copy'>
              <div className='copy-inner'>
              <div className='video-looping'>
                <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/carla-hall/southern-kitchen/social-01.mp4'></video>
              </div>
                <p style={copyStyle}>In just 3.5 months, we increased page likes by 20.73 % - twitter followers by 8.08 % and Instagram follows by 34.48%.</p>
                <p style={copyStyle}>After effectively completing this social overhaul, we then launched into our Kickstarter campaign.  GLOW's video team produced, scripted, directed, shot and edited a dynamic series of videos for the Kickstarter campaign. The main video was a direct plea to Carla's fans with Carla front and center. The follow up videos included a how-to video on cooking the perfect Hot Chicken, followed by the story of Carla's cooking inspiration, and finally Carla in the streets of New York City talking Hot Chicken as she mixes and mingles with residents of the big city.</p>
                <p style={copyStyle}>GLOW’s strategy proved successful, having exceeded our financial goal of $250k.  The team continues to provide updates on Kickstarter and engage with backers.  Since then, GLOW has taken control of all social efforts for Carla, driving numerous efforts yielding very positive results. </p>
              </div>
              <div className='image-large'>
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
