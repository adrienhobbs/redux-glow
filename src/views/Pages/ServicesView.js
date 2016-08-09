import React, {PropTypes} from 'react';
import servicesList from 'constants/data/services-list';
import Header from 'components/ui/header-component/header-component.js';
import styles from './services-view.css';
import '../../components/ui/icons/symbol/icons-sprite.svg';
import svgStyles from '../../components/ui/icons/symbol/sprite.css';

export class Services extends React.Component {
  static propTypes = {
    location: PropTypes.object
  };

  static contextTypes = {
    setupPageInfo: PropTypes.func,
    animatePageContentIn: PropTypes.func
  };

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.context.setupPageInfo('Services');
  }

  componentDidMount () {
    this.context.animatePageContentIn(this.refs.page);
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
            <svg style={{display: 'block'}} className={svgStyles[`svg-${service.icon}-dims`]} role='img' >
              <use xlinkHref={`#${service.icon}`}></use>
            </svg>
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
      <div className='page-outer '>
        <div className='container' id='services' ref='page'>
          <Header title={'services'} subtitle={'check it out. how can we help?'} />
          <div className='page-content outer-services' style={{marginTop: 90}}>
            <div className='row'>
              {this.getOurServices()}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Services;
