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
        <input value={this.getValue()} onChange={this.changeValue} type="text" />
          <label>your name &#42;</label>
      </div>
    );
  }
});

export default NameInput;
