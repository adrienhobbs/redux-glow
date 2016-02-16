import React from 'react';
import styles from './submit-button.css';

const SubmitButton = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool
  },
  shouldComponentUpdate (nextProps) {
    return (nextProps.disabled !== this.props.disabled);
  },
  render () {
    return (
      <div className={styles.submit_btn_ctr}>
        <button disabled={this.props.disabled} ref='submit' type='submit' className='contact-link'>submit →</button>
      </div>
    );
  }
});

export default SubmitButton;
