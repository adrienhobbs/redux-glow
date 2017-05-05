import React, {PropTypes} from 'react';
import classes from './header-component.css';
import ScrollMonitor from 'scrollmonitor';

export class HeaderComponent extends React.Component {

  static propTypes = {
    bgSrc: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    hideGradient: PropTypes.bool
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (!this.props.hideGradient) {
      this.scrollMonitor = ScrollMonitor.create(this.refs.gradTrigger);
      this.scrollMonitor.exitViewport(this.showGradient.bind(this));
      this.scrollMonitor.enterViewport(this.hideGradient.bind(this));
    }
  }

  componentWillUnmount () {
    if (!this.props.hideGradient) {
      this.scrollMonitor.destroy();
    }
  }

  showGradient () {
    TweenLite.to(this.refs.endStop, 0.01, {ease: Circ.easeInOut, attr: {offset: 0.95}});
  }

  hideGradient () {
    TweenLite.set([this.refs.endStop, this.refs.middleStop], {attr: {offset: 0}});
  }

  getBgUrl () {
    return this.props.bgSrc || `https://s3.amazonaws.com/weareglow-assets/header-images/${this.props.title}.jpg`;
  }

  getHeaderStyle () {
    return {backgroundImage: `url(${this.getBgUrl()})`};
  }

  render () {
    return (
      <div className='header' ref='header'>
        <div ref='headerImage' style={this.getHeaderStyle()} className={classes.headerImage}>
          <div className={classes.gradTrigger} ref='gradTrigger'></div>
        </div>
        <h1 className={classes.headline}>{this.props.title}</h1>
        <h4 className='page-subtitle'>{this.props.subtitle}</h4>
        <div className={classes.gradientCtr}>
          <svg className={classes.gradientSvg}>
            <linearGradient id='t' gradientTransform='rotate(90)'>
              <stop offset='0' stopColor='white' />
              <stop offset='0' stopColor='white' stopOpacity='0' ref='endStop' />
            </linearGradient>
            <rect x='0' y='0' width='100%' height='100%' fill='url(#t)' />
          </svg>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
