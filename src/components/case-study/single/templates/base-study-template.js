import React from 'react';

export class BaseStudyComponent extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  };

  createMarkup (markup) {
    return {__html: markup};
  }

  videoPlayNow () {
    const TL = new TimelineLite();
    TL.add(() => this.refs.video.play());
    return TL;
  }

  pauseVideo () {
    this.refs.video.pause();
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.to(this.refs.videoBlock, 0.7, {maxWidth: '51.25em', ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.playBtn, 0.5, {autoAlpha: 1, ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.controls, 0.5, {autoAlpha: 0}, 'start+=1');
  }
  stopVideo () {
    this.refs.video.stop();
  }

  onVideoClick () {
    const width = this.refs.videoBlock.getBoundingClientRect().width;
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.set(this.refs.videoBlock, {width: width, maxWidth: '100%'}, 'start');
    TL.to(this.refs.videoBlock, 0.5, {width: '100%', ease: Expo.easeInOut}, 'start+=0.5');
    TL.to(this.refs.playBtn, 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, 'start+=0.5');
    TL.add(this.videoPlayNow.bind(this), 'start+=1.5');
    TL.to(this.refs.controls, 0.5, {autoAlpha: 1}, 'start+=1.8');
  }

  constructor (props) {
    super(props);
  }

  getCopyStyle () {
    return {
      color: this.props.data.get('copyColor') || '#fff'
    };
  }

  getHeadlineStyle () {
    return {
      color: this.props.data.get('headlineColor') || '#000'
    };
  }

  getStatContent () {
    return this.props.data.get('results').stats.map((stat, i) => {
      return (
        <div key={i} className='stat-box-triple'>
          <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
            {stat.stat}
          </div>
          <div style={{color: this.props.data.get('results').statLabelColor}} className='stat-label'>
            {stat.label}
          </div>
        </div>
      );
    });
  }

  createHeadlineEl (headline) {
    return (
      <h1 style={this.getHeadlineStyle()} className='page-title'>{headline} </h1>
    ) 
  }
  render () {
    return (
      <h1>Not Implemented Yet!</h1>
    );
  }
}

export default BaseStudyComponent;
