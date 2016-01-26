import React                  from 'react';
import PageComponent from './page-component';
import { connect } from 'react-redux';
import './home.scss';
import HomeViews from './Home/HomeViews';

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
//
const mapStateToProps = (state) => ({
  counter:      state.counter,
  routerState:  state.router,
  viewport:     state.viewport,
  work:         state.work
});


export class HomeView extends PageComponent {
  static propTypes = {
    counter  :  React.PropTypes.object,
    viewport :  React.PropTypes.object,
    work     :  React.PropTypes.object,
    dispatch:   React.PropTypes.func
  }
  constructor () {
    super();
  }
  componentWillMount () {
    this.setupPageInfo('');
    this.bindTransitionActions();
    this.bindNavActions();
    this.bindCounterActions();
  }
  componentDidMount () {
    this.animatePageContentIn();
  }
  setProperTemplate () {
    return HomeViews[this.getCurrentDevice()];
  }
  getCurrentDevice () {
    return (this.props.viewport.isPhone) ? 'mobile' : 'desktop';
  }
  toggleNav (bool) {
    this._navActions.changeNavState({isVisible: bool});
  }
  render () {
    const HomeTemplate = this.setProperTemplate();
    this.TL = new TimelineLite;
    return (
      <div className='home-container' ref='page'>
        <HomeTemplate
          counter={this.props.counter}
          colors={this.props.work.colors}
          counterActions={this._counterActions}
          featuredWork={this.props.work.featured}
          TL={this.TL}
          toggleNav={this.toggleNav.bind(this)}
          viewport={this.props.viewport}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(HomeView);
