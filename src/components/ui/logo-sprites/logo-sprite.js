import React, {PropTypes} from 'react';
// import './symbol/svg/sprite.symbol.svg';
// import './glow-icons.svg';
// import './logo-sprite.svg';
import './svg/symbol/svg/sprite.symbol.svg';

export class SpriteLogo extends React.Component {
  static propTypes = {
    clientName: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.string
  };

  constructor (props) {
    super(props);
    this.logoEl = document.getElementsByClassName(props.clientName);
    if (this.logoEl && props.color) {
      this.tl = new TimelineLite();
      this.tl.set(this.logoEl, {fill: props.color || '#666'});
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
    return this.props.clientName;
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
