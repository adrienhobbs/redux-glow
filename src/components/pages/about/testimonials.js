import React from 'react';
import testimonials from 'constants/data/testimonials';
import TestimonialSlider from 'react-slick';
import styles from './testimonials.css';

const Testimonials = React.createClass({
  getInitialState () {
    return null;
  },
  getTestimonials () {
    return testimonials.toJS().map((testimony, i) => {
      return (
        <div key={i} className={styles.about_quote_wrap}>
          <div className={styles.about_quote}>
            {testimony.copy}
          </div>
          <div className={styles.quote_attr}>-{testimony.attribute}</div>
        </div>
      );
    });
  },
  render () {
    const settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <TestimonialSlider {...settings} >
        {this.getTestimonials()}
      </TestimonialSlider >
    );
  }
});

export default Testimonials;
