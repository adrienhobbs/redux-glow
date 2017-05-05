import React from 'react';
import EmailInput from 'components/forms/email-input';
import FormMixin from './form-mixin';
import Formsy from 'formsy-react';

import styles from './newsletter-input.css';

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
      <div className={styles.newsletter}>
        <div className='newsletter-inner form-inner ' ref='form'>
          <Formsy.Form
            onSubmit={this.onSubmit}
            className={styles.newsletter_form}
            onInvalid={this.disableButton}
            onValid={this.enableButton}>
            <EmailInput
              className={styles.newsletter_input}
              placeholder='email address &#42;'
              name='email'
              validations='isEmail'
              type='text'
              required/>
            <button className={styles.input_button} disabled={!this.state.canSubmit} type='submit'>join  →</button>
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

export default NewsletterInput;
