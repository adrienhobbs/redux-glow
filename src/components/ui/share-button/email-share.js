import React from 'react';
import { VelocityComponent } from 'velocity-react';
import ShareMixin from './share-mixin';

const EmailShare = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  mixins: [ShareMixin],
  render () {
    return (
      <g onMouseEnter={this.onMouseEnter}
         onMouseLeave={this.onMouseLeave}
         id='email_icon'
         ref='icon'
         transform='matrix(1, 0, 0, 1, 0, -63.4)'>
        <VelocityComponent animation={this.state.isHovered ? this.show : this.hide}>
          <circle r='25' cx='177' cy='90' fill={this.props.color} fillOpacity='0'>
          </circle>
        </VelocityComponent>
        <g>
          <path style={{fill: this.props.color || '#FFFFFF'}} d='M187.2,98h-21.7c-1,0-1.7-0.8-1.7-1.7v-12c0-1,0.8-1.7,1.7-1.7h21.7c1,0,1.7,0.8,1.7,1.7v12
							C188.9,97.2,188.1,98,187.2,98z M165.5,83.8c-0.3,0-0.5,0.2-0.5,0.5v12c0,0.3,0.2,0.5,0.5,0.5h21.7c0.3,0,0.5-0.2,0.5-0.5v-12
							c0-0.3-0.2-0.5-0.5-0.5H165.5z'/>
        </g>
        <g>
          <path style={{fill: this.props.color || '#FFFFFF'}} d='M176.5,92.8c-0.5,0-1-0.1-1.5-0.4c0,0,0,0-0.1,0l-10.4-8.2c-0.3-0.2-0.3-0.6-0.1-0.9
							c0.2-0.3,0.6-0.3,0.9-0.1l10.4,8.2c0.5,0.3,1.1,0.3,1.6,0l10.4-8.2c0.3-0.2,0.7-0.2,0.9,0.1s0.2,0.7-0.1,0.9l-10.4,8.2
							c0,0,0,0-0.1,0C177.6,92.7,177.1,92.8,176.5,92.8z'/>
        </g>
        <g>
          <path style={{fill: this.props.color || '#FFFFFF'}} d='M165.6,96.1c-0.1,0-0.3-0.1-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7l6.6-5.9c0.2-0.2,0.5-0.2,0.7,0
							c0.2,0.2,0.2,0.5,0,0.7l-6.6,5.9C165.8,96,165.7,96.1,165.6,96.1z'/>
        </g>
        <g>
          <path style={{fill: this.props.color || '#FFFFFF'}} d='M186.4,96.1c-0.1,0-0.2,0-0.3-0.1l-6.5-5.7c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l6.5,5.7
							c0.2,0.2,0.2,0.5,0,0.7C186.7,96,186.6,96.1,186.4,96.1z'/>
        </g>
      </g>
    );
  }
});

export default EmailShare;
