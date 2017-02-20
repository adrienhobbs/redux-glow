import React from 'react';
import classes from './responsive.css';

export class ResponsiveVideo extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div className={classes.embed_container}><iframe src={this.props.src} frameBorder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
    );
  }
}

export default ResponsiveVideo;
