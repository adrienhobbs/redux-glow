import React, { PropTypes } from 'react';
import Isvg from 'react-inlinesvg';
import ReactDOM from 'react-dom';
import './logo-title.scss';

export class StudyProjectTitle extends React.Component {

  static propTypes = {
    projectColor: PropTypes.string,
    path: PropTypes.string.isRequired,
    single: PropTypes.bool,
    logoColor: PropTypes.string
  };

  getProjectColor () {
    return (this.props.projectColor) ? this.props.projectColor : '#ffffff';
  }

  getLogoColor () {
    return (this.props.logoColor) ? this.props.logoColor : '#ffffff';
  }

  setProjectColor () {
    const svgEl = ReactDOM.findDOMNode(this.refs.projectTitle);
    const projectTitle = svgEl.getElementsByClassName('logo-project-title');
    const logo = svgEl.getElementsByClassName('logo-title');
    console.log(logo, projectTitle);
    TweenLite.set(projectTitle, {attr: { fill: this.getProjectColor() }});
    TweenLite.set(logo, {attr: { fill: this.getLogoColor() }});
  }

  render () {
    const className = (this.props.single) ? 'project-title-svg single' : 'project-title-svg';
    return (
      <Isvg ref='projectTitle' className={className} wrapper={React.DOM.div} src={this.props.path} onLoad={this.setProjectColor.bind(this)} />
    );
  }

}

export default StudyProjectTitle;
