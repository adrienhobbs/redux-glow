import React, {PropTypes} from 'react';
import './symbol/svg/sprite.symbol.svg';
export class SpriteLogo extends React.Component {

  static propTypes = {
    clientName: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.logoEl = document.getElementById(props.clientName + '-logo');
    if (this.logoEl && props.color) {
      this.tl = new TimelineLite();
      this.tl.set(this.logoEl, {attr: {fill: props.color}});
    }
  };

  componentWillUnmount () {
    if (this.tl) {
      this.tl.reverse();
    }
  }

  getSuffixClass () {
    return 'logo-' + this.props.clientName + '-' + this.props.suffix;
  }

  getStandardClass () {
    return this.props.clientName + '-logo';
  }

  getClassname () {
    return (this.props.suffix) ? this.getSuffixClass() : this.getStandardClass();
  }

  getUseLink () {
    return this.props.clientName + '-logo';
  }

  render () {
    return (
      <svg ref='logo' role='img' >
        <use xlinkHref={`#${this.getUseLink()}`}></use>
      </svg>
    );
  }

}

export default SpriteLogo;
