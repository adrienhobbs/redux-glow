import React, { PropTypes } from 'react';
import HoverMixin from './icon-hover-mixin';

const Twitter = React.createClass({
  propTypes: {
    color: PropTypes.string
  },
  mixins: [HoverMixin],
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg ref='icon' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} fill={this.props.color} stroke={this.props.color}
           xmlns='http://www.w3.org/2000/svg'
           viewBox='0 0 75 75'>
        <circle cx='37.5' cy='37.5' r='35' fill='none' strokeWidth='5' strokeMiterlimit='10'/>
        <path
          d='M59.6 24.1c-1.6.7-3.3 1.2-5.1 1.4 1.8-1.1 3.2-2.8 3.9-4.9-1.7 1-3.6 1.8-5.6 2.2-1.6-1.7-3.9-2.8-6.5-2.8-4.9 0-8.9 4-8.9 8.9 0 .7.1 1.4.2 2-7.4-.4-13.9-3.9-18.3-9.3-.8 1.3-1.2 2.8-1.2 4.5 0 3.1 1.6 5.8 3.9 7.4-1.5 0-2.8-.4-4-1.1v.1c0 4.3 3.1 7.9 7.1 8.7-.7.2-1.5.3-2.3.3-.6 0-1.1-.1-1.7-.2 1.1 3.5 4.4 6.1 8.3 6.2-3 2.4-6.9 3.8-11 3.8-.7 0-1.4 0-2.1-.1 3.9 2.5 8.6 4 13.6 4 16.3 0 25.2-13.5 25.2-25.2v-1.1c1.8-1.5 3.3-3 4.5-4.8z'
          />
      </svg>
    );
  }
});

export default Twitter;
