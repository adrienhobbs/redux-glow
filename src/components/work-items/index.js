import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import WorkHelpers from './work-helpers';
import styles from './work.scss';
import CustomLink from 'components/nav/custom-link.js';
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

  getPlaceHolder () {
    if (this.props.workpage) {
      return (
        <div className='project'>
          <div className={styles.placeholder_outer}>
            <div className={styles.placeholder_inner}>
              <div className={styles.placeholder_box}>
                <h2 className={styles.headline}>let's make something great together.</h2>
                <CustomLink path='/connect'>
                  <h2 className={styles.subtitle}>contact us</h2>
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render () {
    return (
      <div style={this.getBackgroundColor()} className={this.getClassName()}>
        {this.getWorkItems()}
        {this.getPlaceHolder()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(WorkItems);
