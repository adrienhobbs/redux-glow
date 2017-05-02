import React from 'react';

export class ResponsiveVideo extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='embed_container'><iframe src={this.props.src} frameBorder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
    );
  }
}

export default ResponsiveVideo;
