import React from 'react';
import { active, inActive } from 'constants/animations/slider/dots';

const SliderDot = React.createClass({
  propTypes: {
    number: React.PropTypes.number,
    currentDot: React.PropTypes.number,
    goToNumber: React.PropTypes.func,
    fillColor: React.PropTypes.string
  },

  getInitialState () {
    return {
      isActive: (this.props.number === this.props.currentDot)
    };
  },

  componentWillMount () {
    this.TL = new TimelineMax({ autoRemoveChildren: true });
  },

  componentDidMount () {
    this.dotEl = this.refs.dot;
    this.animateState();
  },

  componentWillReceiveProps (nextProps) {
    this.setState({ isActive: this.props.number === nextProps.currentDot });
  },

  shouldComponentUpdate (nextProps, nextState) {
    const isActiveGoingInactive = (this.state.isActive && !nextState.isActive);
    const isInactiveGoingActive = (!this.state.isActive && nextState.isActive);

    return (isActiveGoingInactive || isInactiveGoingActive);
  },

  componentDidUpdate () {
    this.animateState();
  },

  animateState () {
    const state = (this.state.isActive) ? active : inActive;
    this.TL.add(TweenLite.to(this.dotEl, state.dur, state.vars), 0);
  },
  dotClick () {
    const dir = (this.props.number > this.props.currentDot) ? 'NEXT' : 'BACK';
    this.props.goToNumber(this.props.number, dir);
  },

  render () {
    const i      = this.props.number;
    const stroke = '#9F9F9F';
    const radius = (this.state.isActive) ? 5.5 : 3.5;
    const cx     = 6.5;
    const cy     = (i * 12) + (12 * (i)) + radius;

    return (
      <circle
        className='dot'
        ref='dot'
        onClick={this.dotClick}
        key={i}
        stroke={stroke}
        fill={this.props.fillColor}
        cy={cy}
        cx={cx}
        r='0'
      />
    );
  }
});

export default SliderDot;
