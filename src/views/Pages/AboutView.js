import React from 'react';
import Testimonials from 'components/pages/about/testimonials';
import EmployeeCard from 'components/pages/about/employee-card';
import EmployeeInfo from 'constants/data/employees';
import { connect }  from 'react-redux';
import map from 'lodash/map';
import PageLayout from 'layouts/PageLayout/PageLayout';
import Header from 'components/ui/header-component/header-component.js';
import AllClients from 'components/ui/clients-component/index.js';
import request from 'superagent';

const mapStateToProps = (state) => ({
  counter: state.counter,
  nav: state.nav,
  work: state.work,
  featuredWork: state.work.featured,
  viewport: state.viewport,
  colors: state.work.colors,
  routerState: state.router
});

export class AboutView extends PageLayout {
  static propTypes = {
  };
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
        <div className='about-employee-card' key={i}>
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
          <div className='row'>
            <div className='about-copy'>
              <p>Since 1999, GLOW has partnered with high-profile brands and networks to build world-class social and digital campaigns. We aren't just an award-winning digital marketing and social media agency in NYC. We are a methodically built team of 50, composed of industry veterans, Ivy League graduates, photographers, musicians, artists, world travelers, devoted fans, and curious marketers, all unified in our expertise of social and digital. We take tremendous pride in identifying and nurturing talent to consistently provide value for our partners. </p>
            </div>
            <div className='about-copy'>
              <p>Without our talent we would not be experiencing such growth nor have the longstanding partnerships that we do. We work tirelessly to develop strategies and tactics and as experts we possess an expansive understanding of platforms, data and tools that exist because we are avid users of those platforms, both personally and professionally. With a long history of smart, effective, and results-driven campaigns, we have and will always take great pride in our long term client relationships. </p>
            </div>
          </div>
          <div className='row'>
            <h1 className='page-title'>kind words</h1>
          </div>
          <div className='row'>
            <Testimonials />
          </div>
          <div className='row' id='about-all-clients'>
            <AllClients />
          </div>
        </div>
        <h1 className='page-title' id='who-we-are-title'>who we are</h1>
        <div className='row-large'>

          {this.getEmployees()}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AboutView);
