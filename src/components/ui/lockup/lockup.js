import React, { PropTypes } from 'react';
import classes from './lockups.scss';
import './lockups.svg';

export class Lockup extends React.Component {
  constructor (props) {
    super(props);
    this.tl = new TimelineLite();
    this.lockupEls = {
      title: document.getElementById(this.getClassname() + '-project'),
      logo: document.getElementById(this.getClassname() + '-logo')
    };
    this.setLockupColors();
  }
  static propTypes = {
    data: PropTypes.object,
    single: PropTypes.bool
  };
  componentWillUnmount () {
    this.tl.reverse();
  }
  getLogoColor () {
    return (!this.props.single && this.props.data.get('lockup').featured) ? this.props.data.get('lockup').featured.logoColor : this.props.data.get('lockup').logoColor;
  }
  getProjectColor () {
    return (!this.props.single && this.props.data.get('lockup').featured) ? this.props.data.get('lockup').featured.projectColor || '#000' : this.props.data.get('lockup').projectColor;
  }
  setLockupColors () {
    if (this.getLogoColor()) {
      this.tl.set(this.lockupEls.logo, {fill: this.getLogoColor(), attr: {fill: this.getLogoColor()}});
    }
    if (this.getProjectColor()) {
      console.log(this.getProjectColor());
      this.tl.set(this.lockupEls.title, {fill: this.getProjectColor(), attr: {fill: this.getProjectColor()}});
    }
  }
  getClassname () {
    return this.props.data.get('lockup').className;
  }

  getLocalClassname () {
    return classes[this.getClassname()];
  }
  getDivClassname () {
    return (this.props.single) ? 'project-title-svg single' : 'project-title-svg';
  }
  render () {
    return (
      <div className={this.getDivClassname()}>
        <svg ref='lockup'  role='img' className={this.getLocalClassname()}>
          <use xlinkHref={`#${this.getClassname()}`}></use>
        </svg>
      </div>
    );
  }
}

export default Lockup;
