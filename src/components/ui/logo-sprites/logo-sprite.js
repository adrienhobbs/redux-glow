import React, {PropTypes} from 'react';
// import './symbol/svg/sprite.symbol.svg';
import './glow-icons.svg';
// import './logo-sprite.svg';
import './svg/symbol/svg/sprite.symbol.svg';
import styles from 'components/ui/clients-component/client-logos.css';
export class SpriteLogo extends React.Component {
  static propTypes = {
    clientName: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.string,
    isCustom: PropTypes.bool
  };

  constructor (props) {
    super(props);
    this.logoEl = document.getElementsByClassName(props.clientName);
    if (this.logoEl && props.color && !props.isCustom) {
      TweenLite.set(this.logoEl, {fill: props.color || '#666'});
    }
  };

  componentWillUnmount () {
    if (this.logoEl) {
      TweenLite.set(this.logoEl, {clearProps: 'all'});
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
      <div className={styles.client}>
        <svg className={styles.client_svg} ref='logo' role='img' >
          <use xlinkHref={`#${this.getUseLink()}`}></use>
        </svg>
      </div>
    );
  }

}

export default SpriteLogo;
