import React, { PropTypes } from 'react';
import ClientLogo from 'components/ui/logo-sprites/logo-sprite.js';
import styles from './client-logos.css';
import classnames from 'classnames';

const clients = [
  'we-tv',
  'syfy',
  'hbo',
  'cartoon-network',
  'crackle',
  'ilny',
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
    showSubtitle: PropTypes.bool,
    slide: PropTypes.bool
  };

  constructor (props) {
    super(props);
  }

  getAllClientLogos () {
    // const logoClass = this.getClassname();
    return clients.map(function mapClientNames (client, i) {
      return (
        <ClientLogo key={i} clientName={client}/>
      );
    });
  }

  getSubtitle () {
    return (this.props.showSubtitle)
      ? <h2 className={styles.subtitle}><div>brands we&#8217;ve</div><div>partnered with.</div></h2> : null;
  }
  getClassname () {
    const logoClass = (this.props.slide) ? styles.slideLogo : 'page';
    return classnames(styles.clientLogoContainer, logoClass);
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
