import React, { PropTypes } from 'react';
// import Archive from './actionable/archive';
import Arrow from './actionable/arrow';
import Email from './actionable/email';
import Facebook from './actionable/facebook';
import Twitter from './actionable/twitter';
import {colors} from 'constants/global';

class ActionIcons extends React.Component {

  static propTypes = {
    iconType: PropTypes.string,
    color: PropTypes.string
  };

  getIcon (color = colors.radicalRed) {
    const icons = {

      ARROW: () => {
        return (
          <Arrow color={color} {...this.props} />
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

      TWITTER: () => {
        return (
          <Twitter color={color} />
        );
      }
    };
    return icons[this.props.iconType]();
  }

  constructor () {
    super();
  }

  render () {
    const actionIcon = this.getIcon(this.props.color);
    return (
      actionIcon
    );
  }
}

export default ActionIcons;
