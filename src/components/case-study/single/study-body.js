import React, { PropTypes } from 'react';
import du from 'domutil';
import Templates from './templates';
import Lockup from 'components/ui/lockup/lockup.js';
import styles from './case-study.css';
import DriveIn from 'react-drive-in';
// import classes from 'components/ui/header-component/header-component.css';

const StudyBody = React.createClass({

  propTypes: {
    data: PropTypes.object,
    isVisible: PropTypes.bool,
    viewport: PropTypes.object
  },

  componentDidMount () {
    // document.body.webkitRequestFullscreen();
    this.TL = new TimelineLite({autoRemoveChildren: true});
    TweenLite.set(this.refs.studyWrapper, {yPercent: 140});
    TweenLite.to(this.refs.studyOverlay, 0.8, {autoAlpha: 1, ease: Circ.easeInOut, onComplete: () => this.bringInContent()});
    // this.bringInContent();
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
      return (<DriveIn show={[this.props.data.get('backgroundVideoUrl'), this.props.data.get('backgroundImageUrl')]} />);
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
          <div className={styles.study_content_wrapper}>
            <div className={styles.study_content_mask} style={{ background: this.props.data.get('secColor') }}></div>
            <StudyTemplate viewport={this.props.viewport} data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
});

export default StudyBody;

            // <div style={{height: 200}}>
            //   <svg className={classes.gradientSvg}>
            //     <linearGradient id='t' gradientTransform='rotate(70)'>
            //       <stop offset='0.4' stopColor={this.props.data.get('secColor')} stopOpacity='0' ref='endStop' />
            //       <stop offset='0.1' stopColor={this.props.data.get('secColor')} />
            //     </linearGradient>
            //     <rect x='0' y='0' width='100%' height='100%' fill='url(#t)' />
            //   </svg>
            // </div>
