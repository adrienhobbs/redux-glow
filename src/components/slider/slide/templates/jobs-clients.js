import React from 'react';
import styles from  './jobs-clients-slide.css';
import AllClients from 'components/ui/clients-component/index.js';
import CustomLink from 'components/nav/custom-link.js';

const JobsClients = React.createClass({
  render () {
    return (
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.intro}>
              <h2 className={styles.headline}>our clients</h2>
              <h2 className={styles.subtitle}>brands we've worked with</h2>
            </div>
            <AllClients slider />
            <div className={styles.view_work}>
              <CustomLink className='hoverline' name='view our work' path='/work' />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default JobsClients;
