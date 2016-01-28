import React, { PropTypes } from 'react';
import '../../styles/core.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as counterActions } from '../../redux/modules/counter';
import { actions as navActions } from '../../redux/modules/nav';
import { actions as workActions } from '../../redux/modules/work';
import { actions as viewportActions } from '../../redux/modules/viewport';
import resizeUtils from '../../utilities/resize';
import Nav from 'components/nav';
import PageTransition from 'components/page-transition';
import Footer from 'components/footer';

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

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Object.assign({}, counterActions, navActions, workActions, viewportActions), props.dispatch);
    resizeUtils.init(this.actions);
  }
  static contextTypes = {
    router: PropTypes.object
  };
  static childContextTypes = {
    router: PropTypes.object,
    viewport: PropTypes.object
  };
  testForFeatured (re, str) {
    if (str.search(re) !== -1) {
      return true;
    } else {
      return false;
    }
  }
  getFooter () {
    const isFeatured = this.testForFeatured('featured', this.props.location.pathname);
    return (this.props.location.pathname !== '/' && isFeatured === false || this.props.viewport.isPhone) ? <Footer /> : null;
  }

  getChildContext () {
    return {
      router: this.context.router,
      viewport: this.props.viewport
    };
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
        <PageTransition status={this.props.pageTransition} />
        <Nav />
        {this.getFooter()}
      </div>
      );
  }
}

export default connect(mapStateToProps)(CoreLayout);
