import React from 'react';

const Twitter = React.createClass({
  propTypes: {
    color: React.PropTypes.string
  },
  componentDidMount () {
    this.tl = new TimelineMax();
    this.speed = 0.25;
    this.tl.add(TweenMax.set(this.refs.wing, {transformOrigin:'100% 60%'}));
    this.tl.to(this.refs.wing, this.speed, {rotation:14, ease:Quad.easeOut});
    this.tl.to(this.refs.wing, this.speed, {rotation:0, ease:Quad.easeOut});
    this.tl.to(this.refs.wing, this.speed, {rotation:14, ease:Quad.easeOut});
    this.tl.to(this.refs.wing, this.speed, {rotation:0, ease:Quad.easeOut});
    this.tl.pause();
  },
  onMouseEnter () {
    this.tl.restart();
  },
  render () {
    return (
      <svg ref='twitterIcon' fill={this.props.color} onMouseEnter={this.onMouseEnter} width='26px' height='20px' version="1.1" x="0px" y="0px"
           viewBox="0 -10 373 324">
        <g ref="bird">
          <path  d="M366.7,56.5c-13.2,5.9-27.4,9.8-42.3,11.6c15.2-9.1,26.9-23.6,32.4-40.7
						c-14.3,8.4-30,14.6-46.8,17.9C296.5,30.9,277.4,22,256.2,22c-40.7,0-73.7,33-73.7,73.7c0,5.8,0.7,11.4,1.9,16.8
						c0,0-40.5,110.7-67.8,137.7c-17.9,17.7-57,31.5-91.5,31.5c-5.9,0-11.8-0.4-17.6-1c32.6,20.9,71.3,33.2,112.9,33.2
						c135.5,0,209.6-112.3,209.6-209.6l-0.2-9.5C344.3,84.3,356.8,71.3,366.7,56.5z"/>
        </g>
        <g ref="wing">
          <path id="wingPath"  d="M81.1,197.7c-6.2,1.7-12.7,2.6-19.4,2.6c-4.8,0-9.4-0.5-13.9-1.4c9.4,29.3,36.6,50.6,68.8,51.2
						c0,0,97.4-2.4,105.3-14.3c7.6-11.5,11.8-24.7,13.9-38.3c2-13.4,1.7-27.4,1.8-41c0.1-14.4-53.2-44.2-53.2-44.2
						c-61.2-3.1-115.5-32.4-151.9-77c-6.4,10.9-10,23.5-10,37c0,25.6,13,48.1,32.8,61.3c-12.1-0.4-23.4-3.7-33.4-9.2v0.9
						C22,161.2,47.4,191,81.1,197.7z"/>
        </g>
      </svg>
    );
  }
});

export default Twitter;

