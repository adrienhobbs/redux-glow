import React from 'react';
import Newsletter from 'components/forms/newsletter-input';
import ContactForm from 'components/forms/contact-form';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { connect } from 'react-redux';
import Header from 'components/ui/header-component/header-component.js';

const mapStateToProps = (state) => ({
  routerstate: state.router,
  viewport: state.viewport
});

export class ConnectView extends PageLayout {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.setupPageInfo('Connect');
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHdpbGwiLCJhIjoiY2lqb3B4cmRrMDB3a3Q5a28xaHg0cnM0NiJ9.cmyU94c4wtK1aEs-cNfnCw';
  }

  componentDidMount () {
    console.log(this.props);
    this.animatePageContentIn();
    if (!this.props.viewport.isPhone) {
      this.map = new mapboxgl.Map({
        container: this.refs.map,
        style: 'mapbox://styles/mattwill/cijysv78o00uo90lxte3x4fua',
        center: [-74.01, 40.73],
        zoom: 14
      });
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
        <div className='full-width-container'>
          <div id='connect-page-map' ref='map'>
          </div>
          <div className='connect-map-inner-left'>
          </div>
          <div className='connect-map-inner-right'>
            <div className='connect-forms-container'>
              <ContactForm />
              <Newsletter />
              <div className='connect-information'>
                <div id='where-we-are' className='connect-info-box'>
                  <h1 className='connect-headline'>where we are</h1>
                  <ul className='connect-info-box-inner'>
                    <li>333 Hudson Street</li>
                    <li>Suite 302</li>
                    <li>New York, NY 10013</li>
                    <li>+1 212-206-7370</li>
                  </ul>
                  <a className='hoverline' href='mailto:hello@weareglow.com'>hello@weareglow.com</a>
                </div>
                <div id='work-for-us' className='connect-info-box'>
                  <h1 className='connect-headline'>work with us</h1>
                  <ul className='connect-info-box-inner'><li>we are always looking for talented people. please check out our current openings or just send us an email.</li></ul>
                  <a className='hoverline' href='mailto:hello@weareglow.com'>jobs@weareglow.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ConnectView);
// <div className='header'>
//   <div ref='headerImage' className='header-image'></div>
//   <h1 className='page-title'>connect</h1>
//   <h4 className='page-subtitle'>{this.pageSubTitle()}</h4>
// </div>
//           <div className='row'>
//             <div className='connect-inner left'>
//               <div id='connect-page-map' ref='map'></div>
//             </div>
//             <div className='connect-inner right'>
//               <ContactForm />
//               <Newsletter />
// <div className='connect-information'>
//   <div id='where-we-are' className='connect-info-box'>
//     <h1 className='connect-headline'>where we are</h1>
//     <ul className='connect-info-box-inner'>
//       <li>333 Hudson Street</li>
//       <li>Suite 302</li>
//       <li>New York, NY 10013</li>
//       <li>+1 212-206-7370</li>
//     </ul>
//     <a href='mailto:hello@weareglow.com'>hello@weareglow.com</a>
//   </div>
//   <div id='work-for-us' className='connect-info-box'>
//     <h1 className='connect-headline'>work with us</h1>
//     <ul className='connect-info-box-inner'><li>we are always looking for talented people. please check out our current openings or just send us an email.</li></ul>
//     <a href='mailto:hello@weareglow.com'>jobs@weareglow.com</a>
//   </div>
// </div>
// //             </div>

// //           </div>
