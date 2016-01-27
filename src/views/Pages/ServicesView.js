import React from 'react';
// import './services.scss';
import { connect }            from 'react-redux';
import servicesList from 'constants/data/services-list';
import PageLayout from 'layouts/PageLayout/PageLayout';

const mapStateToProps = (state) => ({

  work: state.work,
  routerState: state.router

});

export class Services extends PageLayout {
  static propTypes = {
    location: React.PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.setupPageInfo('Services');
  }

  componentWillUnmount () {
    this.removeHeaderWatcher();
  }

  componentDidMount () {
    this.animatePageContentIn();
    this.watchHeaderScrollTop();
  }
  pageSubTitle () {
    return <span>check out our dope services, son!</span>;
  }

  getOurServices () {
    return servicesList.map(function mapServices (service, i) {
      function getCats () {
        return service.cats.map(function mapServiceCats (cat, ii) {
          return <div key={ii} className='cat'>&#8594;  {cat}</div>;
        });
      }
      return (
        <div key={i} className='service-bucket'>
          <div className='title'>
            {service.type}
            <div className='divider'></div>
          </div>
          <div className='body'>{service.description}</div>
          <div className='categories'>
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
        <div className='header'>
          <div ref='headerImage' className='header-image'></div>
          <h1 className='page-title'>services</h1>
          <h4 className='page-subtitle'>{this.pageSubTitle()}</h4>
        </div>
        <div className='page-content'>
          <div className='row'>
            {this.getOurServices()}
          </div>
        </div>
      </div>
          <div ref='headerGradient' className='header-grad'></div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(Services);
