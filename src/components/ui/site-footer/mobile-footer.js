import React from 'react';
import ActionIcons from 'components/ui/icons/action-icons';
import mobileFooterIcons from 'constants/data/mobile-icons';
import './_mobile-footer.scss';
import Viewport from 'utils/viewport';

const MobileFooter = React.createClass({
  propTypes: {
    isMobile: React.PropTypes.bool
  },

  getMobileIconsForDevice () {
    return mobileFooterIcons;
  },

  getMobileIconsForDesktop () {
    return mobileFooterIcons.filter((icon) => {
      return (icon.get('type') !== 'PHONE');
    });
  },

  getPropIcons () {
    return (Viewport.isPhone)
      ? this.getMobileIconsForDevice()
      : this.getMobileIconsForDesktop();
  },

  getIcons () {
    return this.getPropIcons().map(function getIconsForMobile (icon, i) {
      return (
        <li key={i}>
          <a href={icon.get('link')}>
            <ActionIcons isLink='true' ref={icon} iconType={icon.get('type')}/>
          </a>
        </li>
      );
    });
  },

  render () {
    const mobileIcons = this.getIcons();
    return (
      <ul id="mobile-footer" className='mobile-footer'>
        {mobileIcons}
      </ul>
    );
  }
});

export default MobileFooter;
