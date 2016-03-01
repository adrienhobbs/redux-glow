import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import AllClients from 'components/ui/clients-component/index.js';
import ScrollProxy from 'scroll-proxy';

const mapStateToProps = (state) => ({
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

  componentDidMount () {
    this.actions.changeNavState({isVisible: false, shouldAnimate: false});
    this.s = new ScrollProxy(this.refs.scrollTest);
    this.s.on('scroll', function () {
      console.log(this);
    });
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
        <div ref='scrollTest' className='test' style={{position: 'relative', overflow: 'scroll', width: '100%', height: '100vh',  background: 'blue', color: 'white'}} onClick={this.onClick.bind(this)}>click
          <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '50vh', background: 'red'}}></div>
          <div style={{height: '200vh', width: '100%'}}></div>
        </div>
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

