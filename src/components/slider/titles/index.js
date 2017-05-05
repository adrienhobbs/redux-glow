import React from 'react';
import styles from './titles.css';
import Title from './title';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Titles = React.createClass({

  mixins: [PureRenderMixin],
  propTypes: {
    titles: React.PropTypes.object,
    currentNum: React.PropTypes.number
  },

  getTitles () {
    const isCurrentTitle = (i) => {
      return (i === this.props.currentNum);
    };
    return this.props.titles.map((title, i) => {
      return <Title key={i} title={title} isCurrent={isCurrentTitle(i)} />;
    });
  },

  render () {
    return (
      <div className={styles.titles} id='case-title'>
        {this.getTitles()}
      </div>
    );
  }
});

export default Titles;
