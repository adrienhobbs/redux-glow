import React, {PropTypes} from 'react';
import './glow-icons.svg';
import './svg/symbol/svg/sprite.symbol.svg';
import styles from 'components/ui/clients-component/client-logos.css';

export class SpriteLogo extends React.Component {

  static propTypes = {
    clientName: PropTypes.string,
    suffix: PropTypes.string,
    color: PropTypes.string,
    isCustom: PropTypes.bool,
    className: PropTypes.string
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

  getUseLink () {
    return this.props.clientName;
  }

  render () {
    return (
      <div className={this.props.className}>
        <svg className={styles.client_svg} ref='logo' role='img' >
          <use xlinkHref={`#${this.getUseLink()}`}></use>
        </svg>
      </div>
    );
  }

}

export default SpriteLogo;
