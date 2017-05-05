import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
// import styles from './profit.css';

export class Profit extends BaseTemplate {

  static propTypes = {
    data: React.PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content' style={{fontWeight: 300, background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <article className='approach'>
            {this.createHeadlineEl('the deal map')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cnbc/the_profit/profit-img-4.jpg' alt='profit' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Our team conceived, designed and developed The Deal Map (thedealmap.cnbc.com), an interactive experience to give fans a deeper dive into The Profit’s past business ventures.  To provide the most authentic map experience we integrated Mapbox technology into our solution, allowing for optimized performance in a responsive web environment. Interacting with the various location indicated on the map enables fans to explore each business in more detail.</p>
                <p style={copyStyle}>Each location on the map includes more information on the company such as the headquarters location, the financial basics of the deal, company site and social channels, video of the deal negotiated with Marcus and a number of moments from the episode that fans can share to their social channels. Fans can also see the various additional locations for any businesses that have expanded through franchises.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cnbc/the_profit/profit-img-3.jpg' alt='profit' />
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cnbc/the_profit/profit-img-2.jpg' alt='profit' />
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cnbc/the_profit/profit-img-1.jpg' alt='profit' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Profit;
            // <a target='_blank' href='http://www.syfy.com/hunters/theyareamongus/'>
            //   <div className={styles.profitBtn}>
            //     view the map
            //   </div>
            // </a>
