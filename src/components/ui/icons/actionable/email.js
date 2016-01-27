import React, { PropTypes } from 'react';
import HoverMixin from './icon-hover-mixin';

const Email = React.createClass({
  propTypes: {
    color: PropTypes.string
  },
  mixins: [HoverMixin],
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg ref='icon' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} stroke={this.props.color} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
        <circle cx='37.5' cy='37.5' r='35' fill='none' strokeWidth='5' strokeMiterlimit='10'/>
        <g fill='none' strokeMiterlimit='10'>
          <path
            d='M59.3 50.8H16.7c-1.2 0-2.2-1-2.2-2.2V25c0-1.2 1-2.2 2.2-2.2h42.6c1.2 0 2.2 1 2.2 2.2v23.6c0 1.2-1 2.2-2.2 2.2z'
            strokeWidth='2.436'/>
          <path d='M15.5 23.8l20.6 16.1c1.4.8 3.1.8 4.5 0l20.6-16.1' strokeWidth='2.436' strokeLinecap='round'
                stroke-linejoin='round'/>
          <path strokeWidth='2' strokeLinecap='round' stroke-linejoin='round'
                d='M17 47.6L30.1 36M58 47.6L45.3 36.3'/>
        </g>
      </svg>
    );
  }
});

export default Email;
