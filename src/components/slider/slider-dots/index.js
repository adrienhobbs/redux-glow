import React from 'react';
import SliderDot from './slider-dot';
import './dots.scss';

const SliderDots = React.createClass({

  propTypes: {
    goToNumber: React.PropTypes.func,
    colors: React.PropTypes.object,
    currentDot: React.PropTypes.number
  },

  componentWillMount () {
    this.TL = new TimelineLite({autoRemoveChildren: true});
  },

  render () {
    const createDot = function renderDots (color, i) {
      return (
        <SliderDot
          goToNumber={this.props.goToNumber}
          TL={this.TL}
          fillColor={this.props.colors.get(i)}
          currentDot={this.props.currentDot}
          number={i}
          key={i}
        />
      );
    };
    return (
      <svg className='dots' id='slider-dots'>
        {this.props.colors.map(createDot.bind(this))}
      </svg>
    );
  }
});

export default SliderDots;
