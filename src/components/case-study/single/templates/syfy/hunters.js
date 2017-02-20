import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import classes from './hunters.css';
import LoopingVideo from 'components/video/looping-video.js';
import ResponsiveVideo from 'components/video/responsive';

export class ClientTestimonial extends React.Component {

  static propTypes = {
    body: React.PropTypes.string.isRequired,
    source: React.PropTypes.string.isRequired,
    sourceColor: React.PropTypes.string,
    bodyColor: React.PropTypes.string
  }

  getBodyColor () {
    return (this.props.bodyColor) ? this.props.bodyColor : 'black';
  }

  getSourceColor () {
    return (this.props.sourceColor) ? this.props.sourceColor : 'black';
  }

  render () {
    const bodyStyle = {
      color: this.getBodyColor(),
      fontFamily: 'GT-Walsheim',
      // fontStyle: 'italic',
      fontSize: '1.5em',
      marginBottom: 30
    };

    const sourceStyle = {
      color: this.getSourceColor(),
      fontFamily: 'Domaine',
      fontWeight: 400,
      fontSize: '1.2em'
    };

    return (
      <article className={classes.testimonial} style={{marginTop: 30, marginBottom: 30, textAlign: 'center', maxWidth: 1100, margin: 'auto'}}>
        <div className={classes.body} style={bodyStyle}>
          {this.props.body}
        </div>
        <div className={classes.quote_source} style={sourceStyle}>
          - {this.props.source}
        </div>
      </article>
    );
  }
}

export class Hunters extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  showIframe () {
    TweenLite.to(this.refs.iframeBlocker, 0.5, {autoAlpha: 0});
  }
  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data}>
            <a target='_blank' href='http://www.syfy.com/hunters/theyareamongus/'>
              <div className={classes.huntersButton}>
                view the site
              </div>
            </a>
          </AboutSection>
          <article className='approach'>
            {this.createHeadlineEl('overview')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <ResponsiveVideo src='http://player.vimeo.com/video/172432509?title=0&byline=0&portrait=0' />
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('data-driven')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The narrative of the site takes the POV of an Edward Snowden type mole who is hellbent on leaking out sensitive information to the public. The collection and subsequent leaking of data is a central element to the site, so finding a way to effectively represent the information was essential; we decided on a particle driven data cloud. Additionally, this visual approach was chosen because it directly referenced the mechanism of how the Hunters (alien creatures from the show) visualize their world. To tie the 3D model even further to the show, Glow created 13 different episodically significant models to map the particles along. </p>
              </div>
            </div>
            <div className='img-single'>
              <LoopingVideo viewport={this.props.viewport} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/DataDriven.mp4'/>
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>To help create the feeling that the site was a "living and breathing entity,” we leveraged actual fan sentiment about Hunters. Each week, new social chatter was scraped from Twitter and mapped to its respective episodic model.  This not only created a sense of “live connectivity” but it also encouraged exploration and interaction with the 3D model. The custom social assets that were created for the experience were also posted to the official Syfy Hunters Twitter account, helping promote and maintain continuity across social properties and the site."</p>
              </div>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('design')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Working closely with Syfy and the show runners, Glow strove to ensure the tone of the experience matched the show, ensuring the content felt authentic. By using particles as a core component of the site, high quality show imagery, and custom tailored audio we were able to create a genuine voice.</p>
              </div>
            </div>
            <div className='img-single'>
              <LoopingVideo viewport={this.props.viewport} style={{marginBottom: 20, marginTop: 30}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/Design01.mp4'/>
            </div>
            <div className='img-single inner_section' style={{marginTop: 0, marginBottom: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/design02.jpg' />
            </div>
            <div className='img-single video-looping-row inner_section' style={{marginTop: 20}}>
              <div className='video-looping-half' style={{marginBottom: 20}}>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/design03.jpg' alt='' />
              </div>
              <div className='video-looping-half' style={{marginBottom: 20}}>
                <video loop autoPlay src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/design04.mp4'></video>
              </div>
              <div className='video-looping-half'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/design05.jpg' alt='' />
              </div>
              <div className='video-looping-half'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/hunters/design06.jpg' alt='' />
              </div>
            </div>
            <div className='copy' style={{marginTop: 40}}>
              <div className='copy-inner'>
                <p style={copyStyle}>Glow comped out several design iterations for the look and feel of the site, eventually settling on a “light” version. This was a purposeful departure from the routine “dark” and technical looking data visualization and rather, takes a more humanistic approach to the way data is displayed.</p>
              </div>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('development')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Glow utilized emerging web technologies like WebGL and ThreeJS to help bring the 3D particle models to life on both mobile and desktop. Particle density was important to visualize the models effectively as was ensuring that the experience rendered well on both mobile and desktop. So, in order to maximize the particle count and frame rate on various devices we created a custom shader. As a result, we were able to render well over 100k interactive particles at a constant 60FPS thanks to the shader.</p>
              </div>
            </div>
            <div className='img-single' style={{position: 'relative', zIndex: 1, marginTop: 40, marginbottom: 140}}>
              <iframe ref='iframe' style={{height: 700, position: 'relative', zIndex: 0}} src='http://hunters-dev.s3-website-us-east-1.amazonaws.com/test25/' scrolling='no' width='100%' height='900px' frameBorder='0' />
            </div>
          </article>
          <article className='result' style={{marginBottom: 48, marginTop: 40}} >
            {this.createHeadlineEl('the result')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>The final site launched on April 11, following the release of the first episode of Hunters. Each week thereafter, new content, 3D models and fresh social chatter was unlocked. The reception from Syfy and the show runners was phenomenal.</p>
              </div>
            </div>
          </article>
          <ClientTestimonial bodyColor='#3da0a8' source='Jesse Murray, head of digital, Syfy' body='“From my POV we are extremely happy with everything. The team has been a real pleasure to work with – responsive, solution oriented, with great ideas and follow through. I really can’t think of anything to improve!”' />
        </div>
      </div>
    );
  }
}

export default Hunters;
// <iframe height='700px' scrolling='no' src='//codepen.io/adrienhobbs/embed/preview/NrpZay/?height=486&theme-id=0&default-tab=result&embed-version=2' frameBorder='no' allowTransparency='true' allowfullscreen='true' style={{width: '100%'}} />
//
// <div ref='iframeBlocker' style={{height: '700px', width: '100%', zIndex: 2, background: 'rgba(1,1,1,0.4)', position: 'absolute', top: 0}}>
//   <div onClick={this.showIframe.bind(this)} className={classes.huntersButtonIframe}>
//     play around?
//   </div>
// </div>
