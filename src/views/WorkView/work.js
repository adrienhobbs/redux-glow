import React from 'react';
import PageLayout from 'layouts/PageLayout/PageLayout';
import { connect } from 'react-redux';
import WorkItems from 'components/work-items';
import styles from './work-view.css';
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
        <div className={styles.work_view}  ref='page'>
          <div className={styles.work_view_header}>
            <h1 className='page-title'>our work</h1>
            <h4 className={styles.page_subtitle}>heres our work man</h4>
          </div>
          <div className={styles.work_view_content}>
            <WorkItems actions={this.actions} location={this.props.routerState.locationBeforeTransitions} params={this.props.params}  />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WorkView);
