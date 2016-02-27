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

  render () {
    const studyBody = (this.props.showBody && this.props.data.get('templateName')) ? <StudyBody data={this.props.data} viewport={this.props.viewport} isVisible={this.props.singleMode} /> : null;
    return (
      <div className='case-bg' style={this.getBgStyle()}>
        {this.props.children}
        {studyBody}
      </div>
    );
  }

});

export default CaseStudy;
