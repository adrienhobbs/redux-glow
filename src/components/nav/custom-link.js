import React, {PropTypes} from 'react';
// import styles from './nav.css';
import {Link} from 'react-router';

export class CustomLink extends React.Component {
  static propTypes = {
    toggleNavState:     PropTypes.func,
    data:               PropTypes.object.isRequired,
    activeStyle:        PropTypes.object,
    insertIntoElArray:  PropTypes.func,
    desktop:            PropTypes.bool,
    color:              PropTypes.string
  };

  static contextTypes = {
    transitionToNewRoute: PropTypes.func
  };

  constructor (props) {
    super(props);
  }

  getData (key) {
    return this.props.data.get(key);
  }

  onClick (e) {
    e.preventDefault();
    if (this.props.toggleNavState) {
      this.props.toggleNavState();
    }
    this.context.transitionToNewRoute(this.getData('path'));
  }

  getStyle () {
    return (this.props.desktop) ? {color: this.props.color} : {};
  }

  render () {
    return (
      <Link ref='link' style={this.getStyle()} {...this.props} onClick={this.onClick.bind(this)} to={this.getData('path')}>{this.getData('name')}</Link>
    );
  }
}

export default CustomLink;
