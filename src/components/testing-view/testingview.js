import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import AllClients from 'components/ui/clients-component/index.js';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  work: state.work,
  counter: state.counter
});

export class Testing extends PageLayout {

  static propTypes = {
    dispatch: PropTypes.func,
    work: PropTypes.object,
    viewport: PropTypes.object,
    toggleNav: PropTypes.func
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount () {
    if (this.props.nav.isVisible) {
      this.actions.changeNavState({isVisible: false, shouldAnimate: false});
    }
  }

  constructor (props) {
    super(props);
  }

  fullscreen () {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  onClick () {
    // this.fullscreen();
  }
  render () {
    return (
      <div ref='testMe'>
        <AllClients showSubtitle color='#666' stroke='#666' />
        <div className='test' style={{width: 100, height: 100, background: 'blue', color: 'white'}} onClick={this.onClick.bind(this)}>click</div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Testing);
// import React from 'react';

// import ReactDOM from 'react-dom';
// import ScrollArea from 'react-scrollbar';
// import PageLayout from 'layouts/PageLayout/PageLayout.js';

// class App extends React.Component {
//   render () {
//     return (
//       <ScrollArea className='test'>
//         <Content />
//       </ScrollArea>
//     );
//   }
// }

// class Content extends React.Component {
//   render () {
//     return (
//       <div onClick={this.handleSomeAction.bind(this)}> Some long content </div>
//     );
//   }

// handleSomeAction () {
//   this.context.scrollArea.refresh();
// }
// }

// Content.contextTypes = {
//   scrollArea: React.PropTypes.object
// };

// export default App;

