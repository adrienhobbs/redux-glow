import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import AllClients from 'components/ui/clients-component/index.js';
import Logo from 'components/ui/logo-sprites/logo-sprite';
import styles from  './test.css';

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

  render () {
    return (
      <div>
        <AllClients showSubtitle color='#666' stroke='#666' />
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

