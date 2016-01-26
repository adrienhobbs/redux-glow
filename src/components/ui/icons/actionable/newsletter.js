import React from 'react';

const Newsletter = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  getInitialState () {
    return null;
  },
  render () {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
        <path
          d="M52.2 56.9H23.4c-4.7 0-8.6-3.9-8.6-8.6V21.9c0-2.1 1.7-3.8 3.8-3.8h25.1c1.7 0 3.1 1.4 3.1 3.1v15h9.7c2.1 0 3.7 1.7 3.7 3.7v7.6c0 6.2-2.7 9.4-8 9.4zm-5.4-16.7v7.3c0 1.6.5 5.4 5.4 5.4 2.7 0 4.1-.8 4.1-5.4v-7.3h-9.5zm-28-18.1v26.2c0 2.5 2.1 4.6 4.6 4.6h20.8c-.9-1.5-1.5-3.3-1.5-5.4V22.1H18.8z"
          fill={this.props.color}/>
        <path
          d="M38.2 31.1h-15c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1zm0 7h-15c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1zm0 7h-15c-.6 0-1-.4-1-1s.4-1 1-1h15c.6 0 1 .4 1 1s-.4 1-1 1z"
          fill={this.props.color}/>
        <circle cx="37.5" cy="37.5" r="35" fill="none" stroke={this.props.color} strokeWidth="5" strokeMiterlimit="10"/>
      </svg>
    );
  }
});

export default Newsletter;
