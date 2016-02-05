import React from 'react';
import './jobs-clients.scss';
import AllClients from 'components/ui/clients-component/index.js';
import {Link} from 'react-router';

const JobsClients = React.createClass({
  getInitialState () {
    return null;
  },

  render () {
    return (
      <div id='contact-wrapper'>
        <div className='contact-inner'>
          <AllClients showSubtitle />
          <div className='hiring'>
            <div className='hiring-title'>
              <h2 className='page-title'>we&#8217;re hiring</h2>
              <div className='rule'></div>
            </div>
            <div className='subtitle'>we don't bite. promise.</div>
            <div className='hiring-copy'>
              <p>MailChimp makes powerful marketing products that people love to use. In 2015, our 500 employees will help 9 million users around the world send 200 billion emails.
                We’re privately owned, profitable, and growing fast. We live in Atlanta and dream in the stratosphere. We’re always looking for weird, smart, and independent thinkers to join the team.
              </p>
              <div className='view-openings'>
                <Link to='/careers'>view current openings  &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default JobsClients;
