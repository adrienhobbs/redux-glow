import React from 'react';
import Formsy from 'formsy-react';
/*eslint-disable */

const NameInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue (event) {
    this.setValue(event.currentTarget.value);
  },
  render () {
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : 'valid';
    return (
      <div className={className}>
        <input value={this.getValue()} placeholder={this.props.placeholder || ''} onChange={this.changeValue} type="text" />
      </div>
    );
  }
});

export default NameInput;
