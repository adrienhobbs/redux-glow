import React, {PropTypes} from 'react';
import styles from './nav.css';
export class GlowLogoLink extends React.Component {

  static propTypes = {
    logoClick: PropTypes.func,
    color: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  componentDidUpdate (prevProps) {
    (prevProps.color !== this.props.color) ? this.changeLogoBgColor() : null;
  }
  changeLogoBgColor () {
    TweenLite.to(this.refs.logoBG, 1.5, {backgroundColor: this.props.color, ease: Expo.easeInOut});
  }
  onClick () {
    this.props.logoClick();
  }

  render () {
    return (
      <div ref='logoBG' onClick={this.onClick.bind(this)} className={styles.logo}>
        <svg ref='logo' role='img' >
          <use xlinkHref='#glow'></use>
        </svg>
      </div>
    );
  }
}

export default GlowLogoLink;
