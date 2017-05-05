/* eslint-disable */

import React from 'react';
import Formsy from 'formsy-react';

const TextArea = React.createClass({
  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  changeValue (event) {
    this.setValue(event.currentTarget.value);
  },

  render () {
    const className = this.showRequired() ? 'required' : this.showError() ? 'error' : 'valid';
    return (
      <div className={className}>
        <textarea style={{minHeight: '4.5rem'}} onChange={this.changeValue} value={this.getValue()} className='contact-form-textarea' name="" id="" placeholder="brief message &#42;"></textarea>
      </div>
    );
  }
});

export default TextArea;
