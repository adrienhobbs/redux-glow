import React, { Component } from 'react';

class Instagram extends Component {
  static propTypes = {
    color: React.PropTypes.string
  };

  render () {
    return (
      <svg ref='icon' height='26px' width='26px' fill={this.props.color || '#f21d5c'} stroke={this.props.color} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
        <circle cx='37.5' cy='37.5' r='35' fill='none' strokeWidth='5' strokeMiterlimit='10'/>
        <path
          d='M23.4 18.5h28.2c2.7 0 4.9 2 4.9 4.9v28.2c0 2.9-2.2 4.9-4.9 4.9H23.4c-2.7 0-4.9-2-4.9-4.9V23.4c0-2.9 2.2-4.9 4.9-4.9zm22.7 4.3c-.9 0-1.7.8-1.7 1.7v4.1c0 .9.8 1.7 1.7 1.7h4.3c.9 0 1.7-.8 1.7-1.7v-4.1c0-.9-.8-1.7-1.7-1.7h-4.3zm6 11.8h-3.3c.3 1 .5 2.1.5 3.3 0 6.3-5.3 11.4-11.8 11.4s-11.8-5.1-11.8-11.4c0-1.1.2-2.2.5-3.3h-3.5v16c0 .8.7 1.5 1.5 1.5h26.4c.8 0 1.5-.7 1.5-1.5v-16zM37.5 30c-4.2 0-7.6 3.3-7.6 7.4s3.4 7.4 7.6 7.4 7.6-3.3 7.6-7.4-3.4-7.4-7.6-7.4z'
        />
      </svg>
    );
  }
}

export default Instagram;
