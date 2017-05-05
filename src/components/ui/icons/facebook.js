import React from 'react';

const Facebook = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },

  render () {
    return (
      <svg ref='icon' width='20px' height='20px' fill={this.props.color} stroke={this.props.color} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
        <path d='M37.982,0.36v7.932h-4.718c-1.723,0-2.885,0.36-3.487,1.08c-0.601,0.72-0.902,1.802-0.902,3.244
          v5.681h8.804l-1.171,8.895h-7.633V50h-9.194V27.193h-7.663v-8.895h7.663v-6.549c0-3.727,1.042-6.616,3.126-8.669S27.666,0,31.13,0
          C34.076,0,36.36,0.12,37.982,0.36z'/>
      </svg>
    );
  }
});

export default Facebook;
