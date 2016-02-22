import React from 'react';
import styles from  './jobs-clients-slide.css';
import AllClients from 'components/ui/clients-component/index.js';
import CustomLink from 'components/nav/custom-link.js';

const JobsClients = React.createClass({
  getInitialState () {
    return null;
  },

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <AllClients color='#666' slide showSubtitle />
          <div className={styles.hiring}>
            <div className={styles.hiring_title}>
              <h2 className={styles.headline}>we&#8217;re hiring</h2>
              <div className={styles.rule}></div>
            </div>
            <h2 className={styles.subtitle}>we don&#8217;t bite. promise.</h2>
            <div className={styles.hiring_copy}>
              <p>At GLOW, hiring the best and brightest talent is by far our best concept.  If you are looking to join a young, smart, hardworking team that values thinking, creativity, passion and curiosity, then we want to hear from you.  Below is a list of current positions available at GLOW.</p>
              <div className={styles.view_openings}>
                <CustomLink className='hoverline' name='view current openings' path='/careers' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default JobsClients;
