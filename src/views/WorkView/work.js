import React from 'react';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { connect } from 'react-redux';
import WorkItems from 'components/work-items';
// import './work-view.scss';

const mapStateToProps = (state) => ({
  work: state.work,
  routerState: state.router
});

export class WorkView extends PageLayout {

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.setupPageInfo('Our Work');
  }

  componentDidMount () {
    this.animatePageContentIn();
    this.checkBodyVisibility();
  }

  render () {
    return (
      <div className='page-outer'>
      <div className='container'  ref='page' id='work'>
        <div className='header'>
          <h1 className='page-title'>our work</h1>
          <h4 className='page-subtitle'>a selection of our recent projects</h4>
        </div>
        <div className='page-content'>
          <WorkItems actions={this.actions} location={this.props.routerState.location} params={this.props.params}  />
        </div>
      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps)(WorkView);
