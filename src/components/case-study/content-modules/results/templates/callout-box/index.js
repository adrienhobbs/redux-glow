import React, { PropTypes } from 'react';
import styles from '../../results.css';

export class CalloutBox extends React.Component {

  static propTypes = {
    data: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  getStatContent () {
    return this.props.data.get('results').stats.map(function (stat, i) {
      return (
        <div className={styles.stat_box_third} key={i}>
          <div style={{color: this.props.data.get('results').statColor}} className={styles.callout_stat}>{stat.stat}</div>
          <div
            style={{color: this.props.data.get('results').statLabelColor}}
            className={styles.callout_stat_description}>
            {stat.label}
          </div>
        </div>
      );
    }, this);
  }
  render () {
    return (
      <div className={styles.results_outer}>
        <section className='' style={{backgroundColor: 'rgb(232,232,232)'}}>
          <h2 className={styles.results_headline} style={{color: this.props.data.get('headlineColor') || '#000'}}>results</h2>
          <div className={styles.callout_box_outer}>
            <div className={styles.callout_box}>
              <h1>October 29, 2014</h1>
              <h1>Successfully raised $264,704 with 1,550 backers.</h1>
            </div>
            <div className={styles.callout_box_stats}>
              {this.getStatContent()}
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default CalloutBox;
