import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import Video from 'components/video/video.js';
export class HowIDidIt extends BaseTemplate {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  getVideoComponents (video, i) {
    return (
      <article key={i} style={{marginTop: 50}}>
        {this.createSubtitleEl(video.title)}
        <Video posterImg={video.posterImg} videoSrc={video.videoSrc}/>
        <div className='copy'>
          <div className='copy-inner' style={{marginTop: -50}}>
            <p style={this.getCopyStyle()}>{video.description}</p>
          </div>
        </div>
      </article>
    );
  }

  getVideoContent () {
    return this.getVideos().map(this.getVideoComponents.bind(this));
  }
  getVideos () {
    return this.props.data.get('videos');
  }

  render () {
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          {this.getVideoContent()}
        </div>
      </div>
    );
  }
}

export default HowIDidIt;
