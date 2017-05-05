import React from 'react';
import {VelocityComponent} from 'velocity-react';
import ShareMixin from './share-mixin';

const FacebookShare = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [ShareMixin],
  render () {
    return (
      <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} id='facebook_icon' ref='icon' transform='matrix(1, 0, 0, 1, 0, -64)'>
        <g>
          <VelocityComponent animation={this.state.isHovered ? this.show : this.hide}>
            <circle r='25' cx='101.5' cy='90' fill='black' fillOpacity='0'>
            </circle>
          </VelocityComponent>
          <path style={{fill: this.props.color || '#FFFFFF'}} d='M107.7,76.5l-3.2,0c-3.6,0-5.9,2.4-5.9,6.1v2.8h-3.2c-0.3,0-0.5,0.2-0.5,0.5v4.1
							c0,0.3,0.2,0.5,0.5,0.5h3.2v10.2c0,0.3,0.2,0.5,0.5,0.5h4.2c0.3,0,0.5-0.2,0.5-0.5V90.4h3.8c0.3,0,0.5-0.2,0.5-0.5l0-4.1
							c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.1-0.2-0.1-0.4-0.1h-3.8V83c0-1.1,0.3-1.7,1.8-1.7l2.2,0c0.3,0,0.5-0.2,0.5-0.5V77
							C108.2,76.7,107.9,76.5,107.7,76.5z'/>
        </g>
      </g>
    );
  }
});

export default FacebookShare;
