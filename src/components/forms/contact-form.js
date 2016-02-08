import React from 'react';
import Formsy from 'formsy-react';
import EmailInput from 'components/forms/email-input';
import TextArea from 'components/forms/textarea';
import SubmitButton from 'components/forms/submit-button';
import NameInput from 'components/forms/name-input';
import FormMixin from './form-mixin';

import './contact-form.scss';
const ContactForm = React.createClass({
  propTypes: {
    hideCopy: React.PropTypes.bool
  },
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
      <div className='contact-form'>
        <div className='contact-form-inner form-inner' ref='form'>
          <Formsy.Form
            ref='contactForm'
            onSubmit={this.onSubmit}
            className='Form'
            onInvalid={this.disableButton}
            onValid={this.enableButton}>
            <h2 className='connect-headline'>work with us</h2>
            <p style={{display: (this.props.hideCopy) ? 'none' : 'block'}}> we are always looking for great new opportunities. we'd love to work with you on your idea, however big or small.</p>
            <article className='input-fields'>
              <section id='name'>
                <NameInput
                  ref='name'
                  name='name'
                  placeholder='your name'
                  required
                  validationError='This is not a valid name'
                  validations='isWords' />
              </section>
              <section id='email'>
                <EmailInput
                  ref='email'
                  name='email'
                  placeholder='your email'
                  validationError='This is not a valid email'
                  validations='isEmail'
                  type='email'
                  required/>
              </section>
              <section id='message'>
                <TextArea
                  ref='textarea'
                  name='message'
                  validations='isExisty'
                  validationError='This is not a valid email'
                  required />
              </section>
              <div className='submit-btn-ctr'>
                <SubmitButton disabled={!this.state.canSubmit} />
              </div>
            </article>
          </Formsy.Form>
        </div>
        <div ref='message' className='message'>
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
