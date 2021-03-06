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
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data}>
            <a target='_blank' href='https://s3.amazonaws.com/weareglow-assets/winter-calendar/index.html'>
              <div className={classes.cnButton}>
                view the site
              </div>
            </a>
          </AboutSection>
          <div className={classes.cnSection}>
            {this.createHeadlineEl('the calendar')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={this.getCopyStyle()}>To ensure we addressed an audience that is ever-more increasing its presence on mobile, GLOW developed a mobile/tablet-friendly HTML experience, where over the course of twelve days, fans were invited to become heroes each day, smashing ice blocks to free their favorite AT characters from the Ice King's frosty clutches. Custom animations captured the groovy, irreverent, and whimsical nature of the show and created a daily-branded experience for fans. Each day featured a new character to be freed along with an exclusive 'thank you' to fans, offering everything from downloadable craft projects and video clips, to exclusive ringtones and discounts on Adventure Time gear.</p>
              </div>
            </div>
          </div>
          <div className={classes.cnImage}>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/calendar.jpg' className='' alt='' />
          </div>
          <div className='inner_section'>
            {this.createHeadlineEl('the dancers')}
          </div>

          <div className={classes.dancerRow}>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-01.gif' alt='' />
            </div>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-02.gif' alt='' />
            </div>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-03.gif' alt='' />
            </div>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-04.gif' alt='' />
            </div>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-05.gif' alt='' />
            </div>
            <div className={classes.dancer}>
              <img className={classes.dancerImg} src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/dancer-06.gif' alt='' />
            </div>
          </div>
          <div className='ui-elements inner_section'>
            {this.createHeadlineEl('ui-elements')}
          </div>
          <div className={classes.cnImage}>
            <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/ui-01.png' className={classes.cnSingleImage} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default WinterCalendar;
