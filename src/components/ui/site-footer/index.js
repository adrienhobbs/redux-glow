import React from 'react';
import DesktopFooter from './desktop-footer.js';
import MobileFooter from './mobile-footer.js';
import './_footer.scss';
import Viewport from 'utils/viewport';

const SiteFooter = React.createClass({
  getFooter () {
    return (this.shouldDisplayMobileFooter())
    ? <MobileFooter />
    : <DesktopFooter />;
  },
  shouldDisplayMobileFooter () {
    return (Viewport.isPhone || Viewport.breakpoint === 'xsmall');
  },
  render () {
    return (
      <div id="main-footer">
        {this.getFooter()}
        <div className="footer-bottom">
          © 1999 - 2015 GLOW - all rights reserved
        </div>
        <div className="footer-end"></div>
      </div>
    );
  }
});

export default SiteFooter;
