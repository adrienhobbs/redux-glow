import React from 'react';
import request from 'superagent';

const FormMixin = {
  getInitialState () {
    return {
      canSubmit: false,
      msg: null,
      buttonMsg: null
    };
  },
  onSubmit (data, resetForm) {
    this.resetForm = resetForm;
    request.post(this.postUrl)
      .type('form')
      .set('X-CSRF-TOKEN', window._token || '')
      .send(data)
      .end(this.setMessage);
  },
  componentDidUpdate (prevProps, prevState) {
    if (this.state.msg !== prevState.msg && !(_.isNull(this.state.msg))) {
      this.showMessage();
    }
  },
  resetFormValues () {
    this.resetForm();
    if (this.getFormType() === 'contactForm') {
      this.refs.email.resetValue();
      this.refs.name.resetValue();
      this.refs.textarea.setValue('');
      this.refs.textarea.resetValue();
    }
  },
  setMessage (err) {
    if (!err) {
      this.resetFormValues();
      this.setState({msg: this.thanksMsg, buttonMsg: null});
    } else if (err) {
      this.setState({msg: 'shucks, looks like there was a problem.', buttonMsg: 'try again'});
    }
  },
  hideMessageAndShowForm () {
    TweenLite.to(this.refs.form, 0.2, {autoAlpha: 1});
    TweenLite.to(this.refs.message, 0.2, {autoAlpha: 0});
  },
  showMessage () {
    TweenLite.to(this.refs.form, 0.2, {autoAlpha: 0});
    TweenLite.to(this.refs.message, 0.2, {autoAlpha: 1});
  },
  showForm () {
    this.setState({msg: null});
    this.hideMessageAndShowForm();
  },
  getMessageButton () {
    return (!(_.isNull(this.state.buttonMsg)) ? <button onClick={this.showForm} >{this.state.buttonMsg}</button> : null);
  },
  disableButton () {
    this.setState({canSubmit: false});
  },
  enableButton () {
    this.setState({canSubmit: true});
  }
};

export default FormMixin;
