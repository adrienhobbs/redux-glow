import autobind from 'autobind-decorator';
import React, {Component, PropTypes} from 'react';

export class VirtualScroll extends Component {

  state = {deltaX: 0, deltaY: 0};

  static propTypes = {
    threshold: PropTypes.object,
    thresholdHit: PropTypes.func,
    onChange: PropTypes.func,
    shouldUpdate: PropTypes.bool
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const el = window;
    el.addEventListener('wheel', this.handleWheel, false);
    el.addEventListener('touchstart', this.handleTouchStart, false);
    el.addEventListener('touchmove', this.handleTouchMove, false);
    el.addEventListener('touchend', this.handleTouchEnd, false);
  }

  shouldComponentUpdate (nextProps) {
    return (nextProps.shouldUpdate);
  }

  componentWillUpdate (nextProps) {
    if (nextProps.shouldUpdate !== this.props.shouldUpdate) {
      this.resetState();
    }
  }
  componentDidUpdate (prevProps) {
    if (this.state.deltaY >= this.props.threshold.y.up) {
      this.resetState();
      this.props.thresholdHit('up hit');
    } else if (this.state.deltaY <= this.props.threshold.y.down) {
      this.resetState();
      this.props.thresholdHit('down hit');
    }
  }

  resetState () {
    this.setState({deltaX: 0, deltaY: 0});
  }

  componentWillUnmount () {
    const el = window;
    el.removeEventListener('wheel', this.handleWheel, false);
    el.removeEventListener('touchstart', this.handleTouchStart, false);
    el.removeEventListener('touchmove', this.handleTouchMove, false);
    el.removeEventListener('touchend', this.handleTouchEnd, false);
  }

  @autobind
  handleWheel (event) {
    event.preventDefault();
    const deltaX = event.wheelDeltaX || event.deltaX * -1;
    const deltaY = event.wheelDeltaY || event.deltaY * -1;
    if (this.props.shouldUpdate) {
      this.setState({deltaX: deltaX, deltaY: deltaY});
    }
  }

  @autobind
  handleTouchStart (event) {
    event.preventDefault();
    const t = (event.targetTouches) ? event.targetTouches[0] : event;
    this.touchStartY = t.pageY;
    this.touchStartX = t.pageX;
  }

  @autobind
  handleTouchMove (event) {
    event.preventDefault();
    const t = (event.targetTouches) ? event.targetTouches[0] : event;
    const deltaY = t.pageY - this.touchStartY;
    const deltaX = t.pageX - this.touchStartX;
    this.setState({deltaY: deltaY, deltaX: deltaX});
  }

  @autobind
  handleTouchEnd (event) {
    event.preventDefault();
    this.pointerPosition = null;
    this.startFrame = null;
    this.setState({deltaX: 0, deltaY: 0});
  }

  render () {
    return (
      <div></div>
    );
  }
}

export default VirtualScroll;
