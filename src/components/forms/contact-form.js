import React from 'react';
import Formsy from 'formsy-react';
import EmailInput from 'components/forms/email-input';
import TextArea from 'components/forms/textarea';
import SubmitButton from 'components/forms/submit-button';
import NameInput from 'components/forms/name-input';
import FormMixin from './form-mixin';
import styles from  './contact-form.css';

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
        <div className={styles.form_inner} ref='form'>
          <Formsy.Form
            ref='contactForm'
            onSubmit={this.onSubmit}
            className='Form'
            onInvalid={this.disableButton}
            onValid={this.enableButton}>
            <h2 className={styles.connect_headline}>work with us</h2>
            <p style={{display: (this.props.hideCopy) ? 'none' : 'block'}}> we are always looking for great new opportunities. we'd love to work with you on your idea, however big or small.</p>
            <article className={styles.input_fields}>
              <section className={styles.field} id='name'>
                <NameInput
                  ref='name'
                  name='name'
                  placeholder='your name'
                  required
                  validationError='This is not a valid name'
                  validations='isWords' />
              </section>
              <section className={styles.field} id='email'>
                <EmailInput
                  ref='email'
                  name='email'
                  placeholder='your email'
                  validationError='This is not a valid email'
                  validations='isEmail'
                  type='email'
                  required/>
              </section>
              <section className={styles.text_area_message} id='message'>
                <TextArea
                  ref='textarea'
                  name='message'
                  validations='isExisty'
                  validationError='This is not a valid email'
                  required />
              </section>
              <SubmitButton disabled={!this.state.canSubmit} />
            </article>
          </Formsy.Form>
        </div>
        <div ref='message' className={styles.message}>
          <div>{this.state.msg}</div>
          <div className={styles.message_button_ctr}>
            {this.getMessageButton()}
          </div>
        </div>
      </div>
    );
  }
});

export default ContactForm;
