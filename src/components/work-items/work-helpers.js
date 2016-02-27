import React, { PropTypes } from 'react';
import ProjectIntro from 'components/case-study/standard';
import MobileFeatured from 'components/case-study/featured/featured-mobile';
import Slide from 'components/slider/slide';
import snakeCase from 'lodash/snakeCase';
import keys from 'lodash/keys';

export class WorkHelpers extends React.Component {

  static propTypes = {
    slider:            PropTypes.object,
    counter:           PropTypes.object,
    TL:                PropTypes.object,
    work:              PropTypes.object,
    viewport:          PropTypes.object,
    featuredWorkOnly:  PropTypes.bool,
    params:            PropTypes.object,
    mobileLayout:      PropTypes.bool,
    toggleNav:         PropTypes.func,
    frameEls:          PropTypes.object,
    actions:           PropTypes.object,
    location:          PropTypes.object,
    locationState:     PropTypes.object
  };

  constructor () {
    super();
  }

  getBackgroundColor () {
    return (this.props.slider)
      ? {position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(to top, ' + this.getCurrentSlide().get('gradientTop') + ', ' + this.getCurrentSlide().get('gradientBottom') + ')'}
      : {background: '#ffffff'};
  }

  getClassName () {
    return (this.props.slider)
      ? 'slides-container'
      : 'slides-container row';
  }

  getCurrentPosition (i) {
    const positions = {
      center: (i === this.props.counter.current),
      top: (i < this.props.counter.current),
      bottom: (i > this.props.counter.current)
    };
    return keys(positions).filter(function returnPositions (key) {
      return positions[key];
    })[0];
  }

  getCurrentFeaturedProject () {
    return this.getFeaturedProjects().get(this.props.counter.current);
  }

  getSlideTemplate (slides) {
    return slides.map((data, i) => {
      return (
        <Slide
          key={i}
          params={this.props.params}
          data={data}
          position={this.getCurrentPosition(i)}
          TL={this.props.TL}
          viewport={this.props.viewport}
          location={this.props.locationState}
          toggleNav={this.props.toggleNav}/>
      );
    });
  }

  getCurrentSlide () {
    return this.props.work.studyData
    .filter(function filterSlides (data) {
      return (data.get('featured'));
    }).get(this.props.counter.current);
  }

  getHomePageSlides () {
    return this.props.work.studyData.filter((data) => {
      return (data.get('featured') || data.get('home'));
    });
  }

  getCurrentTitle () {
    return this.getCurrentFeaturedProject().get('cat');
  }

  getColors () {
    return this.getFeaturedProjects()
    .map(function getDotColor (data) {
      return data.get('logoColor');
    });
  }

  getWorkItems () {
    return (this.props.featuredWorkOnly)
      ? this.getFeaturedProjects()
      : this.getProjects();
  }

  getFeatured () {
    return this.props.work.studyData
    .filter(function filterProjects (data) {
      return (data.get('featured'));
    });
  }

  getFeaturedProjects () {
    return (this.props.slider) ? this.getSlideTemplate(this.getHomePageSlides()) : this.getProjects(this.getFeatured());
  }

  getTemplateType (work, i) {
    let isOpen = false;
    if (this.props.params) {
      isOpen = this.props.params.project === snakeCase(work.get('project'));
    }
    return (this.props.mobileLayout)
      ? <MobileFeatured
        frameEls={this.props.frameEls}
        id={i}
        key={i}
        navActions={this._navActions}
        data={work}
        hideOthers={this.hideInactiveProjects.bind(this)}
        isHidden={(this.state.singleMode && i !== this.state.activeStudy)}
        viewport={this.props.viewport}
        mobileLayout={this.props.mobileLayout}
      />
        : <ProjectIntro
          id={i}
          key={i}
          actions={this.props.actions}
          location={this.props.location}
          data={work}
          isOpen={isOpen}
          hideOthers={this.hideInactiveProjects.bind(this)}
          isHidden={(this.state.singleMode && i !== this.state.activeStudy)}
          viewport={this.props.viewport}
          mobileLayout={this.props.mobileLayout}
        />;
  }
  getProjects (projects = this.props.work.studyData) {
    return projects
    .filter(function filterStudies (data) {
      return (data.get('type') === 'case-study');
    })
    .map(function getWorkProjects (work, i) {
      return this.getTemplateType(work, i);
    }, this);
  }
}

export default WorkHelpers;
