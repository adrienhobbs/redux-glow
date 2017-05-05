import React, { PropTypes } from 'react';
import '../../styles/core.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as navActions } from '../../redux/modules/nav';
import { actions as workActions } from '../../redux/modules/work';
import { actions as viewportActions } from '../../redux/modules/viewport';
import { actions as transitionActions } from '../../redux/modules/page-transition';
import styles from 'components/nav/nav.css';
import resizeUtils from '../../utilities/resize';
import Nav from 'components/nav';
import PageTransition from 'components/page-transition';
import Footer from 'components/footer';

import isNull from 'lodash/isNull';

const mapStateToProps = (state) => ({
  pageTransition: state.pageTransition,
  viewport: state.viewport
});

export class CoreLayout extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object,
    pageTransition: PropTypes.object,
    viewport: PropTypes.object,
    location: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object
  };

  static childContextTypes = {
    router: PropTypes.object,
    viewport: PropTypes.object,
    transitionToNewRoute: PropTypes.func
  };

  getChildContext () {
    return {
      router: this.context.router,
      viewport: this.props.viewport,
      transitionToNewRoute: this.transitionToNewRoute.bind(this)
    };
  }
  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, transitionActions, counterActions, navActions, workActions, viewportActions), props.dispatch);
    resizeUtils.init(this.actions);
  }

  componentDidMount () {
    // so the page transition knows what direction to animate from
    this.actions.setCurrentLinkIndex(this.props.location.pathname);
    this.checkFramePositionType(this.props.location.pathname);
  }

  checkFramePositionType (path) {
    if ((this.props.viewport.isPhone) && path === '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'absolute', backgroundColor: 'transparent'});
    }
    if (!(isNull(this.props.viewport.isPhone)) && path !== '/') {
      TweenLite.set([this.refs.frameLeft, this.refs.frameRight], {position: 'fixed', backgroundColor: 'white'});
    }
  }

  transitionToNewRoute (path = '/', newIndex) {
    if (this.props.location.pathname !== path) {
      this.checkFramePositionType(path);
      this.actions.startTransition({
        startTransition: true,
        pathname: path
      });
    }
  }

  testForFeatured (re, str) {
    if (str.search(re) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  getFooter () {
    const isFeatured = this.testForFeatured('featured', this.props.location.pathname);
    return (this.props.location.pathname !== '/' && this.props.location.pathname !== '/404' && isFeatured === false || this.props.viewport.isPhone) ? <Footer /> : null;
    // return (this.props.location.pathname !== '/' && isFeatured === false) ? <Footer /> : null;
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
        <PageTransition status={this.props.pageTransition} />
        <Nav />
        <div ref='frameLeft' className={styles.frame_left} id='frame-left'></div>
        <div ref='frameRight' className={styles.frame_right} id='frame-right'></div>
        {this.getFooter()}
      </div>
      );
  }
}

export default connect(mapStateToProps)(CoreLayout);
