import React, { PropTypes } from 'react';
// import du from 'domutil';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
// import scroll from 'scroll';
// import '../study-closed.scss';
import PageLayout from 'layouts/PageLayout/PageLayout';
import truncate from 'lodash/truncate.js';
import trimStart from 'lodash/trimStart.js';

import { connect } from 'react-redux';
const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  routerState: state.router
});

export class FeaturedStudyMobile extends PageLayout {

  static propTypes = {
    TL: PropTypes.object,
    position: PropTypes.string,
    data: PropTypes.object,
    toggleNav: PropTypes.func
  };

  constructor (props) {
    super(props);
    this.state = {
      singleMode: false,
      showBody: false,
      isHovered: false
    };
  }

  componentDidMount () {
    this.wrap    = this.refs.projectIntro;
    this.mask    = this.refs.mask;
    this.name    = this.refs.name;
    this.sep     = this.refs.sep;
    this.title   = this.refs.title;
    this.tags    = this.refs.tags;
    this.overlay = this.refs.overlay;
    this.TL = new TimelineMax({onReverseCompleteParams: ['{self}'], onReverseComplete:  (self)  => { self.clear(); }});
  }
  static contextTypes = {
    viewport: PropTypes.object,
    router: PropTypes.object
  };

  componentWillReceiveProps (nextProps) {
    // if (!this.props.isHidden && nextProps.isHidden) {
    //   TweenLite.set([this.refs.projectBox, this.refs.projectIntro], {zIndex: 10});
    //   // TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.3, {opacity: 0, autoAlpha: 1, ease: Expo.easeInOut});
    // } else if (this.props.isHidden && !nextProps.isHidden) {
    //   TweenLite.set([this.refs.projectBox, this.refs.projectIntro], {zIndex: 10});
    //   // TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.3, {delay: 0.1, autoAlpha:1, opacity: 1, ease: Expo.easeOut});
    // }
  }

