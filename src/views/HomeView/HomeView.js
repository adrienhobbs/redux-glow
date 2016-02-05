import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import HomeTemplate from './HomeTemplate';
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
//
import {ImageHelper} from 'react-preload';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  routerState: state.router
});

export class HomeView extends PageLayout {
  static propTypes = {
    counter: PropTypes.object,
    nav: PropTypes.object,
    work: PropTypes.object,
    featuredWork: PropTypes.object,
    viewport: PropTypes.object
  };

  getHomeTemplate () {
    return HomeTemplate[this.getCurrentDevice()];
  }

  componentDidMount () {
    this.animatePageContentIn();

    const images = this.props.work.studyData.filter((workItem) => {
      return (workItem.get('type') === 'case-study');
    }).map((workItem) => {
      console.log(workItem.get('backgroundImageUrl'));
      return workItem.get('backgroundImageUrl');
    }).toJS();
    images.push('https://s3.amazonaws.com/weareglow-assets/assets/work-shape.svg');

    ImageHelper.loadImages(images);
  }
  constructor (props) {
    super(props);
  }
  render () {
    this.TL = new TimelineLite();
    const HomeTemp = this.getHomeTemplate();
    return (
      <div className='home-container'>
        <HomeTemp location={this.props.routerState.location} TL={this.TL} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
