/*eslint-disable*/
import React from 'react';

var GlowLogo = React.createClass({
  componentWillReceiveProps (nextProps) {

  },
  render () {
    var fillColor = this.props.fillColor || '#FFFFFF';
    return (

        <svg
          version="1.1" id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 439.5 288"
          width={this.props.width || '150'}
          className="glow-logo"
          >
          <path
            style={{fill: fillColor}}
            d="M66.8,208.9h47.3l0,19.8c-3.8,23.3-21.3,39-51,39c-34.7,0-53.9-24.3-53.9-53.3c0-27.8,19.8-53.3,53.8-53.3c29.3,0,48.4,17.3,50.3,37.9H79.9c-1-5.8-6.8-12.1-17.3-12.1c-16.2,0-22.8,13.7-22.8,28c0,15.8,8.1,28.2,24.7,28.2c11.3,0,17.6-6.4,19.1-14.3H66.8V208.9z"/>
          <path style={{fill: fillColor}} d="M173.2,239.2V265h-56.5V163.8h30.1v75.5H173.2z"/>
          <path style={{fill: fillColor}} d="M171,214.4c0-27.9,20.1-53.3,54.8-53.3c34.8,0,54.9,25.4,54.9,53.3c0,27.9-20.1,53.3-54.9,53.3 C191,267.7,171,242.3,171,214.4z M250.2,214.4c0-13.4-9-25.9-24.4-25.9c-15.3,0-24.4,12.4-24.4,25.9s9.1,25.9,24.4,25.9 C241.2,240.2,250.2,227.8,250.2,214.4z"/>
          <path style={{fill: fillColor}} d="M348.3,209.9L331.4,265h-26.2l-36.4-101.2h31.8l17.9,60.4l17.8-60.4h24l17.6,60.4l18.1-60.4h31.8 L391.4,265h-26.3L348.3,209.9z"/>
          <g>
            <polyline style={{fill: fillColor}} points="190.8,155.9 29.8,41.3 167,171.6 190.8,155.9     "/>
            <polygon style={{fill: fillColor}} points="234.3,135.2 340.6,70.9 282.5,135.2       "/>
            <polygon style={{fill: fillColor}} points="227.4,135.2 268.8,10.5 196.5,152.7       "/>
          </g>
        </svg>

    )
  }
});

export default GlowLogo;
