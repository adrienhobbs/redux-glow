import React, { PropTypes } from 'react';
import ClientLogo from 'components/ui/logo-sprites/logo-sprite.js';
import styles from './client-logos.css';

const clients = [
  'we-tv',
  'syfy',
  'hbo-gray',
  'cartoon-network',
  'crackle',
  'ilny-gray',
  'usa',
  'cinemax',
  'tnt',
  'cnbc',
  'carla-hall',
  'hulu',
  'westminster',
  'ae'
];

export class ClientsBar extends React.Component {

  static propTypes = {
    showSubtitle: PropTypes.bool
  };

  constructor (props) {
    super(props);
  }

  getAllClientLogos () {
    return clients.map(function mapClientNames (client, i) {
      return (
        <div key={i} className={styles.clientLogoContainer}>
          <ClientLogo color='#666' stroke='#666'  clientName={client}/>
        </div>
      );
    });
  }

  getSubtitle () {
    return (this.props.showSubtitle)
      ? <h2 className={styles.ourClients_subtitle}><div>brands we've</div><div>partnered with.</div></h2> : null;
  }

  render () {
    TweenLite.set('#footer', {display:'none'});
    return (
      <div className={styles.ourClients}>
        <div className={styles.ourClients_headlineWrap}>
          <h2 className='page-title'>our clients</h2>
          {this.getSubtitle()}
        </div>
        <div className={styles.clientsLogoRow}>
          {this.getAllClientLogos()}
        </div>
      </div>
    );
  }
}

export default ClientsBar;
