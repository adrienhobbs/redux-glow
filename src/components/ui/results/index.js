import React from 'react';
import './_results-bar.scss';
import shade from 'constants/shade-blender';

const Results = React.createClass({

  propTypes: {
    bg: React.PropTypes.string,
    data: React.PropTypes.object
  },

  getStatContent () {
    return this.props.data.get('results').stats.map((stat, i) => {
      return (
        <div key={i} className='stat-box'>
          <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
            {stat.stat}
          </div>
          <div style={{color: this.props.data.get('results').statLabelColor}} className='stat-label'>
            {stat.label}
          </div>
        </div>
      );
    });
  },
  render () {
    // this.getStatContent();
    const bg = shade(-0.10, this.props.bg);
    return (
      <div className='results-outer' style={{backgroundColor: bg}}>
        <h2 className='page-title' style={{color: this.props.data.get('headlineColor')}}>results</h2>
        <div className='results-inner'>
          <div className='stats left'>
            <div className='stat-box'>
              <div className='stat-num'>1,734</div>
              <div className='stat-description'>robocalls</div>
            </div>
            <div className='stat-rule'></div>
            <div className='stat-box'>
              <div className='stat-num'>995K</div>
              <div className='stat-description'>
                season premiere viewers
              </div>
            </div>
          </div>
          <div className='stats-img'>
            <div className='stats-img-inner'>
            </div>
          </div>
          <div className='stats right'>
            <div className='stat-box'>
              <div className='stat-num'>886</div>
              <div className='stat-description'>social shares</div>
            </div>
            <div className='stat-rule'></div>
            <div className='stat-box'>
              <div className='stat-num'>39,884</div>
              <div className='stat-description'>texts exchanged</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Results;
