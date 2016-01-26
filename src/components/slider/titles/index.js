import React from 'react';
import './titles.scss';
import Title from './title';

const Titles = React.createClass({

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
      <div className='titles' id='case-title'>
        {this.getTitles()}
      </div>
    );
  }
});

export default Titles;
