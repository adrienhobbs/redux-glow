import React, { PropTypes } from 'react';
import EmployeeCard from 'components/pages/about/employee-card';
import EmployeeInfo from 'constants/data/employees';
import map from 'lodash/map';
import Header from 'components/ui/header-component/header-component.js';
import AllClients from 'components/ui/clients-component/index.js';
import request from 'superagent';
import styles from './about.css';
import sortBy from 'lodash/sortBy';

export class AboutView extends React.Component {
  static contextTypes = {
    setupPageInfo: PropTypes.func,
    animatePageContentIn: PropTypes.func
  };
  constructor (props) {
    super(props);
    this.state = {
      weather: 'learn a little bit about us.'
    };
  }
  componentDidMount () {
    request.get('/weather')
    .set('Accept', 'application/json')
    .end(this.setWeather.bind(this));
    this.context.setupPageInfo('About');
    this.context.animatePageContentIn(this.refs.page);
  }
  setWeather (err, res) {
    if (!err) {
      this.setState({weather: res.body.caption || res.text.caption});
    }
  }
  getImportantEmployees () {
    return map(EmployeeInfo.importantPeople, function mapEmployeeInfo (employee, i) {
      return (
        <div className={styles.about_employee_card} key={i}>
          <EmployeeCard photoName={employee.photoName} name={employee.name} position={employee.position} />
        </div>
      );
    });
  }
  getSortedEmployees () {
    return sortBy(EmployeeInfo.otherPeople, function (employee, i) {
      return employee.name;
    });
  }
  getEmployees () {
    return map(this.getSortedEmployees(), function mapEmployeeInfo (employee, i) {
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
          <section className={styles.row}>
            <article className={styles.about_copy_left}>
              <p>Since 1999, GLOW has partnered with high-profile brands and networks to build world-class social and digital campaigns. We aren't just an award-winning digital marketing and social media agency in NYC. We are a methodically built team of 50, composed of industry veterans, Ivy League graduates, photographers, musicians, artists, world travelers, devoted fans, and curious marketers, all unified in our expertise of social and digital. We take tremendous pride in identifying and nurturing talent to consistently provide value for our partners. </p>
            </article>
            <article className={styles.about_copy_right}>
              <p>Without our talent we would not be experiencing such growth nor have the longstanding partnerships that we do. We work tirelessly to develop strategies and tactics and as experts we possess an expansive understanding of platforms, data and tools that exist because we are avid users of those platforms, both personally and professionally. With a long history of smart, effective, and results-driven campaigns, we have and will always take great pride in our long term client relationships. </p>
            </article>
          </section>
          <section className={styles.about_all_clients}>
            <h2 className={styles.headline}>our clients</h2>
            <AllClients color='#666' />
          </section>
        </div>
        <h1 className={styles.headline} id='who-we-are-title'>who we are</h1>
        <section className={styles.row_large}>
          {this.getImportantEmployees()}
          {this.getEmployees()}
        </section>
      </div>
    );
  }
}

export default AboutView;

