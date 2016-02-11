import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import WorkHelpers from './work-helpers';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  work: state.work,
  counter: state.counter
});

export class WorkItems extends WorkHelpers  {

  static propTypes = {
    dispatch: PropTypes.func,
    work: PropTypes.object,
    viewport: PropTypes.object,
    toggleNav: PropTypes.func
  };

  constructor (props) {
    super(props);
    this.state = {
      singleMode: false,
      activeStudy: null
    };
  }

  hideInactiveProjects (activeStudy, singleMode) {
    this.setState({singleMode: singleMode, activeStudy: activeStudy});
  }

  render () {
    return (
      <div className={this.getClassName()} style={this.getBackgroundColor()}>
        {this.getWorkItems()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WorkItems);