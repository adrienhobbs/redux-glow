import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import WorkItems from 'components/work-items';
import SliderDots from 'components/slider/slider-dots';
import Titles from 'components/slider/titles';
import du from 'domutil';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { connect } from 'react-redux';
import styles from './home.scss';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  colors: state.work.colors
});

export class DesktopHomeView extends PageLayout {

  static propTypes = {
    counter: PropTypes.object,
    featuredWork: PropTypes.object,
    TL: PropTypes.object,
    colors: PropTypes.object,
    viewport: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.state = {
      singleView: false
    };
  }

  componentWillMount () {
    if (!this.props.counter.current) {
      const size = this.props.featuredWork.size;
      this.actions.start(size - 1);
    }
    TweenLite.set('.home-container', {className: '+=home-container-desktop'});
    // TweenLite.set(document.documentElement, {overflowY: 'scroll'});
  }
  componentDidMount () {
    this.mountDotsAndTitles();
    TweenLite.set(document.body, {overflowY: 'hidden'});
    TweenLite.set('.home-container', {className: '+=home-container-desktop'});
    this.checkTouchEvents();
    this.checkKeyDownEvent();
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props.counter.current !== prevProps.counter.current) {
      this.mountDotsAndTitles();
    }
    if (this.enteredSingleView(prevState) && this.props.viewport.hasTouch) {
      this.cancelTouchMoveListener();
    } else if (this.exitedSingleView(prevState)) {
      this.checkTouchEvents();
    }
  }
  componentWillUnmount () {
    TweenLite.set(document.documentElement, {overflowY: 'initial'});
    TweenLite.set(document.body, {overflowY: 'visible'});
    ReactDOM.unmountComponentAtNode(document.getElementById('frame-left'));
    ReactDOM.unmountComponentAtNode(document.getElementById('frame-right'));
    this.cancelTouchMoveListener();
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
  hasKeyDown () {
    return ('onkeydown' in document);
  }
  listenForTouchMove (e) {
    e.preventDefault();
  }
  preventTouchMove () {
    du.bind(document, 'touchmove', this.listenForTouchMove);
  }
  cancelTouchMoveListener () {
    du.unbind(document, 'touchmove', this.listenForTouchMove);
  }
  checkTouchEvents () {
    if (this.props.viewport.hasTouch) {
      this.preventTouchMove();
    }
  }
  checkKeyDownEvent () {
    if (this.hasKeyDown()) {
      this.listenForKeyDown();
    }
  }
  timelineIsActive () {
    return this.props.TL.isActive();
  }
  listenForKeyDown () {
    du.bind(document, 'keydown', this.onKeyDown.bind(this));
  }
  enteredSingleView (prevState) {
    return (this.state.singleView && !prevState.singleView);
  }
  exitedSingleView (prevState) {
    return (!this.state.singleView && prevState.singleView);
  }
  goBack () {
    if (!this.props.TL.isActive() && !this.props.counter.isFirst) {
      this.actions.back();
    }
  }
  goForward () {
    if (!this.props.TL.isActive() && !this.props.counter.isLast) {
      this.actions.next();
    }
  }
  tlIsActive () {
    return this.props.TL.isActive();
  }

  getThreshold () {
    return (this.props.viewport.safari) ? 1 : 51;
  }

  checkThreshold (e) {
    if (!this.state.singleView) {
      if (e.deltaY >= this.getThreshold()) {
        if (e.type === 'wheel') {
          this.goForward();
        } else {
          this.goBack();
        }
      } else if (e.deltaY <= -this.getThreshold()) {
        if (e.type === 'wheel') {
          this.goBack();
        } else {
          this.goForward();
        }
      }
    }
  }

  onTouchStart (e) {
    if (!this.state.singleView && this.props.viewport.hasTouch) {
      const t = (e.targetTouches) ? e.targetTouches[0] : e;
      this.touchStartX = t.pageX;
      this.touchStartY = t.pageY;
    }
  }
  onTouchMove (e) {
    if (!this.state.singleView && this.props.viewport.hasTouch) {
      const touchMult = 1;
      const t = (e.targetTouches) ? e.targetTouches[0] : e;
      const event = {
        deltaX: (t.pageX - this.touchStartX) * touchMult,
        deltaY: (t.pageY - this.touchStartY) * touchMult
      };
      this.checkThreshold(event, e);
    }
  }
  /* eslint-disable */
  onWheel (e) {
    this.checkThreshold(e);
  }
  onKeyDown (e) {
      switch (e.keyCode) {
        case 38 :
          this.checkThreshold({deltaY: -51, type: 'wheel'});
          break;
        case 40 :
          this.checkThreshold({deltaY: 51, type: 'wheel'});
          break;
      }
  }
  /*eslint-enable */
  toggleNav (navState) {
    this.setState({singleView: !this.state.singleView});
    this.toggleNavState(navState);
  }
  goToSlideNumber (num, dir) {
    this.actions.goToNumber({number: num, direction: dir});
  }
  mountDotsAndTitles () {
    const dots = <SliderDots colors={this.props.colors} currentDot={this.props.counter.current} goToNumber={this.goToSlideNumber.bind(this)}/>;
    const titles = <Titles currentNum={this.props.counter.current} titles={this.getTitles()} currentTitle={this.getCurrentTitle()}/>;
    ReactDOM.render(dots, document.getElementById('frame-right'));
    ReactDOM.render(titles, document.getElementById('frame-left'));
  }
  render () {
    return (
      <div className={styles.homeContainerDesktop}
        onWheel={(evt) => this.onWheel(evt) }
        onTouchStart={(evt) => this.onTouchStart(evt)}
        onTouchMove={(evt) => this.onTouchMove(evt)}>
        <WorkItems
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

