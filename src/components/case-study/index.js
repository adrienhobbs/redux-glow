import React, { PropTypes } from 'react';
import StudyBody from './single/study-body';

const CaseStudy = React.createClass({
  propTypes:     {
    singleMode:  PropTypes.bool,
    getInfoEl:   PropTypes.func,
    data:        PropTypes.object,
    children:    PropTypes.element || PropTypes.array,
    viewport:    PropTypes.object,
    showBody:    PropTypes.bool,
    slider:      PropTypes.bool
  },
  isPortrait () {
    return (this.props.viewport.orientation === 'portrait' && this.props.data.get('featured') && this.props.slider);
  },
  getBackground () {
    if (this.isPortrait()) {
      return this.props.data.get('backgroundImageUrlVert');
    } else {
      return this.props.data.get('backgroundImageUrl');
    }
  },
  getBgPosition () {
    if (this.isPortrait()) {
      return 'top center';
    } else {
      return 'top center';
    }
  },
  getBgStyle () {
    return {
      backgroundImage: `url(${this.getBackground()})`,
      backgroundPosition: this.getBgPosition()
    };
  },
  getFWA () {
    var style = {position: 'absolute', top: 0, right: 0, zIndex: 11, width: 283, maxWidth: '30%'};
    if (this.props.data.get('hasFWAAward')) {
      return <img style={style} className='featured-ribbon' src='https://s3.amazonaws.com/weareglow-assets/global-assets/fwa-ribbon.png' />;
    } else {
      return null;
    }
  },
  render () {
    const studyBody = (this.props.showBody && this.props.data.get('templateName')) ? <StudyBody data={this.props.data} viewport={this.props.viewport} isVisible={this.props.singleMode} /> : null;
    return (
      <div className='case-bg' style={this.getBgStyle()}>
        {this.getFWA()}
        {this.props.children}
        {studyBody}
      </div>
    );
  }

});

export default CaseStudy;
