import React, { PropTypes } from 'react';
import ClientLogo from 'components/ui/logo-sprites/logo-sprite.js';
import styles from './client-logos.css';

const clients = [
  'we-tv',
  'syfy',
  'hbo',
  'cartoon-network',
  'westminster',
  'ilny',
  'usa',
  'tnt',
  'cinemax',
  // 'cnbc',
  'hulu',
  'carla-hall',
  'crackle'
  // 'ae'
];

export class ClientsBar extends React.Component {

  static propTypes = {
    showSubtitle: PropTypes.bool,
    slider: PropTypes.bool,
    color: PropTypes.string,
    mobileHome: PropTypes.bool
  };

  constructor (props) {
    super(props);
  }

  getAllClientLogos () {
    const logoClass = this.getClassname();
    return clients.map(function mapClientNames (client, i) {
      return (<ClientLogo className={logoClass} color={this.props.color || '#666'} key={i} clientName={client}/>);
    }, this);
  }

  getClassname () {
    if (this.props.slider) {
      return styles.slide_logo;
    } else if (this.props.mobileHome) {
      return styles.mobile_logo;
    } else {
      return styles.client;
    }
  }

  render () {
    return (
      <div className={styles.row}>
        {this.getAllClientLogos()}
      </div>
    );
  }
}

export default ClientsBar;
