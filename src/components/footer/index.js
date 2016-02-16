import React from 'react';
import styles from './footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <article className={styles.desktop_footer}>
        <section className={styles.footer_section_left}>
          <ul className={styles.mobile_list}>
            <li>info@weareglow.com</li>
            <li>+1 212-206-7370</li>
          </ul>
        </section>
        <section className={styles.footer_section_middle}>
          <ul className={styles.mobile_list}>
            <li>333 hudson street</li>
            <li>new york, ny 10013</li>
          </ul>
        </section>
        <section className={styles.footer_section_right}>
          <ul className={styles.mobile_list}>
            <li><a href='http://www.twitter.com/glow'>twitter</a></li>
            <li><a href='https://www.facebook.com/glowinteractive'>facebook</a></li>
          </ul>
        </section>
      </article>
      <article className={styles.footer_mobile}>
        <ul>
          <li><a href='http://www.twitter.com/glow'>
              <svg className={styles.iconSVG} role='img' >
                <use xlinkHref='#glow-icon-twitter'></use>
              </svg>
          </a></li>
          <li><a href='https://www.facebook.com/glowinteractive'>
              <svg className={styles.iconSVG}  role='img' >
                <use xlinkHref='#glow-icon-facebook'></use>
              </svg>
          </a></li>
          <li><a href='mailto:info@glowinteractive.com'>
              <svg className={styles.iconSVG} role='img' >
                <use xlinkHref='#glow-icon-email'></use>
              </svg>
          </a></li>
        </ul>
      </article>
      <section className={styles.footer_colophon}>
        © 1999 - 2015 GLOW - all rights reserved
      </section>
    </footer>
  );
};

export default Footer;
