import React from 'react';

const Close = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <circle cx="37.5" cy="37.5" r="35" fill="none" stroke={this.props.color} strokeWidth="5" strokeMiterlimit="10"/>
        <path d="M50.2 24.5L24.8 50m25.4.7L24.8 25.3" fill="none" stroke={this.props.color} strokeWidth="5"
              strokeLinecap="round" strokeMiterlimit="10"/>
      </svg>
    );
  }
});

export default Close;