  hideOrShow (prevProps, prevState) {
    if (this.props.isHidden && !prevProps.isHidden) {
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.4, {delay:this.props.id / 150, zIndex: 1, autoAlpha: 1, ease: Expo.easeInOut});
    } else if (!this.props.isHidden && prevProps.isHidden) {
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.6, {delay:this.props.id / 200, autoAlpha:1, clearProps: 'z-index', ease: Expo.easeInOut});
    }
  }

  componentDidUpdate (prevProps, prevState) {
    this.hideOrShow(prevProps, prevState);
    (!prevState.singleMode && this.state.singleMode) ? this.openStudy() : false;
    (prevState.singleMode && !this.state.singleMode) ? this.closeStudy() : false;
  }

  getTrackTween () {
    const TL = new TimelineLite();
    const rect = this.refs.projectIntro.getBoundingClientRect();
    const projHeight = this.refs.projectBox.getBoundingClientRect().height;
    const windowW = window.innerWidth;
    TL.set(this.refs.projectIntro, {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      z: 0,
      position: 'fixed',
      overflow: 'hidden',
      zIndex: 99
    });
    TweenLite.set(this.refs.projectBox, {height: projHeight});

    TL.set(this.refs.projectImage, {
      className: '-=link'
    }, 0);

    TL.to(this.refs.projectIntro, 0.7, {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      z: 0,
      xPercent: -50,
      ease: Expo.easeInOut,
      clearProps: 'all',
      className: '-=closed',
      onComplete: () => {
        this.setState({showBody: !this.state.showBody});
      }
    }, 0);
    return TL;
  }

  getNavTween () {
    const TL = new TimelineLite();
    TL.add(this.actions.changeNavState.bind(this, {isVisible: !this.state.singleMode}));
    return TL;
  }

  toggleStudyState () {
    this.setState({singleMode: !this.state.singleMode, isHovered: false});
  }

  openStudy () {
    TweenLite.set([document.body], {className: '+=locked'});
    this.props.hideOthers(this.props.id, true);
    TweenLite.set([this.refs.overlay, this.refs.projectInfo], {autoAlpha: 0});
    this.studyTL = new TimelineLite({onComplete: () => this.setState({showBody: true})});
    this.studyTL.addLabel('start');
    this.studyTL.add(this.getTrackTween(), 'start+=0.2');
    this.studyTL.add(this.getNavTween(), 'start');
  }

  unHideOthers () {
    return () => {
      this.props.hideOthers(null, false);
    };
  }

  getReverseTrackTween () {
    const TL = new TimelineLite();
    const rect = this.refs.mobileWrap.getBoundingClientRect();
    const infoHeight = this.refs.mobileWrap.getBoundingClientRect().height;

    TL.set(this.refs.projectImage, {
      className: '+=link'
    }, 0);

    TL.to(this.refs.projectIntro, 0.8, {
      width: rect.width,
      height: infoHeight,
      x: rect.left,
      y: rect.top,
      z: 0,
      ease: Expo.easeInOut,

      onComplete: () => {
        TweenLite.set([document.body], {className: '-=locked'});
        TweenLite.set(this.refs.projectIntro, {clearProps: 'all', className: '+=closed'});
        TweenLite.set(this.refs.projectBox, {clearProps: 'visibility,opacity,height,z-index'});
      }
    }, 0);

    return TL;
  }

  closeStudy () {
    const sequence = new TimelineLite({paused: true, onComplete: () => this.setState({closed: true})});
    this.setState({closed: false, showBody: false});
    TweenLite.set(this.refs.projectIntro, {overflow: 'hidden'});
    sequence.add(this.reverseStudyTL.bind(this), 0);
    sequence.add(this.getNavTween.bind(this), 1.4);
    sequence.add(this.unHideOthers(), 0.2);
    sequence.add(TweenLite.to(this.refs.projectInfo, 1.3, {autoAlpha: 1}), 1);
    sequence.play();
  }

  openStudyFromProject () {
    if (!this.state.singleMode) {
      this.toggleStudyState();
    }
  }
  reverseStudyTL () {
    this.studyTL.eventCallback('onReverseComplete', () => {
      TweenLite.set([this.refs.projectIntro, this.refs.projectImage, this.refs.projectBox], {
        clearProps: 'height'
      });
    });
    TweenLite.set([document.body, document.documentElement], {className: '-=locked'});
    // return this.studyTL.reverse();
    return this.getReverseTrackTween();
  }

  getDescStyle () {
    return {
      color: this.props.data.get('mobile').summaryCopyColor || '#fff'
    };
  }
  getSummaryText () {
    return truncate(trimStart(this.props.data.get('aboutCopy'), '<p>'), {length: 150, separator: ' '});
  }

  render () {
    this.getSummaryText();
    const backBar = (this.state.singleMode) ? <BackBar showBar={this.state.showBody} singleMode={this.state.singleMode} data={this.props.data.toJS()} goBack={this.toggleStudyState.bind(this)}  /> : null;
    return (
      <div className='project mobile'
        ref='projectBox'
        style={{background: this.props.data.get('mobile').bgColor, display: 'block'}} >
        <div ref='mobileWrap' className='mobile-project-wrap'>
          <div ref='projectIntro' className='project-intro project__container mobile closed'>
            <div ref='projectImage' className='project-image project__image link' >
              <CaseStudy
                showBody={this.state.showBody}
                singleMode={this.state.singleMode}
                changeParentState={this.toggleStudyState}
                ref='projectSvg'
                {...this.props} />
              {backBar}
            </div>
          </div>
          <div className='mobile-intro-info' ref='projectInfo'>
            <div className='project-intro-header' style={{color: this.props.data.get('logoColor')}}>
              <span className='client-name' ref='name'>{this.props.data.get('client')}
                <span className='sep' ref='sep'> | </span>
                <span className='project-name' ref='title'>{this.props.data.get('title')}</span>
              </span>
            </div>
            <p style={this.getDescStyle()}>
              {this.getSummaryText()}
            </p>
            <div onClick={this.openStudyFromProject.bind(this)} className='view-button' ><div style={{background: this.props.data.get('logoColor')}}>view case study  &#8594;</div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FeaturedStudyMobile);
