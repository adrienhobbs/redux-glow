import React, { PropTypes } from 'react';
import Newsletter from 'components/forms/newsletter-input';
import ContactForm from 'components/forms/contact-form';
import Header from 'components/ui/header-component/header-component.js';
import styles from './connect.css';

export class ConnectView extends React.Component {

  static contextTypes = {
    setupPageInfo: PropTypes.func,
    animatePageContentIn: PropTypes.func,
    viewport: PropTypes.object
  };

  constructor (props) {
    super(props);
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdpbGwiLCJhIjoiY2lqb3B4cmRrMDB3a3Q5a28xaHg0cnM0NiJ9.cmyU94c4wtK1aEs-cNfnCw';
  }

  componentDidMount () {
    this.context.setupPageInfo('Connect');
    this.context.animatePageContentIn(this.refs.page);
    if (!this.context.viewport.isPhone) {
      this.map = new mapboxgl.Map({
        container: this.refs.map,
        style: 'mapbox://styles/mattwill/cijysv78o00uo90lxte3x4fua',
        center: [-73.92, 40.73],
        zoom: 11.95
      });
      this.map.scrollZoom.disable();
      this.map.on('load', this.setHeight.bind(this));
    }
  }

  setHeight () {
    this.map.resize();
  }

  render () {
    return (
      <div className='container' id='connect' ref='page'>
        <Header hideGradient title={'connect'} subtitle={'Yeah Dawg, Like Connect With Us'} />
        <div className={styles.full_width_container}>
          <div className={styles.connect_page_map} ref='map'>
          </div>
          <div className={styles.connect_map_inner_left}>
          </div>
          <div className={styles.connect_map_inner_right}>
            <div className={styles.connect_forms_container}>
              <h1 className={styles.connect_headline}>work with us</h1>
              <p className={styles.connect_information}> we are always looking for great new opportunities. we'd love to work with you on your idea, however big or small.</p>
              <ContactForm hideCopy />
              <h1 className={styles.connect_headline}>join the newsletter</h1>
              <p className={styles.connect_information}>stay up on the industry with glow's monthly newsletter. chalk full of relevant industry news and inspiring work.</p>
              <Newsletter hideCopy />
              <div className={styles.connect_information}>
                <div id='where-we-are' className={styles.connect_info_box}>
                  <h1 className={styles.connect_headline}>where we are</h1>
                  <ul className={styles.connect_info_box_inner}>
                    <li>333 Hudson Street</li>
                    <li>Suite 302</li>
                    <li>New York, NY 10013</li>
                    <li>+1 212-206-7370</li>
                  </ul>
                  <div className={styles.link_ctr}>
                    <a className='hoverline' href='mailto:hello@weareglow.com'>hello@weareglow.com</a>
                  </div>
                </div>
                <div id='work-for-us' className={styles.connect_info_box}>
                  <h1 className={styles.connect_headline}>work with us</h1>
                  <ul className={styles.connect_info_box_inner}><li>we are always looking for talented people. please check out our current openings or just send us an email.</li></ul>
                  <div className={styles.link_ctr}>
                    <a className='hoverline' href='mailto:hello@weareglow.com'>jobs@weareglow.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectView;
