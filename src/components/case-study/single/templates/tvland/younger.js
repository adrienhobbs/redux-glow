import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import LoopingVideo from 'components/video/looping-video.js';

export class Younger extends BaseTemplate {

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
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{fontWeight: 300, background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='approach'>
            {this.createHeadlineEl('take the quiz')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <LoopingVideo viewport={this.props.viewport} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/tvland/younger/quiz.mp4'/>
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>First, the show's theme does not intrinsically have a broad social appeal. Couple that with a show that speaks to an older skewing audience, it was aparent that Casual was not developed to be a heavily social property.  In spite of those challenges, we applied a smart strategy that leveraged key elements of the show itself and released content in very focused ways. This provided successful, driving massive viewership. Video clips went viral across Facebook, and earned a total of more than 20 million views on the platform. Overall, our efforts drove widespread engagement and awareness of the series as a fun and unique Hulu Original. </p>
              </div>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('user generated content')}
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tvland/younger/ugc01.jpg' alt='younger user generated content' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>First, the show's theme does not intrinsically have a broad social appeal. Couple that with a show that speaks to an older skewing audience, it was aparent that Casual was not developed to be a heavily social property.  In spite of those challenges, we applied a smart strategy that leveraged key elements of the show itself and released content in very focused ways. This provided successful, driving massive viewership. Video clips went viral across Facebook, and earned a total of more than 20 million views on the platform. Overall, our efforts drove widespread engagement and awareness of the series as a fun and unique Hulu Original. </p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/tvland/younger/ugc02.jpg' alt='younger user generated content' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Younger;
