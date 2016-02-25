import React, {PropTypes} from 'react';

export class LoopingVideo extends React.Component {
  static propTypes = {
    videoSrc: PropTypes.string.isRequired,
    viewport: PropTypes.object.isRequired
  };

  super (props) {
    constructor(props);
  }
  getControls () {
    return (this.props.viewport.isMobile);
  }
  render () {
    return (
      <div className='video-looping inner_section' style={{marginTop: 0}}>
        <video className='video-looping-el' controls={this.getControls()} loop autoPlay src={this.props.videoSrc}></video>
      </div>
    );
  }
};

export default LoopingVideo;
