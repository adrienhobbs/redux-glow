import React from 'react';
import './study-stats.scss';

const StudyStats = React.createClass({
  render () {
    return (
      <div className="study-summary-statistics">
        <div className="study-summary-inner-flex">
          <div className="stat">
            <div className="num">891</div>
            <div className="text">instagram posts</div>
          </div>
          <div className="stat">
            <div className="num">
              <img
                src="/assets/images/shorty.png"
                className="client-logo"
                />
            </div>
            <div className="text">best on instagram</div>
          </div>
          <div className="stat">
            <div className="num">52</div>
            <div className="text">years traversed</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = StudyStats;
