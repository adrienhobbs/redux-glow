import React, { PropTypes } from 'react';
import './study.scss';
import { Spring, presets } from 'react-motion';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import ClientLogos from 'components/ui/client-logos';
import ViewCaseStudy from 'components/ui/icons/view-case-study';
import StudyStats from 'components/ui/study-stats';
import StudyProjectTitle from 'components/ui/study-project-title';
import {snakeCase} from 'lodash';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  routerState: state.router
});

export class FeaturedStudy extends PageLayout {
  static PropTypes = {
    TL: PropTypes.object,
    position: PropTypes.string,
    data: PropTypes.object,
    toggleNav: PropTypes.func
  };

  static contextTypes = {
    viewport: PropTypes.object,
    router: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.state = {
      singleMode: false,
      showBody: false
    }
  }

  getProjectUrl () {
    return '/featured/' + snakeCase(this.props.data.get('project'));
  }
  
  componentDidUpdate (prevProps, prevState) {
    if(prevProps.position === 'bottom' && this.props.position === 'center') {
      TweenLite.from(this.refs.projectSvg, 1.5, {ease: Power4.easeInOut, y: 600});
      TweenLite.fromTo(this.refs.projectInner, 1.4, {y: 900}, {y: 0, ease: Power4.easeInOut});
    }

    if (prevState.singleMode && !this.state.singleMode && this.props.routerState.location.pathname !== '/') {
      this.context.router.goBack();
    }

    if (this.props.routerState.location.pathname === '/' && prevProps.routerState.location.pathname === this.getProjectUrl()) {
      if (this.state.singleMode) {
        this.changeState();
      }
    }
  }


  toggleProjectInfo (val) {
    this.toggleProjectText(val.val);
    return <span></span>;
  }

  toggleProjectText(y) {
    try {
      TweenLite.set(this.refs.info, {y: y.val});
    } catch (err) {

    }
    return <span></span>;
  }

  changeState () {
    if (!this.props.TL.isActive()) {
    if (!this.state.singleMode) {
      this.context.router.push({pathname: this.getProjectUrl()});
    }
      this.setState({singleMode: !this.state.singleMode, showBody: !this.state.showBody});
      this.props.toggleNav({isVisible: this.state.singleMode, shouldAnimate: true});
    }
  }

  getShapeColor () {
    return this.props.data.get('shapeColor') || this.props.data.get('secColor');
  }

  getFeaturedProjectTitleColor () {
    return this.props.data.get('featuredProjectTitleColor') || '#ffffff';
  }

  render () {
    let backBar = (this.props.position === 'center') ? <BackBar showBar={this.state.showBody} singleMode={this.state.singleMode} data={this.props.data.toJS()} goBack={this.changeState.bind(this)} /> : null;
    let vb = "0, 0, 1728, 492";
    const width = window.innerWidth;
      return (
        <div className="featured-slide-container" ref='project_container'>
          <CaseStudy slider showBody={this.state.showBody} singleMode={this.state.singleMode} viewport={this.props.viewport} ref='projectInfoSvg' data={this.props.data}>
          </CaseStudy>
          <div ref='info' className="featured-info-outer">
            <Spring endValue={this.state.singleMode ? {val: window.innerHeight, config: [200,15]} : {val: 0 , config: [150, 16]}}>
              {val =>
              this.toggleProjectText(val, this)
              }
            </Spring>
            <svg ref='projectSvg' width="100%" height='100%' viewBox="0, 0, 1728, 955" preserveAspectRatio="xMidYMid slice">
              <svg viewBox={vb} preserveAspectRatio="xMidYMax meet" ref="projectInfo" fill={this.getShapeColor()} fillOpacity="0.8">
                <polygon ref='shapePoly' points="0,340 0,492 1204,492 1728,82 1728,0"></polygon>
              </svg>
            </svg>
            <div className="featured-info-inner" ref='projectInner'  >
              <div ref='innerWrap' className="featured-info-inner-wrap" onClick={this.changeState.bind(this)}>
                <StudyProjectTitle projectColor={this.getFeaturedProjectTitleColor()} path={this.props.data.get('infoPath')} />
                <div className="view-case-study">
                  <ViewCaseStudy />
                </div>
                <StudyStats />
              </div>
            </div>
          </div>
          {backBar}
        </div>
      );
  }
}

export default connect(mapStateToProps)(FeaturedStudy);
