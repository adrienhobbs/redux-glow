import React from 'react';
import HoverMixin from './icon-hover-mixin';

const Phone = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [HoverMixin],
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg ref="icon" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} stroke={this.props.color} fill={this.props.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <circle cx="37.5" cy="37.5" r="35" fill="none" strokeWidth="5" strokeMiterlimit="10"/>
        <g fill="none" strokeMiterlimit="10">
          <path d="M46.4 61.5H28.5c-2.2 0-4-1.8-4-4V20.6c0-2.2 1.8-4 4-4h17.9c2.2 0 4 1.8 4 4v36.9c0 2.2-1.8 4-4 4z"
                strokeWidth="3.04"/>
          <circle cx="37.5" cy="55.8" r="2" strokeWidth="2"/>
          <path strokeWidth="2" strokeLinecap="round" d="M32.2 20.6h10m-17.8 4.1h26v26.1h-26z"/>
        </g>
      </svg>
    );
  }
});

export default Phone;
