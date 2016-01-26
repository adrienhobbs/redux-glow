import React from 'react';
import HoverMixin from './icon-hover-mixin';

const ArchiveIcon = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [HoverMixin],
  render () {
    return (
      <svg ref="icon" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} stroke={this.props.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.1 55.4">
        <circle cx="38.1" cy="27.7" r="7" fill="none"  strokeWidth="4" strokeMiterlimit="10"/>
        <circle cx="38.1" cy="27.7" r="17.1" fill="none" strokeWidth="4" strokeMiterlimit="10"/>
        <path d="M73.8 27.7S57.4 2 38.1 2 2.4 27.7 2.4 27.7s16.4 25.7 35.7 25.7c19.1 0 35.7-25.7 35.7-25.7z"
              fill="none" strokeWidth="4" strokeMiterlimit="10"/>
      </svg>
    );
  }
});

export default ArchiveIcon;
