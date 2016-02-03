import React, {PropTypes} from 'react';
import './backbar.scss';
import GlowLogo from 'components/ui/icons/glow-logo';
import ActionIcons from 'components/ui/icons/action-icons';

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
      <div onClick={this.props.goBack} style={this.getBackgroundColor()} ref='backbar' className='backbar'>
        <div className='backbar-inner'>
          <div className='backbar-button'>
            <ActionIcons iconType='ARROW' direction='back' color='#ffffff' width={35} />
          </div>
          <div className='backbar-text'>
            <span className='view-more'>view more</span>
          </div>
          <GlowLogo width={'65'} />
        </div>
      </div>
    );
  }
}

export default BackBar;
