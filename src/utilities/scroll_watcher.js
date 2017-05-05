import autobind from 'autobind-decorator';
import React, {Component, PropTypes, cloneElement, isValidElement} from 'react';

export class VirtualScroll extends Component {

  state = {deltaX: 0, deltaY: 0};

  static propTypes = {
    threshold: PropTypes.object,
    shouldUpdate: PropTypes.bool,
    callbacks: PropTypes.object,
    children: PropTypes.element,
    browser: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.scrollMultiplier = 15;
  }

  componentDidMount () {
    const el = window;
    el.addEventListener('wheel', this.handleWheel, false);
    el.addEventListener('touchstart', this.handleTouchStart, false);
    el.addEventListener('touchmove', this.handleTouchMove, false);
    el.addEventListener('touchend', this.handleTouchEnd, false);
    el.addEventListener('keydown', this.handleKeyDown, false);
    // el.addEventListener('mousedown', this.handleTouchStart, false);
    // el.addEventListener('mousemove', this.handleTouchMove, false);
    // document.addEventListener('mouseup', this.handleTouchEnd, false);
  }

  shouldComponentUpdate (nextProps) {
    return (nextProps.shouldUpdate);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.shouldUpdate !== this.props.shouldUpdate) {
      this.resetState();
    }
  }

  componentDidUpdate (prevProps) {
    if (this.state.deltaY >= this.props.threshold.y.up) {
      this.resetState();
      this.props.callbacks.up();
    } else if (this.state.deltaY <= this.props.threshold.y.down) {
      this.resetState();
      this.props.callbacks.down();
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
    this.handleEvent(event);
    let deltaX = event.wheelDeltaX || event.deltaX * -1;
    let deltaY = event.wheelDeltaY || event.deltaY * -1;
    if (this.props.browser.gecko) {
      deltaX = deltaX * this.scrollMultiplier;
      deltaY = deltaY * this.scrollMultiplier;
    }
    if (this.props.shouldUpdate) {
      this.setState({deltaX: deltaX, deltaY: deltaY});
    }
  }

  @autobind
  handleEvent (event) {
    if (this.props.shouldUpdate) {
      event.preventDefault();
    }
  }

  @autobind
  handleTouchStart (event) {
    const t = (event.targetTouches) ? event.targetTouches[0] : event;
    this.touchStartY = t.pageY;
    this.touchStartX = t.pageX;
  }

  @autobind
  handleTouchMove (event) {
    this.handleEvent(event);
    const t = (event.targetTouches) ? event.targetTouches[0] : event;
    const deltaY = t.pageY - this.touchStartY;
    const deltaX = t.pageX - this.touchStartX;
    this.setState({deltaY: deltaY, deltaX: deltaX});
  }

  @autobind
  handleTouchEnd (event) {
    this.pointerPosition = null;
    this.startFrame = null;
    this.setState({deltaX: 0, deltaY: 0});
  }

  @autobind
  handleKeyDown (event) {
    let keyStep = 0;
    switch (event.keyCode) {
      case 38:
        keyStep = this.props.threshold.y.up;
        break;
      case 40:
        keyStep = this.props.threshold.y.down;
        break;
    }
    this.setState({deltaY: keyStep});
  }

  render () {
    return (
      <div>
        {(isValidElement(this.props.children)) ? cloneElement(this.props.children) : null}
      </div>
    );
  }
}

export default VirtualScroll;
