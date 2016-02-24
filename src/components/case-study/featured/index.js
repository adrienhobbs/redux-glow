import React, { PropTypes } from 'react';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import ViewCaseStudy from 'components/ui/icons/view-case-study';
import snakeCase from 'lodash/snakeCase';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import classes from './study.scss';
import Lockup from 'components/ui/lockup/lockup.js';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  routerState: state.router
});

export class FeaturedStudy extends PageLayout {
  static propTypes = {
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
    };
  }

  getProjectUrl () {
    return '/featured/' + snakeCase(this.props.data.get('project'));
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.showBody && !prevState.showBody) {
      TweenLite.set(document.body, {className: '+=mom-scroll', overflowY: 'scroll'});
    }
    if (!this.state.showBody && prevState.showBody) {
      TweenLite.set(document.body, {className: '-=mom-scroll', overflowY: 'hidden'});
    }
    if (prevProps.position === 'bottom' && this.props.position === 'center') {
      TweenLite.fromTo(this.refs.projectSvg, 2, {y: 500, z: 0}, {z: 0, y: 0, ease: Expo.easeInOut});
      TweenLite.fromTo(this.refs.projectInner, 1.75, {y: 500, z: 0}, {z: 0, y: 0, ease: Expo.easeInOut});
    }

    if (prevProps.position === 'top' && this.props.position === 'center') {
      TweenLite.fromTo(this.refs.projectSvg, 1.25, {y: -50, z: 0}, {y:0, ease: Expo.easeInOut, z: 0});
      TweenLite.fromTo(this.refs.projectInner, 1.65, {y: -40, z: 0}, {y: 0, ease: Expo.easeInOut, z: 0});
    }

    if (prevState.singleMode && !this.state.singleMode && this.props.routerState.locationBeforeTransitions.pathname !== '/') {
      this.context.router.goBack();
    }

    if (this.props.routerState.locationBeforeTransitions.pathname === '/' && prevProps.routerState.locationBeforeTransitions.pathname === this.getProjectUrl()) {
      if (this.state.singleMode) {
        this.changeState();
      }
    }

    if (this.state.singleMode !== prevState.singleMode) {
      if (!this.state.singleMode) {
        TweenLite.to(this.refs.info, 0.8, {y: 0, ease: Back.easeInOut.config(1)});
      } else if (this.state.singleMode) {
        TweenLite.to(this.refs.info, 0.5, {y: 800, ease: Expo.easeInOut});
      }
    }
  }

  toggleProjectInfo (val) {
    this.toggleProjectText(val.val);
    return <span></span>;
  }

  toggleProjectText (y) {
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
    let vb = '0, 0, 1728, 492';
    return (
      <div className={classes.featuredSlideContainer} ref='project_container'>
        <CaseStudy slider showBody={this.state.showBody} singleMode={this.state.singleMode} viewport={this.props.viewport} ref='projectInfoSvg' data={this.props.data} />
        <div ref='info' className='featured-info-outer'>
          <svg ref='projectSvg' width='100%' height='100%' viewBox='0, 0, 1728, 955' preserveAspectRatio='xMidYMid slice'>
            <svg viewBox={vb} preserveAspectRatio='xMidYMax meet' ref='projectInfo' fill={this.getShapeColor()} fillOpacity='0.8'>
              <polygon ref='shapePoly' points='0,340 0,492 1204,492 1728,82 1728,0'></polygon>
            </svg>
          </svg>
          <div className={classes.featuredInfoInner} ref='projectInner'  >
            <div ref='innerWrap' className={classes.featuredInfoInnerWrap} onClick={this.changeState.bind(this)}>
              <Lockup data={this.props.data} />
              <div className='view-case-study'>
                <ViewCaseStudy />
              </div>
            </div>
          </div>
        </div>
        {backBar}
      </div>
    );
  }
}

export default connect(mapStateToProps)(FeaturedStudy);

