/* eslint-disable */
import React from 'react';
import du from 'domutil';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import radium from 'radium';
import scroll from 'scroll';
import '../study-closed.scss';
// import { getOffset } from 'utils';


const ProjectIntroMobile = React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    viewport: React.PropTypes.object,
    navActions: React.PropTypes.object,
    hideOthers: React.PropTypes.func,
    isHidden: React.PropTypes.bool,
    id: React.PropTypes.number
  },

  getInitialState () {
    return {
      singleMode: false,
      isHovered: false,
      showBody: false
    };
  },
  componentDidMount () {
    this.wrap    = this.refs.projectIntro;
    this.mask    = this.refs.mask;
    this.name    = this.refs.name;
    this.sep     = this.refs.sep;
    this.title   = this.refs.title;
    this.tags    = this.refs.tags;
    this.overlay = this.refs.overlay;
    this.TL = new TimelineMax({
      onReverseCompleteParams: ['{self}'],
        onReverseComplete:  (self)  => {
          self.clear();
        }
    });

  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.isHidden && nextProps.isHidden) {
      TweenLite.set([this.refs.projectBox, this.refs.projectIntro], {zIndex: 0});
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.3, {opacity: 0, autoAlpha: 1, ease: Expo.easeInOut});
    } else if (this.props.isHidden && !nextProps.isHidden) {
      TweenLite.set([this.refs.projectBox, this.refs.projectIntro], {zIndex: 0});
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.3, {delay: 0.1, autoAlpha:1, opacity: 1, ease: Expo.easeOut});
    }
  },

  componentDidUpdate(prevProps, prevState) {
    (!prevState.singleMode && this.state.singleMode)
      ? this.openStudy()
      : false;
      (prevState.singleMode && !this.state.singleMode)
        ? this.closeStudy()
        : false;
  },

  getTrackTween () {
    const TL = new TimelineLite;
    const rect = this.refs.projectIntro.getBoundingClientRect();
    const projHeight = this.refs.projectBox.getBoundingClientRect().height;
    const windowW = window.innerWidth;
    TL.set(this.refs.projectIntro, {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      position: 'fixed',
      overflow: 'hidden'
      // zIndex: 99
    });
    TweenLite.set(this.refs.projectBox, {height: projHeight});

    TL.set(this.refs.projectImage, {
      className: '-=link'
    }, 0);

    TL.to(this.refs.projectIntro, 0.8, {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      ease: Quart.easeInOut,
      clearProps: 'all',
      className: '-=closed',
      onComplete: () => {
        this.setState({showBody: !this.state.showBody});
      }
    }, 0);
    return TL;
  },

  getNavTween() {
    const TL = new TimelineLite;
    TL.add(this.props.navActions.changeNavState.bind(this, {isVisible: !this.state.singleMode}));
    return TL;
  },

  toggleStudyState () {
    this.setState({singleMode: !this.state.singleMode, isHovered: false});
  },

  openStudy () {
    // const test = getOffset(this.refs.projectBox);
    // const testTop = test.top - window.innerWidth / 2;

    TweenLite.set([document.body, document.documentElement], {className: '+=locked'});
    this.props.hideOthers(this.props.id, true);
    TweenLite.set([this.refs.overlay, this.refs.projectInfo], {autoAlpha: 0});
    this.studyTL = new TimelineLite({onComplete: () => this.setState({showBody: true})});
    this.studyTL.addLabel('start', this.props.id/10 );
    this.studyTL.add(() => {
    
      // scroll.top(document.body, testTop, {duration: 500});

    });

    this.studyTL.add(this.getTrackTween(), 'start');
    this.studyTL.add(this.getNavTween(), 'start+=0.2');
  },

  unHideOthers () {
    return () => {
      this.props.hideOthers(null, false);
    }
  },

  closeStudy () {
    const sequence = new TimelineLite({paused: true, onComplete: () => this.setState({closed: true})});
    this.setState({closed: false, showBody: false});
    TweenLite.set(this.refs.projectIntro, { overflow: 'hidden'});
    sequence.add(this.reverseStudyTL, 0);
    sequence.add(this.getNavTween, 0.4);
    sequence.add(this.unHideOthers(), 0.6);
    sequence.add(TweenLite.to(this.refs.projectInfo, 1.3, {delay: this.props.id/15, autoAlpha: 1}), 1.1);
    sequence.play();
  },

  openStudyFromProject () {
    if (!this.state.singleMode) {
      this.toggleStudyState();
    }
  },
  reverseStudyTL () {
    this.studyTL.eventCallback('onReverseComplete', () => {
      TweenLite.set([this.refs.projectIntro, this.refs.projectImage, this.refs.projectBox], {
        clearProps: 'height'
      });
    });
    TweenLite.set([document.body, document.documentElement], {className: '-=locked'});
    return this.studyTL.reverse();
  },

  render () {
    const backBar = (this.state.singleMode) ? <BackBar showBar={this.state.showBody} singleMode={this.state.singleMode} data={this.props.data.toJS()} goBack={this.toggleStudyState}  /> : null;
    return (
      <div className="project mobile"
        ref="projectBox"
        style={{background: this.props.data.get('secColor')}} >
        <div className='mobile-project-wrap'>
          <div ref='projectIntro' className='project-intro project__container mobile closed'>
            <div ref='projectImage' className="project-image project__image link" >
              <CaseStudy
                showBody={this.state.showBody}
                singleMode={this.state.singleMode}
                changeParentState={this.toggleStudyState}
                ref='projectSvg'
                {...this.props} />
              {backBar}
            </div>
          </div>
          <div className="mobile-intro-info" ref='projectInfo'>
            <div className="project-intro-header" style={{color: this.props.data.get('logoColor')}}>
              <span className="client-name" ref='name'>{this.props.data.get('client')}
                <span className="sep" ref='sep'> | </span>
                <span className="project-name" ref='title'>{this.props.data.get('title')}</span>
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <div onClick={this.openStudyFromProject} className="view-button" ><div style={{background: this.props.data.get('logoColor')}}>view case study  &#8594;</div></div>
          </div>
        </div>
      </div>
    );
  }
});

export default radium(ProjectIntroMobile);
