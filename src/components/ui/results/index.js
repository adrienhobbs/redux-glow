import React from 'react';
import './_results-bar.scss';

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
        <div key={i} className={this.getStatClass()}>
          <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
            {stat.stat}
          </div>
          <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
            {stat.label}
          </h5>
        </div>
      );
    });
  },
  render () {
    return (
      <div className='results-outer' style={{backgroundColor: this.props.data.get('results').bgColor}}>
        <h2 className='page-title' style={{color: this.props.data.get('headlineColor')}}>results</h2>
        <div className='results-inner'>
          <div className='stat-boxes'>
            {this.getStatContent()}
          </div>
        </div>
      </div>
    );
  }
});

export default Results;

