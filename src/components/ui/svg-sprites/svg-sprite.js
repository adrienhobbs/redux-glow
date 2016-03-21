import React, {PropTypes} from 'react';
import './glow-icons.svg';
import './symbol/svg/sprite.symbol.svg';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './style.css';

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
    if (this.logoEl && props.color && !props.isCustom) {
      this.logoEl = document.getElementsByClassName(props.clientName);
      TweenLite.set(this.logoEl, {fill: props.color || '#666'});
    }
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
