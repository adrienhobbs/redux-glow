import React, {PropTypes} from 'react';
import styles from './backbar.css';
import GlowLogo from 'components/ui/icons/glow-logo';

export class BackBar extends React.Component {

  static propTypes = {
    data: PropTypes.object,
    goBack: PropTypes.func,
    showBar: PropTypes.bool
  };

  static contextTypes = {
    router: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.showBar) {
      TweenLite.set(this.refs.backbar, {yPercent: -100, autoAlpha: 0});
    } else if (this.props.showBar) {
      this.toggle(0, 1.1);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.showBar) {
      this.toggle(0, 1.1);
    } else if (!nextProps.showBar) {
      this.toggle(-100, 0);
    }
  }
  toggle (val, delay) {
    TweenLite.set(this.refs.backbar, {autoAlpha: 1, opacity: 1});
    TweenLite.to(this.refs.backbar, 0.4, {yPercent: val, ease: Expo.easeInOut, delay: delay});
  }

  getBackgroundColor () {
    return {
      backgroundColor: this.props.data.backbar.bgColor || this.props.data.logoColor
    };
  }
  render () {
    return (
      <div onClick={this.props.goBack} style={this.getBackgroundColor()} ref='backbar' className={styles.backbar}>
        <div className={styles.backbar_inner}>
          <div className={styles.backbar_button}>
            <svg className={styles.back} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 86.3 86.3'  width='35px'>
              <path  d='M43.3 84.3c-23 0-41.6-18.7-41.6-41.6S20.4 1 43.3 1 85 19.7 85 42.6 66.3 84.3 43.3 84.3zm0-77.8c-19.9 0-36 16.2-36 36.1s16.2 36.1 36.1 36.1 36.1-16.2 36.1-36.1S63.2 6.5 43.3 6.5z' fill='#ffffff'/>
              <path transform='rotate(0 0 90)' d='M44.3 60.6c-.8 0-1.5-.3-2.1-.9L19.1 34.3c-1-1.1-1-2.9.2-3.9 1.1-1 2.9-1 3.9.2l21.1 23.2 20.8-22.9c1-1.1 2.8-1.2 3.9-.2s1.2 2.8.2 3.9L46.4 59.7c-.5.5-1.3.9-2.1.9z' fill='#ffffff'/>
            </svg>
          </div>
          <div className={styles.backbar_text}>
            <span className={styles.view_more}>view more</span>
          </div>
          <div className={styles.glow_logo}>
            <GlowLogo width={'65'} />
          </div>
        </div>
      </div>
    );
  }
}

export default BackBar;
