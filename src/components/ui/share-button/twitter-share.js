import React from 'react';
import {VelocityComponent} from 'velocity-react';
import ShareMixin from './share-mixin';
const TwitterShare = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [ShareMixin],
  render () {
    return (
      <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} id='twitter_icon' ref='icon' transform='matrix(1, 0, 0, 1, 0, -64)'>
        <VelocityComponent animation={this.state.isHovered ? this.show : this.hide}>
          <circle r='25' cx='27.6555' cy='90' fill={this.props.color} fillOpacity='0' />
        </VelocityComponent>
        <path style={{fill: this.props.color || '#FFFFFF'}} d='M38.7,83.7c-0.8,0.4-1.7,0.6-2.6,0.7c0.9-0.6,1.6-1.4,2-2.5c-0.9,0.5-1.8,0.9-2.9,1.1
							c-0.8-0.9-2-1.4-3.3-1.4c-2.5,0-4.5,2-4.5,4.5c0,0.4,0,0.7,0.1,1c-3.7-0.2-7.1-2-9.3-4.7c-0.4,0.7-0.6,1.4-0.6,2.3
							c0,1.6,0.8,2.9,2,3.7c-0.7,0-1.4-0.2-2-0.6v0.1c0,2.2,1.6,4,3.6,4.4c-0.4,0.1-0.8,0.2-1.2,0.2c-0.3,0-0.6,0-0.8-0.1
							c0.6,1.8,2.2,3.1,4.2,3.1c-1.5,1.2-3.5,1.9-5.6,1.9c-0.4,0-0.7,0-1.1-0.1c2,1.3,4.4,2,6.9,2c8.3,0,12.8-6.9,12.8-12.8l0-0.6
							C37.4,85.4,38.1,84.6,38.7,83.7z'/>
      </g>
    );
  }
});

export default TwitterShare;
