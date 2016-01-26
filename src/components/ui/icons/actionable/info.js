import React from 'react';

const Info = React.createClass({
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
        <path d="M32.5 29.2h11.8l-5.8 23.3c-.1.2-.1.4-.1.6v.5c0 .7.2 1.3.6 1.7s1 .6 1.8.6c.5 0 1-.1 1.5-.2s1.1-.4 1.7-.6l.1.1c-1.2 1.2-2.4 2.1-3.7 2.7-1.3.6-2.7.9-4.1.9-1.8 0-3.3-.5-4.4-1.4s-1.6-2.2-1.6-3.9c0-.3 0-.6.1-.9 0-.3.1-.7.2-1.1l4-16c.2-.5.3-1 .3-1.4.1-.4.1-.7.1-1.1 0-.7-.2-1.4-.5-1.9-.4-.5-1-1.1-1.9-1.7v-.2h-.1zm9.1-4.7c-1.4 0-2.5-.4-3.4-1.3-.9-.8-1.3-1.9-1.3-3.3 0-1.5.5-2.7 1.5-3.7s2.3-1.5 3.7-1.5c1.4 0 2.5.4 3.4 1.3s1.3 2 1.3 3.3c0 1.4-.5 2.6-1.5 3.6-1 1.1-2.3 1.6-3.7 1.6z"
          fill={this.props.color}/>
      </svg>
    );
  }
});

export default Info;
