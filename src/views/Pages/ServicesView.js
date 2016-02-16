import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import servicesList from 'constants/data/services-list';
import PageLayout from 'layouts/PageLayout/PageLayout';
import Header from 'components/ui/header-component/header-component.js';
import styles from './services-view.css';

const mapStateToProps = (state) => ({
  work: state.work,
  routerState: state.router
});

export class Services extends PageLayout {
  static propTypes = {
    location: PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.setupPageInfo('Services');
  }

  componentDidMount () {
    this.animatePageContentIn();
  }

  pageSubTitle () {
    return <span>check out our dope services, son!</span>;
  }

  getOurServices () {
    return servicesList.map(function mapServices (service, i) {
      function getCats () { return service.cats.map(function mapServiceCats (cat, ii) { return <div key={ii} className={styles.service_cat}>&#8594;  {cat}</div>; }); }
      return (
        <div key={i} className={styles.service_bucket}>
          <div className={styles.service_title}>
            {service.type}
            <div className='divider'></div>
          </div>
          <div className={styles.service_body}>{service.description}</div>
          <div className={styles.service_categories}>
            {getCats()}
          </div>
        </div>
      );
    });
  }

  render () {
    return (
      <div className='page-outer'>
        <div className='container' id='services' ref='page'>
          <Header title={'services'} subtitle={'check out our dope services, son!'} />
          <div className='page-content'>
            <div className='row'>
              {this.getOurServices()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Services);
