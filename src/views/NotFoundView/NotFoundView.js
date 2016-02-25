import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  work: state.work,
  counter: state.counter
});

export class NotFoundView extends PageLayout {

  static propTypes = {
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount () {
    if (this.props.nav.isVisible) {
      this.actions.changeNavState({isVisible: false, shouldAnimate: false});
    }
  }

  render () {
    return (
      <div>soon to be 404 page
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotFoundView);
