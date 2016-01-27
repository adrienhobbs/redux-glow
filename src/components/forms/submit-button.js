import React from 'react';

const SubmitButton = React.createClass({
  propTypes: {
    disabled: React.PropTypes.bool
  },
  shouldComponentUpdate (nextProps) {
    return (nextProps.disabled !== this.props.disabled);
  },

  componentDidUpdate () {

  },
  render () {
    return (
      <button disabled={this.props.disabled} ref='submit' type='submit' className='contact-link'>submit  →</button>
    );
  }
});

export default SubmitButton;
