import React, {PropTypes} from 'react';
import classes from './logo-sprite.css';
import './logos.svg';
export class SpriteLogo extends React.Component {

  static propTypes = {
    clientName: PropTypes.string,
    suffix: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  getSuffixClass () {
    return 'logo-' + this.props.clientName + '-' + this.props.suffix;
  }
  getStandardClass () {
    return 'logo-' + this.props.clientName;
  }
  getClassname () {
    return (this.props.suffix) ? this.getSuffixClass() : this.getStandardClass();
  }

  getLocalClassname () {
    return classes[this.getClassname()]
  }

  getUseLink () {
    return this.props.clientName + '-logo-icon';
  }
  render () {
    return (
      <svg ref='lockup'  role='img' className={this.getLocalClassname()}>
        <use xlinkHref={`#${this.getUseLink()}`}></use>
      </svg>
    );
  }

}

export default SpriteLogo;