import React from 'react';
import ResultsTemplates from 'components/case-study/content-modules/results/templates/templates.js';

export class BaseStudyComponent extends React.Component {

  static propTypes = {
    data: React.PropTypes.object
  };

  createMarkup (markup) {
    return {__html: markup};
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

  createHeadlineEl (headline) {
    return (
      <h1 style={this.getHeadlineStyle()} className='study_headline'>{headline} </h1>
    );
  }
  createSubtitleEl (headline) {
    return (
      <h1 style={this.getHeadlineStyle()} className='page-title small'>{headline} </h1>
    );
  }
  createParagraphEl (paragraph) {
    let t = this.createMarkup(this.props.data.get('testMe'));
    return t;
  }
  getResultsTemplate () {
    return ResultsTemplates[this.props.data.get('results').template];
  }
  render () {
    return (
      <h1>Not Implemented Yet!</h1>
    );
  }
}

export default BaseStudyComponent;
