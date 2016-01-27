import React from 'react';
import './desktop-footer.scss';

const DesktopFooter = React.createClass({
  render () {
    return (
      <div className="desktop-footer">
        <div className="footer-block">
          <a href="mailto:info@weareglow.com">info@weareglow.com</a><br />
          +1 212-206-7370
        </div>
        <div className="footer-block">
          333 hudson street <br />
          new york, ny 10013
        </div>
        <div className="footer-block">
          <a href="https://twitter.com/glow">twitter</a> <br />
          <a href="http://www.facebook.com/pages/Glow-Interactive/12305969444122">facebook</a>
        </div>
      </div>
    );
  }
});

export default DesktopFooter;
