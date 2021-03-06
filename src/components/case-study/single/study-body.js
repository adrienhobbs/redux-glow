import React, { PropTypes } from 'react';
import du from 'domutil';
import Templates from './templates';
import Lockup from 'components/ui/lockup/lockup.js';
import styles from './case-study.css';
import DriveIn from 'react-drive-in';

class StudyBody extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    isVisible: PropTypes.bool,
    viewport: PropTypes.object
  }

  componentWillUnmount () {
    this.metaOg.content = 'https://s3.amazonaws.com/weareglow-assets/assets/glow.png';
  }

  componentDidMount () {
    this.metaOg = document.getElementById('meta-og');
    this.metaOg.content = this.props.data.get('backgroundImageUrl');
    this.TL = new TimelineLite({autoRemoveChildren: true});
    TweenLite.set(this.refs.studyWrapper, {yPercent: 140});
    TweenLite.to(this.refs.studyOverlay, 0.8, {autoAlpha: 1, ease: Circ.easeInOut, onComplete: () => this.bringInContent()});
    TweenLite.fromTo(this.refs.scrollDown, 0.9, {autoAlpha: 0, y: -30}, {autoAlpha: 1, y: 0, ease: Expo.easeOut, delay: 1.5});
    TweenLite.fromTo(this.refs.scrollVerticalBar, 0.9, {autoAlpha: 0, height: 0}, {autoAlpha: 1, height: '18%', ease: Expo.easeInOut, delay: 1.9});
    try {
      fbq('track', 'PageView');
    } catch (err) {
      console.log(err);
    }
  }

  shouldComponentUpdate (nextProps) {
    return !(nextProps.isVisible === this.props.isVisible) ||
    (nextProps.viewport.orientation !== nextProps.viewport.orientation);
  }

  componentWillUpdate (nextProps) {
    this.setIntroCtrHeight();
    if (!nextProps.isVisible) {
      this.slideDownContent();
    }
  }

  getLogoColor = () => {
    return (this.props.data.get('clientLogoColor')) ? this.props.data.get('clientLogoColor') : null;
  }

  setIntroCtrHeight = () => {
    if (this.props.viewport.isPhone) {
      if (this.props.viewport.orientation === 'landscape') {
        TweenLite.set(this.refs.introCtr, {height: '90%'});
        TweenLite.set(this.refs.overlayInfo, {top: '50%', maxWidth: '60%'});
      }
    }
  }

  getCopyStyle = () => {
    return {
      color: this.props.data.get('copyColor') || '#fff'
    };
  }

  getHeadlineStyle = () => {
    return {
      color: this.props.data.get('headlineColor') || '#000'
    };
  }

  getStudyTemplate = () => {
    return Templates[this.props.data.get('templateName')];
  }

  bringInContent = () => {
    this.setIntroCtrHeight();
    TweenLite.fromTo(this.refs.studyWrapper, 0.8, {yPercent: 0, autoAlpha: 1}, {yPercent: 0, ease: Expo.easeInOut, delay: 0.5});
  }

  slideDownContent = () => {
    TweenLite.to(this.refs.studyWrapper, 0.5, {yPercent: 140, autoAlpha: 0, ease: Expo.easeInOut});
    du.removeClass(this.refs.studyWrapper, 'y-overflow-auto');
  }

  getBgVideo = () => {
    if (this.props.data.get('backgroundVideoUrl')) {
      return (<DriveIn loop show={[this.props.data.get('backgroundVideoUrl'), this.props.data.get('backgroundVideoPoster')]} />);
    }
  }

  getFWA = () => {
    var style = {position: 'absolute', bottom: 0, left: 0, zIndex: 11, width: 160, maxWidth: '30%'};
    if (this.props.data.get('hasFWAAward')) {
      return <img style={style} className='featured-ribbon' src='https://s3.amazonaws.com/weareglow-assets/global-assets/%402_FOTD+%E2%80%93+bottom+left.png' />;
    } else {
      return null;
    }
  }

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
          <div className='scroll_down_ctr' style={{height: '100%', width: '100%', position: 'relative', top: 0}}>
            <div ref='scrollVerticalBar' className={styles.scroll_down_vert} ></div>
            <div ref='scrollDown' className={styles.scroll_down}>scroll</div>
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
}

export default StudyBody;
