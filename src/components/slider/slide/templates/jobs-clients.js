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
      <div className={styles.slide}>
        <div className={styles.slide_top}>
          <div className={styles.top_headline_ctr}>
            <h2 className={styles.headline}>our clients</h2>
            <h2 className={styles.subtitle}>brands we've worked with</h2>
          </div>
          <div className={styles.top_clients_ctr}>
            <AllClients color='#666'/>
          </div>
        </div>
        <div className={styles.slide_bottom}>
          <div className={styles.bot_headline_ctr}>
            <div className={styles.hiring_head_ctr}>
              <h2 className={styles.hiring_headline}>we&#8217;re hiring</h2>
              <div className={styles.rule}></div>
            </div>
            <h2 className={styles.subtitle}>we don&#8217;t bite. promise.</h2>
          </div>
          <div className={styles.bot_copy_ctr}>
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
// <div className={styles.wrapper}>
//   <div className={styles.inner}>
//     <h2 className={styles.headline}>our clients</h2>
//     <h2 className={styles.subtitle}>brands we've worked with</h2>
// <AllClients color='#666'/>
//     <div className={styles.hiring}>
// <div className={styles.hiring_title}>
//   <h2 className={styles.hiring_headline}>we&#8217;re hiring</h2>
//   <div className={styles.rule}></div>
// </div>
//       <h2 className={styles.subtitle}>we don&#8217;t bite. promise.</h2>
//       <div className={styles.hiring_copy}>
//         <p>At GLOW, hiring the best and brightest talent is by far our best concept.  If you are looking to join a young, smart, hardworking team that values thinking, creativity, passion and curiosity, then we want to hear from you.  Below is a list of current positions available at GLOW.</p>
//         <div className={styles.view_openings}>
//           <CustomLink className='hoverline' name='view current openings' path='/careers' />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div className={styles.slide}>
//   <div className={styles.slide_top}>
//     <h2 className={styles.headline}>our clients</h2>
//     <h2 className={styles.subtitle}>brands we've worked with</h2>
//     <div className={styles.clients_bar}>
//       <AllClients color='#666'/>
//     </div>
//   </div>
//   <div className={styles.slide_bottom}>
// <div className={styles.hiring_head_ctr}>
//    <h2 className={styles.hiring_headline}>we&#8217;re hiring</h2>
//    <div className={styles.rule}></div>
// </div>

//     <h2 className={styles.subtitle}>we don&#8217;t bite. promise.</h2>
//   </div>
// </div>
