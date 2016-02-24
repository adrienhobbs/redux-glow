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
    const ResultsSection = this.getResultsTemplate();
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <div className={classes.cnSection}>
            {this.createHeadlineEl('the calendar')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={this.getCopyStyle()}>To ensure we addressed an audience that is evermore increasing its presence on mobile, Glow developed a mobile/tablet friendly HTML experience, where over the course of twelve days, fans were invited to become heroes each day, smashing ice blocks to free their favorite AT characters from the Ice King's frosty clutches. Custom animations captured the groovy, irreverent whimsy nature of the show and created a daily branded experience for fans. Each day featured a new character to be freed along with an exclusive 'thank you' to fans, offering everything from downloadable craft projects and video clips, to exclusive ringtones and discounts on Adventure Time gear.</p>
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
