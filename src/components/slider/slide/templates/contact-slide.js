import React, { PropTypes } from 'react';
import classes from './contact-slide.css';
import ContactForm from 'components/forms/contact-form';

export class ContactSlide extends React.Component {
  static propTypes = {
    position: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.state = {
      hasSubmitted: false
    };
  }

  componentDidMount () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdpbGwiLCJhIjoiY2lqb3B4cmRrMDB3a3Q5a28xaHg0cnM0NiJ9.cmyU94c4wtK1aEs-cNfnCw';
    this.map = new mapboxgl.Map({
      container: 'connect-slide',
      style: 'mapbox://styles/mattwill/cijysv78o00uo90lxte3x4fua',
      center: [-74.01, 40.73],
      zoom: 13
    });
    this.map.scrollZoom.disable();
    this.map.on('load', this.setMapHeight.bind(this));
  }

  setMapHeight () {
    this.map.resize();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.position === 'bottom' && this.props.position === 'center' && !this.state.hasSubmitted) {
      TweenLite.fromTo(this.refs.formCtr, 2, {xPercent: 0, y: 800}, {xPercent: 0, y: 0, ease: Expo.easeInOut});
    }
  }

  hideForm () {
    this.setState({hasSubmitted: true});
    TweenLite.to(this.refs.formCtr, 0.8, {y: 800, ease: Expo.easeInOut, delay: 1.3});
  }

  render () {
    return (
      <div className={classes.connectSlide} id='connect-slide'>
        <div className={classes.connectForm}>
          <div ref='formCtr' className={classes.connectFormCtr}>
            <div className={classes.connectFormCtrInner}>
              <h2 className={classes.connectFormHeadline}>
                work with us
              </h2>
              <p className={classes.form_copy}> we are always looking for great new opportunities. we'd love to work with you on your idea, however big or small.</p>
              <ContactForm successFn={this.hideForm.bind(this)} hideCopy />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSlide;
