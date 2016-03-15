import React, {PropTypes} from 'react';
import Link from 'react-router/lib/Link';

export class CustomLink extends React.Component {
  static propTypes = {
    toggleNavState:  PropTypes.func,
    data:            PropTypes.object,
    activeStyle:     PropTypes.object,
    desktop:         PropTypes.bool,
    color:           PropTypes.string,
    path:            PropTypes.string,
    name:            PropTypes.string,
    children:        PropTypes.object
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
    e.stopPropagation();
    if (this.props.toggleNavState) {
      this.props.toggleNavState();
    }
    this.context.transitionToNewRoute(this.getPath());
  }

  getStyle () {
    return (this.props.desktop) ? {color: this.props.color, borderColor: this.props.color} : {};
  }

  getPath () {
    return this.props.path || this.getData('path');
  }

  getName () {
    return this.props.name || this.getData('name');
  }

  getInnerLink () {
    return this.props.children || this.getName();
  }

  render () {
    return (
      <Link ref='link' style={this.getStyle()} {...this.props} onClick={this.onClick.bind(this)} onTouchEnd={this.onClick.bind(this)} to={this.getPath()}>{this.getInnerLink()}</Link>
    );
  }
}

export default CustomLink;
