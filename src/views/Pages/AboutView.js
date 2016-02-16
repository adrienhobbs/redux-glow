import React from 'react';
// import Testimonials from 'components/pages/about/testimonials';
import EmployeeCard from 'components/pages/about/employee-card';
import EmployeeInfo from 'constants/data/employees';
import { connect }  from 'react-redux';
import map from 'lodash/map';
import PageLayout from 'layouts/PageLayout/PageLayout';
import Header from 'components/ui/header-component/header-component.js';
import AllClients from 'components/ui/clients-component/index.js';
import request from 'superagent';
import styles from './about.css';

const mapStateToProps = (state) => ({
  router: state.router
});

export class AboutView extends PageLayout {

  constructor (props) {
    super(props);
    this.state = {
      weather: 'getting weather...'
    };
    this.setupPageInfo('About');
  }
  componentDidMount () {
    request.get('/weather')
    .set('Accept', 'application/json')
    .end(this.setWeather.bind(this));
    this.animatePageContentIn();
  }
  setWeather (err, res) {
    if (!err) {
      this.setState({weather: res.body.caption || res.text.caption});
    }
  }
  getEmployees () {
    return map(EmployeeInfo, function mapEmployeeInfo (employee, i) {
      return (
        <div className={styles.about_employee_card} key={i}>
          <EmployeeCard photoName={employee.photoName} name={employee.name} position={employee.position} />
        </div>
      );
    });
  }
  render () {
    return (
      <div className='container' id='about' ref='page'>
        <Header bgSrc='https://s3.amazonaws.com/weareglow-assets/header-images/about.gif' title={'about us'} subtitle={this.state.weather} />
        <div className='page-content'>
          <section className='row'>
            <article className={styles.about_copy}>
              <p>Since 1999, GLOW has partnered with high-profile brands and networks to build world-class social and digital campaigns. We aren't just an award-winning digital marketing and social media agency in NYC. We are a methodically built team of 50, composed of industry veterans, Ivy League graduates, photographers, musicians, artists, world travelers, devoted fans, and curious marketers, all unified in our expertise of social and digital. We take tremendous pride in identifying and nurturing talent to consistently provide value for our partners. </p>
            </article>
            <article className={styles.about_copy}>
              <p>Without our talent we would not be experiencing such growth nor have the longstanding partnerships that we do. We work tirelessly to develop strategies and tactics and as experts we possess an expansive understanding of platforms, data and tools that exist because we are avid users of those platforms, both personally and professionally. With a long history of smart, effective, and results-driven campaigns, we have and will always take great pride in our long term client relationships. </p>
            </article>
          </section>
          <section className={styles.about_all_clients}>
            <AllClients />
          </section>
        </div>
        <h1 className='page-title' id='who-we-are-title'>who we are</h1>
        <section className='row-large'>
          {this.getEmployees()}
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AboutView);
// <div className='row' style={{maxWidth: 800}}>
//   <Testimonials />
// </div>
