import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import PageLayout from 'layouts/PageLayout/PageLayout';
import has from 'lodash/has';
import snakeCase from 'lodash/snakeCase';

const mapStateToProps = (state) => ({
  work: state.work,
  viewport: state.viewport
});

export class Direct extends PageLayout {

  static propTypes = {
    dispatch: PropTypes.func,
    work: PropTypes.object,
    toggleNav: PropTypes.func,
    viewport: PropTypes.viewport
  };

  static contextTypes = {
    router: PropTypes.object
  };

  constructor (props) {
    super(props);
    this.state = {
      singleMode: false,
      activeStudy: null
    };
  }

  goBack () {
    TweenLite.to(document.body, 0.5, {autoAlpha: 0, ease: Circ.easeInOut, className: '+=isHidden', onComplete: () => {
      this.context.router.push({pathname: '/work'});
    }});
  }
  getCurrentCaseStudy () {
    let current = {};

    this.props.work.studyData.filter(function (a, b) {
      if (snakeCase(a.get('title')) === this.props.params.project) {
        current.study = a;
      }
    }, this);
    return current;
  }
  createCurrentStudy (current) {
    return (
      <CaseStudy showBody {...this.props} singleMode data={current.study}>
        <BackBar showBar singleMode data={current.study.toJS()} goBack={this.goBack.bind(this)} />
      </CaseStudy>
    );
  }
  getCurrentStudy () {
    const current = this.getCurrentCaseStudy();
    if (has(current, 'study')) {
      return this.createCurrentStudy(current);
    } else {
      this.context.router.push({pathname: '/404'});
    }
  }

  componentDidMount () {
    this.actions.changeNavState({isVisible: false, shouldAnimate: false});
    TweenLite.set('#footer', {autoAlpha: 0});
    TweenLite.set(document.documentElement, {overflowY: 'hidden'});
    TweenLite.fromTo(this.refs.caseStudy, 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Expo.easeInOut, delay: 1});
  }

  componentWillUnmount () {
    this.actions.changeNavState({isVisible: true});
    TweenLite.set('#footer', {autoAlpha: 1});
    TweenLite.set(document.documentElement, {clearProps: 'overflow'});
  }
  hideInactiveProjects (activeStudy, singleMode) {
    this.setState({singleMode: singleMode, activeStudy: activeStudy});
  }

  render () {
    return (
      <div ref='caseStudy' style={{opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        {this.getCurrentStudy()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Direct);
