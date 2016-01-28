import React, { PropTypes } from 'react';
import StudyBody from './single/study-body';

const CaseStudy = React.createClass({

  propTypes: {
    singleMode: PropTypes.bool,
    getInfoEl: PropTypes.func,
    data: PropTypes.object,
    children: PropTypes.element || PropTypes.array,
    viewport: PropTypes.object,
    showBody: PropTypes.bool
  },

  getBackground () {
    if (this.props.viewport.orientation === 'portrait' && this.props.viewport.isPhone) {
      return this.props.data.get('backgroundImageUrlVert');
    } else {
      return this.props.data.get('backgroundImageUrl');
    }
  },

  render () {
    const studyBody = (this.props.showBody && this.props.data.get('templateName')) ? <StudyBody data={this.props.data} viewport={this.props.viewport} isVisible={this.props.singleMode} /> : null;
    return (
      <div className='case-bg' style={{backgroundImage: `url(${this.getBackground()})`}}>
        {this.props.children}
        {studyBody}
      </div>
    );
  }

});

export default CaseStudy;
