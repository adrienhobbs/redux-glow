import React, { PropTypes } from 'react';
import du from 'domutil';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import snakeCase from 'lodash/snakeCase';
import map from 'lodash/map';
import HoverMixin from './hover-mixin';
// import styles from './work-items.css';

const ProjectIntro = React.createClass({
  mixins: [HoverMixin],
  propTypes: {
    location: PropTypes.object,
    data: PropTypes.object,
    viewport: PropTypes.object,
    actions: PropTypes.object,
    hideOthers: PropTypes.func,
    isHidden: PropTypes.bool,
    id: PropTypes.number,
    isOpen: PropTypes.bool
  },

  contextTypes: {
    router: PropTypes.object
  },

  getInitialState () {
    return {
      singleMode: false,
      isHovered: false,
      closed: true,
      showBody: false
    };
  },

  componentDidUpdate (prevProps, prevState) {
    this.hideOrShow(prevProps, prevState);
    (!prevState.singleMode && this.state.singleMode) ? this.openStudy() : false;
    (prevState.singleMode && !this.state.singleMode) ? this.closeStudy() : false;
    if (this.props.location.pathname === '/work' && prevProps.location.pathname !== '/work') {
      if (this.state.singleMode) {
        this.toggleStudyState();
      }
    }
  },

  componentDidMount () {
    this.projects = document.getElementsByClassName('project-intro');
    if (this.props.isOpen && !this.state.singleMode) {
      this.isNew = true;
      TweenMax.delayedCall(1, this.openStudyFromProject);
      // this.openStudyFromProject();
    }
  },

  hideOrShow (prevProps, prevState) {
    if (this.props.isHidden && !prevProps.isHidden) {
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.4, {delay:this.props.id / 150, zIndex: 1, autoAlpha: 1, ease: Expo.easeInOut});
    } else if (!this.props.isHidden && prevProps.isHidden) {
      TweenLite.to([this.refs.projectBox, this.refs.projectIntro], 0.6, {delay:this.props.id / 200, autoAlpha:1, clearProps: 'z-index', ease: Expo.easeInOut});
    }
  },

  getClosestProject () {
    return (this.props.id !== 0) ? this.props.id - 1 : 1;
  },
  getReverseTrackTween () {
    const TL = new TimelineLite();
    const rect = this.refs.projectBox.getBoundingClientRect();
    const infoHeight = this.refs.projectInfo.getBoundingClientRect().height;
    const projHeight =  this.projects[this.getClosestProject()].getBoundingClientRect().height;

    TL.set(this.refs.projectBox, {height: projHeight + infoHeight});
    TL.set(this.refs.projectImage, {
      className: '+=link'
    }, 0);

    TL.to(this.refs.projectIntro, 0.8, {
      width: rect.width,
      height: projHeight,
      x: rect.left,
      y: rect.top,
      ease: Expo.easeInOut,

      onComplete: () => {
        TweenLite.set([document.body], {className: '-=locked'});
        TweenLite.set(this.refs.projectIntro, {clearProps: 'all', className: '+=closed'});
        TweenLite.set(this.refs.projectBox, {clearProps: 'all'});
      }
    }, 0);

    return TL;
  },

  getTrackTween () {
    const TL = new TimelineLite();
    const rect = this.refs.projectIntro.getBoundingClientRect();
    const projHeight = this.refs.projectBox.getBoundingClientRect().height;
    const windowW = window.innerWidth;

    TweenLite.set(this.refs.projectBox, {height: projHeight});
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

    TL.set(this.refs.projectImage, {
      className: '-=link'
    }, 0);

    TL.to(this.refs.projectIntro, 0.8, {
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
        TweenLite.set([document.body], {className: '+=locked'});
        TweenLite.set([this.refs.projectIntro, this.refs.projectImage, this.refs.projectBox], {
          clearProps: 'all'
        });
      }
    }, 0);
    return TL;
  },

  getNavTween () {
    const TL = new TimelineLite();
    TL.add(this.props.actions.changeNavState.bind(this, {isVisible: !this.state.singleMode}));
    return TL;
  },

  toggleStudyState () {
    this.setState({singleMode: !this.state.singleMode, isHovered: false});
  },

  onMouseEnter () {
    if (!this.state.singleMode && !this.props.viewport.isMobile && !this.props.isHidden) {
      this.setState({isHovered: true});
      this.hover();
    }
  },

  onMouseLeave () {
    if (!this.state.singleMode && !this.props.viewport.isMobile && !this.props.isHidden) {
      this.setState({isHovered: false});
      this.hoverOut();
    }
  },

  getProjectUrl () {
    return snakeCase(this.props.data.get('project'));
  },

  openStudy () {
    if (!this.props.isOpen) {
      this.context.router.push({pathname: '/work/' + this.getProjectUrl()});
    }
    this.props.hideOthers(this.props.id, true);
    TweenLite.set([this.refs.overlay, this.refs.projectInfo], {autoAlpha: 0});
    TweenLite.set(this.refs.shape, {scaleY: 0});
    this.hoverOut();
    this.studyTL = new TimelineLite({onComplete: () => this.setState({showBody: true})});
    const startPoint = (this.isNew) ? 0.5 : this.props.id / 100;
    this.studyTL.addLabel('start', startPoint);
    this.studyTL.add(this.getTrackTween(), 'start');
    this.studyTL.add(this.getNavTween(), 'start+=0.2');
  },

  unHideOthers () {
    return () => {
      this.props.hideOthers(null, false);
    };
  },

  closeStudy () {
    if (this.props.location.pathname !== '/work') {
      this.context.router.push({pathname: '/work'});
    }
    const sequence = new TimelineLite({paused: true, onComplete: () => this.setState({closed: true})});
    this.setState({closed: false, showBody: false});
    TweenLite.set(this.refs.projectIntro, {overflow: 'hidden', clearProps: 'z-index'});
    sequence.addLabel('start');
    sequence.add(this.reverseStudyTL, 0);
    sequence.add(this.getNavTween, 0.4);
    sequence.add(this.unHideOthers(), 0.2);
    sequence.add(TweenLite.to(this.refs.projectInfo, 1.3, {delay: this.props.id / 100, autoAlpha: 1}), 1.1);
    sequence.play();
  },

  openStudyFromProject () {
    if (!this.state.singleMode && this.state.closed) {
      this.toggleStudyState();
    }
  },

  reverseStudyTL () {
    this.studyTL.eventCallback('onReverseComplete', () => {
      TweenLite.set([this.refs.projectIntro, this.refs.projectImage, this.refs.projectBox], {
        clearProps: 'all'
      });
    });
    du.removeClass(document.body, 'locked');
    du.removeClass(document.documentElement, 'locked');
    return this.getReverseTrackTween();
  },

  getTags () {
    return map(this.props.data.get('services'), function (service, i) {
      return <span key={i}>{service}</span>;
    });
  },

  render () {
    const backBar = (this.state.singleMode) ? <BackBar singleMode={this.state.singleMode} showBar={this.state.showBody} data={this.props.data.toJS()} goBack={this.toggleStudyState} /> : null;
    return (
      <div className='project' ref='projectBox' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.openStudyFromProject}>
        <div ref='projectIntro' className='project-intro project__container closed'>
          <div ref='projectImage'  className='project-image project__image link' >
            <CaseStudy showBody={this.state.showBody} singleMode={this.state.singleMode} changeParentState={this.toggleStudyState} ref='projectSvg' {...this.props} />
            {backBar}
          </div>
          <div ref='overlay' className='project-overlay'></div>
          <div ref='shape' className='shape'></div>
        </div>
        <div ref='projectInfo' className='project-info'>
          <div ref='projectTitle' className='project-title'>
            <span ref='clientName' className='client-name'>{this.props.data.get('client')}</span>
            <span className='sep' ref='sep'> | </span>
            <span className='project-name' ref='projectName'>{this.props.data.get('title')}</span>
          </div>
          <div className='tags' ref='tags'>
            {this.props.data.get('subtitleSlug')}
          </div>
        </div>
      </div>
    );
  }
});

export default ProjectIntro;
