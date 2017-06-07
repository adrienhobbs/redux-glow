import React, { PropTypes } from 'react';
import ClientLogo from 'components/ui/svg-sprites/svg-sprite.js';
import styles from './client-logos.css';

const clients = [
  'ifc',
  'vh1',
  'moet',
  'nickjr',
  'westminster',
  'ilny',
  'hbo',
  'hearst',
  'cinemax',
  'hulu',
  'carla-hall',
  'nick',
  'spotify_brands',
  'believe',
  'discovery-kids'
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
