import React from 'react';
import ClientLogo from 'components/ui/client-logos';
import './client-logos.scss';

const clients = [
  'WETV',
  'SYFY',
  'HBO',
  'CN',
  'USA',
  'ILNY',
  'CRACKLE',
  'TNT',
  'CINEMAX',
  'CNBC',
  'CARLAHALL',
  'HULU',
  'WESTMINSTER',
  'AE'
];

const ClientsBar = React.createClass({
  propTypes: {
    showSubtitle: React.PropTypes.bool
  },
  getAllClientLogos () {
    return clients.map(function mapClientNames (client, i) {
      return (
        <div key={i} className='client-logo-container'>
          <ClientLogo color='gray' client={client}/>
        </div>
      );
    });
  },

  getSubtitle () {
    return (this.props.showSubtitle)
      ? <h2 className='subtitle'><div>brands we've</div><div>partnered with.</div></h2>
    : null;
  },

  render () {
    return (
      <div id='our-clients'>
        <div className='headline-wrap'>
          <h2 className='page-title'>our clients</h2>
          {this.getSubtitle()}
        </div>
        <div className='client-logos-row'>
          {this.getAllClientLogos()}
        </div>
      </div>
    );
  }
});

export default ClientsBar;
