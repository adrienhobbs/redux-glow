import React, { PropTypes } from 'react';

const Arrow = React.createClass({
  propTypes: {
    direction: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number
  },
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg className={this.props.direction} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 86.3 86.3'  width={this.props.width || 40}>
        <path d='M43.3 84.3c-23 0-41.6-18.7-41.6-41.6S20.4 1 43.3 1 85 19.7 85 42.6 66.3 84.3 43.3 84.3zm0-77.8c-19.9 0-36 16.2-36 36.1s16.2 36.1 36.1 36.1 36.1-16.2 36.1-36.1S63.2 6.5 43.3 6.5z' fill={this.props.color}/>
        <path transform='rotate(0 0 45)' d='M44.3 60.6c-.8 0-1.5-.3-2.1-.9L19.1 34.3c-1-1.1-1-2.9.2-3.9 1.1-1 2.9-1 3.9.2l21.1 23.2 20.8-22.9c1-1.1 2.8-1.2 3.9-.2s1.2 2.8.2 3.9L46.4 59.7c-.5.5-1.3.9-2.1.9z' fill={this.props.color}/>
      </svg>
    );
  }
});

export default Arrow;
