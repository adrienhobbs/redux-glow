import React, { PropTypes } from 'react';
import styles from '../../results.css';

export class StandardResultsTemplate extends React.Component {

  static propTypes = {
    bg: PropTypes.string,
    data: PropTypes.object,
    hideHeadline: PropTypes.boolean
  };

  constructor (props) {
    super(props);
  }

  getStatClass () {
    switch (this.props.data.get('results').stats.length) {
      case 8 :
        return 'stat-box-quad';
      case 4 :
        return 'stat-box-device';
      default :
        return 'stat-box';
    }
  }

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
  }

  getStatStyle () {
    return {
      color: this.props.data.get('results').statColor
    };
  }

  getStatDescStyle () {
    return {
      color: this.props.data.get('results').statLabelcolor
    };
  }

  getNumberOfStats () {
    return this.props.data.get('results').stats.length;
  }

  getLeftStats () {
    return this.props.data.get('results').stats.map((stat, i) => {
      if (this.oneStatPerSide()) {
        if (i === 0) {
          return this.getLeftStatBox(stat, i);
        }
      } else {
        if (i >= 0 && i <= 1) {
          return this.getLeftStatBox(stat, i);
        }
      }
    });
  }

  getRightStats () {
    return this.props.data.get('results').stats.map((stat, i) => {
      if (this.oneStatPerSide()) {
        if (i === 1) {
          return this.getRightStatBox(stat, i);
        }
      } else {
        if (i > 1 && i <= 3) {
          return this.getRightStatBox(stat, i);
        }
      }
    });
  }

  oneStatPerSide () {
    return (this.props.data.get('results').stats.length === 2);
  }

  getRightStatBoxClass () {
    return (this.oneStatPerSide()) ? styles.right_inner_center : styles.right_inner;
  }

  getLeftStatBoxClass () {
    return (this.oneStatPerSide()) ? styles.left_inner_center : styles.left_inner;
  }

  getRightStatBox (stat, i) {
    return (
      <div className={styles.stat_right} key={i}>
        <div className={this.getRightStatBoxClass()}>
          <div className={styles.stat_wrap}>
            <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>{stat.stat}</div>
            <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>{stat.label}</div>
          </div>
        </div>
      </div>
    );
  }

  getLeftStatBox (stat, i) {
    return (
      <div className={styles.stat_right} key={i}>
        <div className={this.getLeftStatBoxClass()}>
          <div className={styles.stat_wrap}>
            <div style={{color: this.props.data.get('results').statColor}} className={styles.stat}>{stat.stat}</div>
            <div style={{color: this.props.data.get('results').statLabelColor}}className={styles.stat_description}>{stat.label}</div>
          </div>
        </div>
      </div>
    );
  }

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
        <h2 className={styles.results_headline}
          style={{
            color: this.props.data.get('headlineColor'),
            display: (this.props.hideHeadline) ? 'none' : 'block'
          }}>
          results
        </h2>
        <div className={styles.results_inner}>
          <div className={styles.left}>
            <div className={styles.inner_center}>
              {this.getLeftStats()}
            </div>
          </div>
          <div className={styles.center}>
            <img
              src={this.props.data.get('results').deviceImageUrl} alt=''
              style={{
                marginTop: (this.props.hideHeadline) ? '10px' : '0',
                marginBottom: (this.props.hideHeadline) ? '60px' : '0'
              }}
            />
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
}

export default StandardResultsTemplate;
