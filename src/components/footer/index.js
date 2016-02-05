import React from 'react';
import './footer.scss';
import Icon from 'react-evil-icons';

const Footer = React.createClass({

  render () {
    return (
      <footer id='footer'>
        <article className='desktop'>
          <section className='left footer-section'>
            <ul>
              <li>info@weareglow.com</li>
              <li>+1 212-206-7370</li>
            </ul>
          </section>
          <section className='middle footer-section'>
            <ul>
              <li>333 hudson street</li>
              <li>new york, ny 10013</li>
            </ul>
          </section>
          <section className='right footer-section'>
            <ul>
              <li><a href='http://www.twitter.com/glow'>twitter</a></li>
              <li><a href='https://www.facebook.com/glowinteractive'>facebook</a></li>
            </ul>
          </section>
        </article>
        <article className='mobile'>
          <ul>
            <li><a href='http://www.twitter.com/glow'><Icon name='ei-sc-twitter' size='70px'/></a></li>
              <li><a href='https://www.facebook.com/glowinteractive'><Icon name='ei-sc-facebook' size='70px'/></a></li>
            <li><a href='mailto:info@glowinteractive.com'><Icon name='ei-envelope' size='70px'/></a></li>
          </ul>
        </article>
        <section className='colophon'>
          © 1999 - 2015 GLOW - all rights reserved
        </section>
      </footer>
    );
  }
});

export default Footer;

