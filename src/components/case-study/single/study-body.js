import React, { PropTypes } from 'react';
import du from 'domutil';
import Templates from './templates';
import Lockup from 'components/ui/lockup/lockup.js';
import styles from './case-study.css';
import DriveIn from 'react-drive-in';

const StudyBody = React.createClass({

  propTypes: {
    data: PropTypes.object,
    isVisible: PropTypes.bool,
    viewport: PropTypes.object
  },
  componentDidMount () {
    this.TL = new TimelineLite({autoRemoveChildren: true});
    TweenLite.set(this.refs.studyWrapper, {yPercent: 140});
    TweenLite.to(this.refs.studyOverlay, 0.8, {autoAlpha: 1, ease: Circ.easeInOut, onComplete: () => this.bringInContent()});
  },

  scrollOutContent () {
    console.log('yahos');
  },
  shouldComponentUpdate (nextProps) {
    return !(nextProps.isVisible === this.props.isVisible) ||
      (nextProps.viewport.orientation !== nextProps.viewport.orientation);
  },
  componentWillUpdate (nextProps) {
    this.setIntroCtrHeight();
    if (!nextProps.isVisible) {
      this.slideDownContent();
    }
  },
  getLogoColor () {
    return (this.props.data.get('clientLogoColor')) ? this.props.data.get('clientLogoColor') : null;
  },
  setIntroCtrHeight () {
    if (this.props.viewport.isPhone) {
      if (this.props.viewport.orientation === 'landscape') {
        TweenLite.set(this.refs.introCtr, {height: '90%'});
        TweenLite.set(this.refs.overlayInfo, {top: '50%', maxWidth: '60%'});
      }
    }
  },
  getCopyStyle () {
    return {
      color: this.props.data.get('copyColor') || '#fff'
    };
  },
  getHeadlineStyle () {
    return {
      color: this.props.data.get('headlineColor') || '#000'
    };
  },
  getStudyTemplate () {
    return Templates[this.props.data.get('templateName')];
  },
  bringInContent () {
    this.setIntroCtrHeight();
    TweenLite.fromTo(this.refs.studyWrapper, 0.8, {yPercent: 140, autoAlpha: 1}, {yPercent: 0, ease: Expo.easeInOut, delay: 0.5});
  },
  slideDownContent () {
    TweenLite.to(this.refs.studyWrapper, 0.5, {yPercent: 140, autoAlpha: 0, ease: Expo.easeInOut});
    du.removeClass(this.refs.studyWrapper, 'y-overflow-auto');
  },
  getBgVideo () {
    if (this.props.data.get('backgroundVideoUrl')) {
      return (<DriveIn loop show={[this.props.data.get('backgroundVideoUrl'), this.props.data.get('backgroundVideoPoster')]} />);
    }
  },
  render () {
    const StudyTemplate = this.getStudyTemplate();
    return (
      <div className='study-outer'>
        {this.getBgVideo()}
        <div ref='studyOverlay' className={styles.study_overlay}>
          <div className={styles.overlay_info} ref='overlayInfo'>
            <Lockup data={this.props.data} single />
            <div className={styles.study_headline_subtitle}>{this.props.data.get('subtitle')}</div>
          </div>
        </div>
        <div ref='studyWrapper' className={styles.case_study_single_wrapper}>
          <div className={styles.study_intro_container} ref='introCtr'></div>
          <div className={styles.study_content_wrapper} style={{ background: this.props.data.get('secColor') }}>
            <div className={styles.study_content_mask}   style={{ background: this.props.data.get('secColor') }}></div>
            <StudyTemplate viewport={this.props.viewport} data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
});

export default StudyBody;
