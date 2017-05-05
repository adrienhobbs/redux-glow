/* eslint-disable */
import React from 'react';
import Formsy from 'formsy-react';

const EmailInput = React.createClass({
  mixins: [Formsy.Mixin],
  changeValue (event) {
    this.setValue(event.currentTarget.value);
  },
  render () {
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : 'valid';
    return (
      <div className={className}>
        <input className={this.props.className} placeholder={this.props.placeholder || ''} type="email" onChange={this.changeValue} value={this.getValue()}/>
      </div>
    );
  }
});

export default EmailInput;
