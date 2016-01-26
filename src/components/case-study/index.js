import React from 'react';
import StudyBody from './single/study-body';
import './_case-study.scss';

const CaseStudy = React.createClass({

  propTypes: {
    singleMode: React.PropTypes.bool,
    getInfoEl: React.PropTypes.func,
    data: React.PropTypes.object,
    children: React.PropTypes.element || React.PropTypes.array,
    viewport: React.PropTypes.object,
    showBody: React.PropTypes.bool
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
