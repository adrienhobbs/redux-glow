import React from 'react';
import classes from './contact-slide.scss';
// import 'views/Pages/connect.scss';
import Newsletter from 'components/forms/newsletter-input';
import ContactForm from 'components/forms/contact-form';

const ContactSlide = React.createClass({

  render () {
    return (
      <div className={classes.connectSlide} id='connect-slide'>
        <div className={classes.map}>
        </div>
        <div className={classes.connectForm}>
          <ContactForm />
        </div>
        <div className={classes.connectForm}>
          <Newsletter />
        </div>
      </div>
    );
  }
});

export default ContactSlide;

