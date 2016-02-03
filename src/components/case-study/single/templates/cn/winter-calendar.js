import React, { PropTypes } from 'react';
import Sidebar from 'components/ui/sidebar';
import BaseTemplate from '../base-study-template';
import classes from './winter-calendar.scss';

export class WinterCalendar extends BaseTemplate {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <h1 style={this.getHeadlineStyle()} className='page-title'>about</h1>
          <div className='copy' id='about'>
            <div className='about-left'></div>
            <div className='about-center'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>We do it for the kids. Lormem itsa inaugural season. However, critical acclaim is simply not enough. GLOW approached HBO and took this opportunity to do what we do best - build audience and expand the social footprint with a smart, strong strategy and quality social content...and lots of it. <br/><br/> All the while, we were striving to redefine how a thirty-minute comedy is marketed on social media. <br/><br/> And it worked.</p>
                <div className={classes.outerButton}>
                  <a href='http://www.weareglow.com/staging/cartoon_network/winter-calendar/' target='_blank'>
                    <div className={classes.cnButton}> <span>view the site  &#8594;</span></div>
                  </a>
                </div>
              </div>
            </div>
            <Sidebar data={this.props.data}/>
          </div>
          <article className='results' id='results'>
            <div className='results-bg' style={{backgroundColor: this.props.data.get('results').bgColor}}></div>
            <div className='results-outer'>
              <h1 style={this.getHeadlineStyle()} className='page-title'>results</h1>
              <div className={classes.resultsInner}>
                <div className='stat-boxes'>
                  <div className='stat-cn'>
                    <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                      3,345
                    </div>
                    <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                      facebook likes
                    </h5>
                  </div>
                  <div className='stat-cn-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/winter-cal-results.png' alt='' />
                  </div>
                  <div className='stat-cn'>
                    <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                      52,456
                    </div>
                    <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                      page views
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className={classes.cnSection}>
            {this.createHeadlineEl('the calendar')}
          </div>
          <div className={classes.cnImage}>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/the-calendar.jpg' className='' alt='' />
          </div>
          <div className='the-dancers cn-section'>
            {this.createHeadlineEl('the dancers')}
          </div>
          <div className={classes.cnImage}>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/the-dancers.png' className='' alt='' />
          </div>
          <div className='ui-elements cn-section'>
            {this.createHeadlineEl('ui-elements')}
          </div>
          <div className={classes.cnImage}>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/ui-elements.png' className={classes.cnSingleImage} alt='' />
          </div>
          <div className='end'>
            <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
              <polygon style={{fill:  this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default WinterCalendar;
