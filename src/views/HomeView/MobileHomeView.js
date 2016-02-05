import React from 'react';
import Work from 'components/work-items';
import AllClients from 'components/ui/clients-component/index.js';
import {Link} from 'react-router';
import PageLayout from 'layouts/PageLayout/PageLayout';

export class HomeMobile extends PageLayout {

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.pageCtr = document.getElementsByClassName('page-container')[0];
    this.TL = new TimelineLite();
    this.TL.set(this.pageCtr, {width: '100%'});
  }

  onChange (state) {
    this.setState(state);
  }

  render () {
    return (
      <div className='mobile-home-wrap' ref='page'>
        <div className='home-mobile'>
          <div className='home-mobile-image'>
          </div>
          <div className='wrap'>
            <h1 ref='hdl' className='page-title' >we are glow</h1>
            <p ref='p'>We activate fans, build and nurture communities and create interactive experiences that engage and convert.  </p>
            <div id='scroll-for-more'>
              <div>view our work</div>
              &#8595;
            </div>
          </div>
        </div>
        <div id='featured-work'>
          <Work featuredWorkOnly mobileLayout/>
        </div>
        <div className='clients mobile clients-mobile'>
          <div className='clients-mobile-wrap'>
            <AllClients mobileHome />
            <div className='services-button'>
              <Link to='/services'>
                <button>view our services  &#8594;</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='about-glow about-mobile'>
          <div className='header-image'></div>
          <h2 className='page-title'>we are glow</h2>
          <p>Glow is an award-winning digital marketing and creative agency based in New York City that has been driving the digital marketing revolution since 1999. Everything we do puts consumers first, ensuring they're engaged, entertained, challenged and connected—no matter the medium.</p>
          <div className='contact-bucket'>
            <div className='contact-bucket-inner-wrap'>
              <h2 className='page-title'>contact</h2>
              <p className='contact-bucket-body'>
                333 Hudson Street <br />
                Suite 302 <br />
                New York NY, 10013 <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeMobile;
