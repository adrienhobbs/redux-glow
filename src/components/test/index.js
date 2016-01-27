import React from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar';


class App extends React.Component {
  render () {
    return (
      <ScrollArea className='test'>
        <Content />
      </ScrollArea>
    );
  }
}

class Content extends React.Component {
  render () {
    return (
      <div onClick={this.handleSomeAction.bind(this)}> Some long content </div>
    );
  }

handleSomeAction () {
  this.context.scrollArea.refresh();
}
}

Content.contextTypes = {
  scrollArea: React.PropTypes.object
};

export default App;
