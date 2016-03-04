import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import WorkItems from 'components/work-items';
import SliderDots from 'components/slider/slider-dots';
import Titles from 'components/slider/titles';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { connect } from 'react-redux';
import styles from './home.scss';
import snakeCase from 'lodash/snakeCase';
import isEmpty from 'lodash/isEmpty';
import ScrollWatcher from 'utilities/scroll_watcher.js';
import WorkHelpers from 'utilities/slide-helper.js';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  colors: state.work.colors,
  routerState: state.router
});

export class DesktopHomeView extends PageLayout {

  static propTypes = {
    counter: PropTypes.object,
    featuredWork: PropTypes.object,
    TL: PropTypes.object,
    colors: PropTypes.object,
    viewport: PropTypes.object,
    params: PropTypes.object,
    work: PropTypes.object
  };

  static contextTypes = {
    viewport: PropTypes.object,
    router: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.state = {
      singleView: false,
      activeSlideNum: 0
    };
  }

  componentWillMount () {
    if (!this.props.counter.current) {
      const size = this.props.featuredWork.size;
      this.actions.start(size - 1);
    }
    TweenLite.set('.home-container', {className: '+=home-container-desktop'});
  }

  getFeaturedStudy () {
    return this.props.featuredWork.findEntry(function (work) {
      return snakeCase(work.get('project')) === snakeCase(this.props.params.project);
    }, this);
  }

  componentDidMount () {
    this.wh = Object.create(WorkHelpers);
    this.wh.init(this.props.work);
    const noParams = isEmpty(this.props.params);
    const hasFeaturedMatch = (!noParams) ? this.getFeaturedStudy() : false;
    TweenLite.delayedCall(2, this.mountDotsAndTitles.bind(this));
    TweenLite.set(document.body, {overflowY: 'hidden'});
    TweenLite.set('.home-container', {className: '+=home-container-desktop'});
    if (hasFeaturedMatch && !noParams) {
      TweenLite.delayedCall(1, this.goToSlideNumber.bind(this, hasFeaturedMatch[0]));
      this.context.router.replace({pathname: '/'});
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.counter.current !== prevProps.counter.current) {
      this.mountDotsAndTitles();
    }
    console.log(this.wh.getTitles());
  }

  componentWillUnmount () {
    TweenLite.set(document.documentElement, {overflowY: 'initial'});
    TweenLite.set(document.body, {clearProps: 'all'});
    ReactDOM.unmountComponentAtNode(document.getElementById('frame-left'));
    ReactDOM.unmountComponentAtNode(document.getElementById('frame-right'));
    this.actions.goToNumber({number: 0});
  }

  getCurrentFeaturedSlide () {
    return this.props.featuredWork.get(this.props.counter.current);
  }

  getCurrentTitle () {
    return this.getCurrentFeaturedSlide().get('cat');
  }

  getTitles () {
    return this.props.featuredWork.map(function (work) {
      return work.get('cat');
    });
  }

  timelineIsActive () {
    return this.props.TL.isActive();
  }

  enteredSingleView (prevState) {
    return (this.state.singleView && !prevState.singleView);
  }

  exitedSingleView (prevState) {
    return (!this.state.singleView && prevState.singleView);
  }

  getThreshold () {
    return (this.props.viewport.safari) ? 1 : 100;
  }

  toggleNav (navState) {
    this.setState({singleView: !this.state.singleView});
    this.toggleNavState(navState);
  }

  goToSlideNumber (num, dir) {
    this.actions.goToNumber({number: num, direction: dir});
  }

  forward () {
    if (!this.props.TL.isActive() && !this.props.counter.isLast) {
      this.actions.next();
    }
  }

  back () {
    if (!this.props.TL.isActive() && !this.props.counter.isFirst) {
      this.actions.back();
    }
  }

  mountDotsAndTitles () {
    const dots = <SliderDots colors={this.props.colors} currentDot={this.props.counter.current} goToNumber={this.goToSlideNumber.bind(this)}/>;
    const titles = <Titles currentNum={this.props.counter.current} titles={this.getTitles()} currentTitle={this.getCurrentTitle()}/>;
    ReactDOM.render(dots, document.getElementById('frame-right'));
    ReactDOM.render(titles, document.getElementById('frame-left'));
  }

  scrollShouldUpdate () {
    return (!this.timelineIsActive() && !this.state.singleView);
  }

  render () {
    const cbs = {
      down: this.forward.bind(this),
      up: this.back.bind(this)
    };

    const threshold = {
      y: {
        up: this.getThreshold(),
        down: -(this.getThreshold())
      }
    };

    return (
      <div ref='ctr' className={styles.homeContainerDesktop}>
        <WorkItems
          activeSlideNum={this.state.activeSlideNum}
          locationState={this.props.location}
          ref='workItems'
          featuredWorkOnly
          slider
          TL={this.props.TL}
          toggleNav={this.toggleNav.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DesktopHomeView);
        // <ScrollWatcher callbacks={cbs} shouldUpdate={this.scrollShouldUpdate()} threshold={threshold} />
