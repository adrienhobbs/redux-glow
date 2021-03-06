import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
// import AllClients from 'components/ui/clients-component/index.js';
import ScrollProxy from 'scroll-proxy';
import ScrollWatcher from 'utilities/scroll_watcher.js';

const mapStateToProps = (state) => ({
});

export class Testing extends PageLayout {

  state = {shouldUpdate: true};

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
    TweenLite.set('#footer', {autoAlpha: 0});
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
  hit (data) {
    console.log(data);
    this.setState({shouldUpdate: false});
    TweenLite.delayedCall(5, () => { this.setState({shouldUpdate: true}); });
  }

  render () {
    const threshold = {
      y: {
        up: 100,
        down: -100
      }
    };
    return (
      <div ref='testMe'>
        <svg>
          <text style={{fontFamily: 'GT-Walsheim', color: 'black'}}>hello</text>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg"
          width="500" height="40" viewBox="0 0 500 40">
          <text x="0" y="35" fontWeight='bold' fontFamily="GT-Walsheim" fontSize="35">
            Hello, out there
          </text>
        </svg>
        <ScrollWatcher shouldUpdate={this.state.shouldUpdate} threshold={threshold} thresholdHit={this.hit.bind(this)} />
      </div>
    );
      }
      }

      export default connect(mapStateToProps)(Testing);
      // import React from 'react';

      // <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500.3 60.5'>
      //   <path style={{fill: 'white'}} d='M33 33.1l-8.1 25.2H14.7L0 18.8h12.9l7.3 23.5 7-23.5h11.6l7 23.5L53 18.8h13L51.2 58.3H41l-8-25.2zm42.1 8.5c.2 4.8 2.2 8.8 8.8 8.8 4.3 0 6.5-2 7.3-4.5h12.3c-1.1 7.5-8.2 13.5-19.5 13.5-13.8 0-21.3-8.6-21.3-20.8 0-11.6 7.3-20.8 21-20.8 12.4 0 20.3 8.4 20.3 18 0 1.6 0 3.4-.4 5.8H75.1zm0-7.2h16.5c0-5.1-3.4-8.3-8.1-8.3-4.8 0-8.4 2.9-8.4 8.3zm90.5-15.6v39.5h-12.5v-5.6c-1.9 3.6-7 6.6-12 6.6-11.4 0-19.3-8.9-19.3-20.7 0-11.8 7.9-20.7 19.3-20.7 5.1 0 10.2 3 12 6.6v-5.7h12.5zm-12.5 19.7c0-5.4-3.8-10.1-9.4-10.1-5.7 0-9.4 4.7-9.4 10.1 0 5.5 3.8 10.1 9.4 10.1 5.6 0 9.4-4.6 9.4-10.1zm45.8-8.3c-1.7-.4-2.7-.6-4.4-.6-6.9 0-11.4 3.6-11.4 13.3v15.4h-12.5V18.8H183v6.4c1.8-3.7 6.6-7 12-7 1.6 0 2.6.2 3.8.7v11.3zm12.4 11.4c.2 4.8 2.2 8.8 8.8 8.8 4.3 0 6.5-2 7.3-4.5h12.3c-1.1 7.5-8.2 13.5-19.5 13.5-13.8 0-21.3-8.6-21.3-20.8 0-11.6 7.3-20.8 21-20.8 12.4 0 20.3 8.4 20.3 18 0 1.6 0 3.4-.4 5.8h-28.5zm0-7.2h16.6c0-5.1-3.4-8.3-8.1-8.3-5 0-8.5 2.9-8.5 8.3zM291.8 27.1h26.7v11.2c-2.1 13.2-12 22.1-28.9 22.1-19.7 0-30.6-13.8-30.6-30.2C259 14.5 270.2 0 289.5 0c16.6 0 27.4 9.8 28.5 21.5h-18.8c-.6-3.3-3.8-6.9-9.8-6.9-9.2 0-12.9 7.8-12.9 15.9 0 8.9 4.6 16 14 16 6.4 0 10-3.6 10.8-8.1h-9.5V27.1zM354.7 44.3v14.6h-32V1.6h17v42.8h15zM354.3 30.2c0-15.8 11.4-30.2 31.1-30.2 19.7 0 31.1 14.4 31.1 30.2s-11.4 30.2-31.1 30.2c-19.7.1-31.1-14.4-31.1-30.2zm44.9 0c0-7.6-5.1-14.7-13.8-14.7-8.7 0-13.8 7-13.8 14.7s5.2 14.7 13.8 14.7c8.8 0 13.8-7 13.8-14.7zM455.3 27.7l-9.6 31.2h-14.8L410.2 1.6h18l10.2 34.2 10.1-34.2h13.6l10 34.2 10.2-34.2h18L479.7 59h-14.9l-9.5-31.3z'/>
      // </svg>
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

