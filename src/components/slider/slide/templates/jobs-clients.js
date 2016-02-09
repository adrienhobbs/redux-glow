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
              <p>At GLOW, hiring the best and brightest talent is by far our best concept.  If you are looking to join a young, smart, hardworking team that values thinking, creativity, passion and curiosity, then we want to hear from you.  Below is a list of current positions available at GLOW.</p>
              <div className='view-openings'>
                <Link className='hoverline' to='/careers'>view current openings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default JobsClients;
