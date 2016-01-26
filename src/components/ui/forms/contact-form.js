import React from 'react';
import Formsy from 'formsy-react';
import EmailInput from 'components/ui/forms/email-input';
import TextArea from 'components/ui/forms/textarea';
import SubmitButton from 'components/ui/forms/submit-button';
import NameInput from 'components/ui/forms/name-input';
import FormMixin from './form-mixin';

import './contact-form.scss';

const ContactForm = React.createClass({
  mixins: [FormMixin],
  componentWillMount () {
    this.thanksMsg = 'thanks for your message!';
    this.postUrl = '/submit_email';
  },
  getFormType () {
    return 'contactForm';
  },
  render () {
    return (
      <div className="contact-form">
        <div className="contact-form-inner" ref='form'>
          <Formsy.Form
            ref="contactForm"
            onSubmit={this.onSubmit}
            className="Form"
            onInvalid={this.disableButton}
            onValid={this.enableButton}>
            <h2 className="contact-headline">contact us</h2>
            <NameInput
              ref='name'
              name='name'
              required
              validationError="This is not a valid name"
              validations='isWords' />
            <EmailInput
              ref="email"
              name='email'
              validationError="This is not a valid email"
              validations='isEmail'
              type="email"
              required/>
            <label>your email &#42;</label>
            <TextArea
              ref='textarea'
              name='message'
              validations='isExisty'
              validationError="This is not a valid email"
              required />
            <div className='submit-btn-ctr'>
              <SubmitButton disabled={!this.state.canSubmit} />
            </div>
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

export default ContactForm;
