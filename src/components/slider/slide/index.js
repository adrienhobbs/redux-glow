import React, { PropTypes } from 'react';
import Animations from 'constants/animations/slider';
import HomeVideo from 'components/slider/slide/templates/video';
import ContactSlide from 'components/slider/slide/templates/contact-slide';
import JobsClients from 'components/slider/slide/templates/jobs-clients';
import Study from 'components/case-study/featured';
import './slide.scss';

export class Slide extends React.Component {

  static propTypes = {
    position: PropTypes.string,
    TL: PropTypes.object,
    viewport: PropTypes.object,
    toggleNav: PropTypes.func
  };

  componentDidMount () {
    const initialStyle = this.getStyle();
    TweenLite.set(this.refs.slideContainer, initialStyle);
  }
  shouldComponentUpdate (nextProps) {
    return (nextProps.position !== this.props.position) || (nextProps.viewport.orientation !== this.props.viewport.orientation);
  }
  componentDidUpdate (prevProps) {
    this.previousPosition = prevProps.position;
    this.animateSlidePosition();
  }
  getAnimationType () {
    const currentPosition = this.props.position;
    const previousPosition = this.previousPosition;

    if (currentPosition === 'top') {
      return Animations.upAndOut(this.refs.slideContainer);
    } else if (currentPosition === 'center' && previousPosition === 'bottom' ) {
      return Animations.upAndIn(this.refs.slideContainer);
    } else if (currentPosition === 'bottom') {
      return Animations.downAndOut(this.refs.slideContainer);
    } else if (currentPosition === 'center' && previousPosition === 'top') {
      return Animations.downAndIn(this.refs.slideContainer);
    }
  }

  /* eslint-disable */
  getStyle () {
    switch (this.props.position) {
      case 'center' :
        return {yPercent: 0, top: 0};
        break;
      case 'bottom' :
        return {yPercent: 100, top: 0};
        break;
      case 'top' :
        return {yPercent: -100, top: 0};
        break;
      default :
        break;
    }
  }

  getSlideType () {
    switch (this.props.data.get('type')) {
      case 'video' :
        return <HomeVideo {...this.props} /> ;
        break;
      case 'case-study' :
        return <Study slider {...this.props} />;
        break;
      case 'jobs-clients' :
        return (
            <JobsClients {...this.props} />
        );
        break;
      case 'contact' :
        return (
            <ContactSlide {...this.props} />
        );
        break;
    }
  }
  /* eslint-enable */

  animateSlidePosition () {
    this.props.TL.add(this.getAnimationType(), 0);
  }

  render () {
    return (
      <div ref='slideContainer' className='slide'>
        {this.getSlideType()}
      </div>
    );
  }
}

export default Slide;
