import React from 'react';
import EmailInput from 'components/ui/forms/email-input';
import FormMixin from './form-mixin';
import Formsy from 'formsy-react';

import './newsletter-input.scss';

const NewsletterInput = React.createClass({
  mixins: [FormMixin],
  componentWillMount () {
    this.thanksMsg = 'thanks for joining!';
    this.postUrl = '/newsletter';
  },
  getFormType () {
    return 'newsletterInput';
  },
  render () {
    return (
      <div className="newsletter">
        <div className="newsletter-inner" ref='form'>
          <h2 className="contact-headline">join the newsletter</h2>
          <Formsy.Form
            onSubmit={this.onSubmit}
            className="newsletter-form"
            onInvalid={this.disableButton}
            onValid={this.enableButton}>
            <EmailInput
              className='light-bordered '
              placeholder="email address &#42;"
              name='email'
              validations='isEmail'
              type="text"
              required/>
            <button disabled={!this.state.canSubmit} type="submit">join!</button>
          </Formsy.Form>
        </div>
        <div ref='message' className="message">
          <div>{this.state.msg}</div>
          <div className='message-button-ctr'>
            {this.getMessageButton()}
          </div>
        </div>
      </div>
    );
  }
});

export default NewsletterInput;
