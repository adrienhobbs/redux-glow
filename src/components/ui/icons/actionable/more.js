import React, { PropTypes } from 'react';

const More = React.createClass({
  propTypes: {
    color: PropTypes.string
  },
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
        <circle cx='37.5' cy='37.5' r='35' fill='none' stroke={this.props.color} strokeWidth='5' strokeMiterlimit='10'/>
        <path d='M37.3 19.6v36m18.5-17.5h-36' fill='none' stroke={this.props.color} strokeWidth='5' strokeLinecap='round'
              strokeMiterlimit='10'/>
      </svg>
    );
  }
});

export default More;
