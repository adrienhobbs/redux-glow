import React, { PropTypes } from 'react';
import classes from './contact-slide.scss';
import ContactForm from 'components/forms/contact-form';

const ContactSlide = React.createClass({
  propTypes: {
    position: PropTypes.string
  },
  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdpbGwiLCJhIjoiY2lqb3B4cmRrMDB3a3Q5a28xaHg0cnM0NiJ9.cmyU94c4wtK1aEs-cNfnCw';
    this.map = new mapboxgl.Map({
      container: 'connect-slide',
      style: 'mapbox://styles/mattwill/cijysv78o00uo90lxte3x4fua',
      center: [-74.01, 40.73],
      zoom:13
    });
    this.map.scrollZoom.disable();
    this.map.on('load', this.setMapHeight);
  },
  setMapHeight () {
    this.map.on('zoomstart', function (e) {
    });
    this.map.resize();
  },
  componentDidUpdate (prevProps) {
    if (prevProps.position === 'bottom' && this.props.position === 'center') {
      TweenLite.fromTo(this.refs.formCtr, 2, {xPercent: 0, y: 800}, {xPercent: 0, y: 0, ease: Expo.easeInOut});
    }
  },
  render () {
    return (
      <div className={classes.connectSlide} id='connect-slide'>
        <div className={classes.connectForm}>
          <div ref='formCtr' className={classes.connectFormCtr}>
            <div className={classes.connectFormCtrInner}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default ContactSlide;

