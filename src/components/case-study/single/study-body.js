import React, { PropTypes } from 'react';
import du from 'domutil';
import StudyProjectTitle from 'components/ui/study-project-title';
import Templates from './templates';

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
    TweenLite.fromTo(this.refs.studyWrapper, 0.8, {yPercent: 140, autoAlpha: 1},
      {
        yPercent: 0,
        ease: Expo.easeInOut,
        onComplete: () => {
          du.addClass(this.refs.studyWrapper, 'y-overflow-auto');
        },
        delay: 0.5
      });
  },
  slideDownContent () {
    TweenLite.to(this.refs.studyWrapper, 0.5, {yPercent: 140, autoAlpha: 0, ease: Expo.easeInOut});
    du.removeClass(this.refs.studyWrapper, 'y-overflow-auto');
  },
  render () {
    const StudyTemplate = this.getStudyTemplate();
    return (
      <div className='study-outer'>
        <div ref='studyOverlay' className='study-overlay'>
          <div className='overlay-info' ref='overlayInfo'>
            <StudyProjectTitle logoColor={this.getLogoColor()} single path={this.props.data.get('infoPath')} projectColor='#fff'/>
            <div className='study-headline-subtitle'>{this.props.data.get('subtitle')}</div>
          </div>
        </div>
        <div ref='studyWrapper' className='wrapper case-study-single'>
          <div className='study-intro-container' ref='introCtr'></div>
          <div className='study-content-wrapper'>
            <div className='study-content-mask' style={{ background: this.props.data.get('secColor') }}></div>
            <StudyTemplate data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
});

export default StudyBody;