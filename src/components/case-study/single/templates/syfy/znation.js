import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import LoopingVideo from 'components/video/looping-video.js';
import Button from 'components/ui/buttons/button.js';

export class Znation extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} >
            <Button
              link='http://zombieinterstellarproduce.com/'
              hoverColor='#a40808'
              color={this.props.data.get('secColor')}
              bgColor={this.props.data.get('headlineColor')}
              text='View Site'
            />
          </AboutSection>
          <article className='approach'>
            {this.createHeadlineEl('overview')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>With one click, users could generate a randomized meme, caption it and share, or they are given the ability to customize their image by cycling through either the “Interstellar”, “Produce”, or “Zombie” graphics using 3 buttons that appear next to the image. Clicking on each swaps out that respective graphic for another randomized one.  Once satisfied with their meme, the user can add a caption and then save or share to social networks (FB, Twitter. Instagram).</p>
              </div>
            </div>
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <LoopingVideo viewport={this.props.viewport} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/znation/znation-01.mp4'/>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('results')}
            <div className='copy'>
              <div className='copy-inner'>
                <LoopingVideo viewport={this.props.viewport} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/znation/znation-02.mp4'/>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Znation;
