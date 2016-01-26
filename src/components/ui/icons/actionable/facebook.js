import React from 'react';
import HoverMixin from './icon-hover-mixin';

const Facebook = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [HoverMixin],
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg ref="icon" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} fill={this.props.color} stroke={this.props.color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <circle cx="37.5" cy="37.5" r="35" fill="none" strokeWidth="5" strokeMiterlimit="10"/>
        <path
          d="M49.6 13.3h-6.3c-7.1 0-11.6 4.7-11.6 11.9v5.5h-6.3c-.5 0-1 .4-1 1v8c0 .5.4 1 1 1h6.3v20.1c0 .5.4 1 1 1H41c.5 0 1-.4 1-1V40.6h7.4c.5 0 1-.4 1-1v-8c0-.3-.1-.5-.3-.7s-.4-.3-.7-.3H42V26c0-2.2.5-3.4 3.5-3.4h4.2c.5 0 1-.4 1-1v-7.4c-.1-.5-.6-.9-1.1-.9z"
          />
      </svg>
    );
  }
});

export default Facebook;
