import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import youTube from 'youtube-wrapper';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  work: state.work,
  counter: state.counter
});

export class NotFoundView extends PageLayout {

  static propTypes = {
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount () {
    this.actions.changeNavState({isVisible: false, shouldAnimate: false});
    youTube.autoLoadYouTubeAPI();
  }

  componentWillUnmount () {
    this.actions.changeNavState({isVisible: true, shouldAnimate: false});
  }
  onVideoEnd (event) {
    if (event.data === 0) {
      this.context.router.push({pathname: '/'});
    }
  }

  componentDidMount () {
    const opts = {
      height: '100%',
      width: '100%',
      videoId: 'gQN2t4nyoGc',
      playerVars: { 'autoplay': 1, 'controls': 0, 'iv_load_policy':3, 'modestbranding':1, 'showinfo':0, 'start':22, 'rel':0 }
    };

    const Player = youTube.Player;
    this.player = new Player(this.refs.ctr, opts);
    this.player.on('onStateChange', this.onVideoEnd.bind(this));
  }

  render () {
    return (
      <div className='videoCtr' style={{background: 'white', zIndex: 2000, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%'}}>
        <div ref='ctr'></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NotFoundView);
