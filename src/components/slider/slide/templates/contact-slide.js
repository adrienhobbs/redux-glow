import React from 'react';
import classes from './contact-slide.scss';
import ContactForm from 'components/forms/contact-form';

const ContactSlide = React.createClass({
  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdpbGwiLCJhIjoiY2lqb3B4cmRrMDB3a3Q5a28xaHg0cnM0NiJ9.cmyU94c4wtK1aEs-cNfnCw';
    this.map = new mapboxgl.Map({
      container: 'connect-slide',
      style: 'mapbox://styles/mattwill/cijysv78o00uo90lxte3x4fua',
      center: [-74.01, 40.73],
      zoom:16,
      interactive: true
    });
    this.map.on('load', this.setMapHeight);
  },
  setMapHeight () {
    this.map.on('zoomstart', function (e) {
      console.log(e);
    });
    this.map.resize();
  },
  render () {
    return (
      <div className={classes.connectSlide} id='connect-slide'>
        <div className={classes.connectForm}>
          <div className={classes.connectFormCtr}>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
});

export default ContactSlide;

