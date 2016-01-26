import React from 'react';
import Archive from './actionable/archive';
import Arrow from './actionable/arrow';
import Close from './actionable/close';
import Email from './actionable/email';
import Facebook from './actionable/facebook';
import Info from './actionable/info';
import Instagram from './actionable/instagram';
import More from './actionable/more';
import Newsletter from './actionable/newsletter';
import Phone from './actionable/phone';
import Twitter from './actionable/twitter';
import {colors} from 'constants/global';

class ActionIcons extends React.Component {

  getIcon(color = colors.radicalRed) {
    const icons = {
      ARCHIVE: () => {
        return <Archive color={color} />;
      },
      ARROW: () => {
        return (
          <Arrow color={color} {...this.props} />
        );
      },
      CLOSE: () => {
        return (
          <Close color={color} />
        );
      },
      EMAIL: () => {
        return (
          <Email color={color} />
        );
      },

      FACEBOOK: () => {
        return (
          <Facebook color={color} />
        );
      },
      INFO: () => {
        return (
          <Info color={color} />
        );
      },
      INSTAGRAM: () => {
        return (
          <Instagram color={color} />
        );
      },
      MORE: () => {
        return (
          <More color={color} />
        );
      },
      NEWSLETTER: () => {
        return (
          <Newsletter color={color} />
        );
      },
      PHONE: () => {
        return (
          <Phone color={color} />
        );
      },
      TWITTER: () => {
        return (
          <Twitter color={color} />
        );
      }
    };
    return icons[this.props.iconType]();
  }


  constructor() {
    super();
  }

  render() {
    const actionIcon = this.getIcon(this.props.color);
    return (
      actionIcon
    );
  }
}

export default ActionIcons;
