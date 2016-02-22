import React from 'react';
import styles from './results.css';

const Results = React.createClass({

  propTypes: {
    bg: React.PropTypes.string,
    data: React.PropTypes.object
  },

  getStatClass () {
    switch (this.props.data.get('results').stats.length) {
      case 8 :
        return 'stat-box-quad';
      case 4 :
        return 'stat-box-device';
      default :
        return 'stat-box';
    }
  },

  getStatContent () {
    return this.props.data.get('results').stats.map((stat, i) => {
      return (
        <div className={styles.stat_left}>
          <div className={styles.left_inner}>
            <div className={styles.stat_wrap}>
              <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>0000</div>
              <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>lorem ipsum doloar stat yeah yah stat</div>
            </div>
          </div>
        </div>
      );
    });
  },

  getStatStyle () {
    return {
      color: this.props.data.get('results').statColor
    };
  },

  getStatDescStyle () {
    return {
      color: this.props.data.get('results').statLabelcolor
    };
  },

  getLeftStats () {
    return this.props.data.get('results').stats.map((stat, i) => {
      if (i <= 1) {
        return (
          <div className={styles.stat_left} key={i}>
            <div className={styles.left_inner}>
              <div className={styles.stat_wrap}>
                <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>{stat.stat}</div>
                <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>{stat.label}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  },

  getRightStats () {
    return this.props.data.get('results').stats.map((stat, i) => {
      if (i > 1 && i <= 3) {
        return (
          <div className={styles.stat_right} key={i}>
            <div className={styles.right_inner}>
              <div className={styles.stat_wrap}>
                <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>{stat.stat}</div>
                <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>{stat.label}</div>
              </div>
            </div>
          </div>
        );
      }
    });
  },

  render () {
    return (
      <div className={styles.results_outer}>
        <svg className={styles.gradient_svg}>
          <linearGradient id='t' gradientTransform='rotate(90)'>
            <stop offset='0' stopColor={this.props.data.get('results').bgColor} />
            <stop offset='.9' stopColor={this.props.data.get('results').bgColor} />
            <stop offset='.9' stopColor={this.props.data.get('secColor')}/>
            <stop offset='1' stopColor={this.props.data.get('secColor')}/>
          </linearGradient>
          <rect x='0' y='0' width='100%' height='100%' fill='url(#t)' />
        </svg>
        <h2 className={styles.results_headline} style={{color: this.props.data.get('headlineColor')}}>results</h2>
        <div className={styles.results_inner}>
          <div className={styles.left}>
            <div className={styles.inner_center}>
              {this.getLeftStats()}
            </div>
          </div>
          <div className={styles.center}>
            <img src={this.props.data.get('results').deviceImageUrl} alt='' />
          </div>
          <div className={styles.right}>
            <div className={styles.inner_center}>
              {this.getRightStats()}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Results;

// <h2 className='study_headline' style={{color: this.props.data.get('headlineColor')}}>results</h2>
// <div className='results-inner'>
//   <div className='stat-boxes'>
//     {this.getStatContent()}
//   </div>
// </div>
// <div className={styles.stat_right}>
//   <div className={styles.right_inner}>
//     <div className={styles.stat_wrap}>
//       <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>0000</div>
//       <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>lorem ipsum doloar stat yeah yah stat</div>
//     </div>
//   </div>
// </div>
// <div className={styles.stat_right}>
//   <div className={styles.right_inner}>
//     <span style={{color: this.props.data.get('results').statColor}} className={styles.stat_bordered}>0000</span>
//     <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>lorem ipsum doloar stat yeah yah stat</div>
//   </div>
// </div>
// <div className={styles.stat_left}>
//   <div className={styles.left_inner}>
//     <div className={styles.stat_wrap}>
//       <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>0000</div>
//       <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>lorem ipsum doloar stat yeah yah stat</div>
//     </div>
//   </div>
// </div>
// <div className={styles.stat_left}>
//   <div className={styles.left_inner}>
//     <span style={{color: this.props.data.get('results').statColor}} className={styles.stat_bordered}>0000</span>
//     <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>lorem ipsum doloar stat yeah yah stat</div>
//   </div>
// </div>
