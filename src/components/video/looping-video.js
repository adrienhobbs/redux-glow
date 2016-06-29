import React, {PropTypes} from 'react';

export class LoopingVideo extends React.Component {
  static propTypes = {
    videoSrc: PropTypes.string.isRequired,
    viewport: PropTypes.object.isRequired,
    style: PropTypes.object
  };

  super (props) {
    constructor(props);
  }
  getControls () {
    return (this.props.viewport.isMobile);
  }
  render () {
    var style = {...this.props.style};
    return (
      <div className='video-looping inner_section' style={style}>
        <video className='video-looping-el' controls={this.getControls()} loop autoPlay src={this.props.videoSrc}></video>
      </div>
    );
  }
};

export default LoopingVideo;
