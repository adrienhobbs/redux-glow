import React from 'react';
import Testimonials from 'components/pages/about/testimonials';
import EmployeeCard from 'components/pages/about/employee-card';
import EmployeeInfo from 'constants/data/employees';
import { connect }  from 'react-redux';
import {map} from 'lodash';
import PageLayout from 'layouts/PageLayout/PageLayout';
import './about.scss';

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
  }

  componentWillMount () {
    this.setupPageInfo('About');
  }

  componentDidMount () {
    this.animatePageContentIn();
    // this.watchHeaderScrollTop();
  }
  componentWillUnmount () {
    // this.removeHeaderWatcher();
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
        <div className='header'>
          <div ref='headerImage' className='header-image'></div>
          <h1 className='page-title'>about</h1>
          <h4 className='page-subtitle'>it's always sunny in new york city</h4>
        </div>
        <div className='page-content'>
          <div className='row'>
            <div className='about-copy'>
              <p>GLOW is an agency built to thrive in today's ever-evolving digital landscape.  Our diverse team is dedicated to helping leading brands utilize the latest technology and channels to engange and motivate coveted audiences and consumers.  We are your consumers and we are your audience.  And for the past 16 years we have crafted an expertise in driving consumers to action through a mix of smart, strategic thinking bolstered by top-notch execution.</p>
            </div>
            <div className='about-copy'>
              <p>Our teams are experts in a range of services that include social media strategy, community management, concept development, video production, graphic design, social content creation, and experiential development and design.  Whether the goal is to drive tune-in, generate tweets, clicks, shares, posts, visits, or to make a purchase, GLOW has successfull applied our blend of award-winning strategies and creative to engage audiences and drive action, enabling our clients to achieve successful measurable results.</p>
            </div>
          </div>
          <div className='row'>
            <h1 className='page-title'>kind words</h1>
          </div>
          <div className='row'>
            <Testimonials />
          </div>
        </div>
        <div className='row-large'>
          {this.getEmployees()}
        </div>
        <div ref='headerGradient' className='header-grad'></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AboutView);
