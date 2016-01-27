import React from 'react';
import testimonials from 'constants/data/testimonials';
import TestimonialSlider from 'react-slick';

const Testimonials = React.createClass({
  getInitialState () {
    return null;
  },
  getTestimonials () {
    return testimonials.toJS().map((testimony, i) => {
      return (
        <div key={i} className="about-quote-wrap">
          <div className="about-quote">
            {testimony.copy}
          </div>
          <div className="quote-attr">-{testimony.attribute}</div>
        </div>
      );
    });
  },
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="about-container-inner" id='testimonials'>
        <TestimonialSlider {...settings} >
          {this.getTestimonials()}
        </TestimonialSlider >
        <div className="quote-mark left">“</div>
        <div className="quote-mark right">”</div>
      </div>
    );
  }
});

export default Testimonials;
