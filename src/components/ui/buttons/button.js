import React, {PropTypes} from 'react';
import styles from './buttons.css';

export class Button extends React.Component {

  constructor () {
    super();
    this.state = {
      hovered: false
    };
  }
  toggleHover () {
    this.setState({hovered: !this.state.hovered});
  }
  render () {
    const style = {
      backgroundColor: (this.state.hovered) ? this.props.hoverColor : this.props.bgColor,
      color: this.props.color
    };
    return (
      <a target='_blank' href={this.props.link}>
        <div onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)} style={style} className={styles.button}>
          view the site
        </div>
      </a>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  hoverColor: PropTypes.string
};

export default Button;
