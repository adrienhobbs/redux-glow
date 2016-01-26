import { velocityHelpers } from 'velocity-react';

const OpacityAnimations = {
  show: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        fillOpacity: 0.2
      }, 1, {
        easing: 'ease-in-out'
      }]
    ]
  }),
  hide: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        fillOpacity: 0
      }, 1, {
        easing: 'ease-in-out'
      }]
    ]
  })
};

const shareMixin = {
  getInitialState () {
    return {
      isHovered: false
    };
  },
  onMouseEnter () {
    this.setState({isHovered: true});
  },
  onMouseLeave () {
    this.setState({isHovered: false});
  },
  hide: OpacityAnimations.hide,
  show: OpacityAnimations.show
};

export default shareMixin;
