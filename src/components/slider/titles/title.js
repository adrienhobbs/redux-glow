import React, { PropTypes } from 'react';
import styles from './titles.css';
const Title = React.createClass({
  propTypes: {
    title: PropTypes.string,
    isCurrent: PropTypes.bool
  },

  componentDidMount () {
    if (!this.props.isCurrent) {
      TweenLite.set(this.refs.title, {autoAlpha: 0});
    } else {
      this.animateTitleIn();
    }
  },

  componentWillUpdate (nextProps) {
    if (this.props.isCurrent && !nextProps.isCurrent) {
      this.tl.timeScale(1.5);
      this.tl.reverse();
    }
  },

  componentDidUpdate () {
    if (this.props.isCurrent) {
      this.animateTitleIn('+=0.4');
    }
  },

  animateTitleIn (delay = '+=0') {
    this.tl = new TimelineLite();
    const mySplitText = new SplitText(this.refs.title, {type:'words,chars'});
    const chars = mySplitText.chars;
    TweenLite.set(this.refs.title, {perspective:400, autoAlpha: 1});
    this.tl.staggerFrom(chars, 0.4, {opacity: 0, y:-20,  transformOrigin:'0% 50% -50',  ease:Back.easeInOut}, 0.05, delay);
  },

  render () {
    return (
      <div ref='title' className={styles.title}>
        {this.props.title}
      </div>
    );
  }
});

export default Title;
