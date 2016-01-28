import React from 'react';
import classes from './contact-slide.scss';
// import 'views/Pages/connect.scss';
import Newsletter from 'components/forms/newsletter-input';
import ContactForm from 'components/forms/contact-form';

const ContactSlide = React.createClass({
  getInitialState () {
    return null;
  },

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
          // <div className='connect-inner left' id='connect-left-slide'></div>
          // <div className='connect-inner right' id='connect-right-slide'>
          //   <div className='connect-inner-row'>
          //     <ContactForm hideCopy />
          //     <Newsletter />
          //     <div className='connect-information'>
          //       <div id='where-we-are' className='connect-info-box'>
          //         <h1 className='connect-headline'>where we are</h1>
          //         <ul className='connect-info-box-inner'>
          //           <li>333 Hudson Street</li>
          //           <li>Suite 302</li>
          //           <li>New York, NY 10013</li>
          //           <li>+1 212-206-7370</li>
          //         </ul>
          //         <a href='mailto:hello@weareglow.com'>hello@weareglow.com</a>
          //       </div>
          //       <div id='work-for-us' className='connect-info-box'>
          //         <h1 className='connect-headline'>work with us</h1>
          //         <ul className='connect-info-box-inner'><li>we are always looking for talented people. please check out our current openings or just send us an email.</li></ul>
          //         <a href='mailto:hello@weareglow.com'>jobs@weareglow.com</a>
          //       </div>
          //     </div>
          //   </div>
          // </div>
