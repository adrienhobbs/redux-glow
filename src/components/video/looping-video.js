import React, {PropTypes} from 'react';

export class LoopingVideo extends React.Component {
  static propTypes = {
    videoSrc: PropTypes.string.isRequired,
    style: PropTypes.object
  };

  super (props) {
    constructor(props);
  }

  render () {
    var style = {...this.props.style};
    return (
      <div className='video-looping inner_section' style={style}>
        <video className='video-looping-el' playsinline muted loop autoPlay src={this.props.videoSrc}></video>
      </div>
    );
  }
};

export default LoopingVideo;
