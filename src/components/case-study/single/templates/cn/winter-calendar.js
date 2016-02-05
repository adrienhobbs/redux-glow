import React, { PropTypes } from 'react';
import BaseTemplate from '../base-study-template';
import classes from './winter-calendar.scss';
import AboutSection from '../../../content-modules/about.js';

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
          <AboutSection data={this.props.data} />
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
