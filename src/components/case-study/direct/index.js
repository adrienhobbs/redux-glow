import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import CaseStudy from 'components/case-study';
import BackBar from 'components/ui/backbar';
import PageLayout from 'layouts/PageLayout/PageLayout';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  work: state.work,
  counter: state.counter
});

export class Direct extends PageLayout {

  static propTypes = {
    dispatch: PropTypes.func,
    work: PropTypes.object,
    viewport: PropTypes.object,
    toggleNav: PropTypes.func
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
    this.context.router.push({pathname: '/work'});
  }
  getCurrentStudy () {
    if (this.props.work.current) {
      return (
        <CaseStudy showBody {...this.props} singleMode data={this.props.work.current.study}>
          <BackBar showBar singleMode data={this.props.work.current.study.toJS()} goBack={this.goBack.bind(this)} />
        </CaseStudy>
      );
    }
  }

  componentDidMount () {
    this.actions.changeNavState({isVisible: false, shouldAnimate: true});
    this.actions.setCurrentStudy(this.props.params);
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
