import React from 'react';
import request from 'superagent';
import isNull from 'lodash/isNull';

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
    if (this.state.msg !== prevState.msg && !(isNull(this.state.msg))) {
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
      if (this.props.successFn) {
        this.props.successFn();
      } else {
        TweenLite.delayedCall(3, this.showForm.bind(this));
      }
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
    return (!(isNull(this.state.buttonMsg)) ? <button className={this.getFormType() + ' message-btn'} onClick={this.showForm} >{this.state.buttonMsg}</button> : null);
  },
  disableButton () {
    this.setState({canSubmit: false});
  },
  enableButton () {
    this.setState({canSubmit: true});
  }
};

export default FormMixin;
