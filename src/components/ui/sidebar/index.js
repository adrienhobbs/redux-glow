import React from 'react';
import styles from './sidebar.css';
// import ShareButton from 'components/ui/share-button';
import Logo from 'components/ui/logo-sprites/logo-sprite';
import isEmpty from 'lodash/isEmpty';

const Sidebar = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  getInitialState () {
    return null;
  },
  componentWillUnmount () {
    const icon = document.getElementById(this.getClient() + '-logo');
    TweenLite.set(icon, {fill: '#666', attr: {fill: '#666'}});
  },
  getClient () {
    return this.props.data.get('sidebar').customClientLogo || this.props.data.get('client').replace(/\s+/g, '-');
  },
  getLogoColor () {
    return this.props.data.get('sidebar').logoColor || '#ffffff';
  },
  getCopyColor () {
    return {color: this.props.data.get('sidebar').copyColor || '#ffffff'};
  },
  getServices () {
    return this.props.data.get('services').map((service, i) => {
      return <li key={i} style={this.getCopyColor()}>{service}</li>;
    });
  },
  getServiceContent () {
    return (
      <div className={this.getSidebarBoxClass()} id='sidebar-services'>
        <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
          services
        </div>
        <div className={styles.sidebar_body}>
          <ul style={this.getCopyColor()}>
            {this.getServices()}
          </ul>
        </div>
      </div>
    );
  },
  getRecognition () {
    return this.props.data.get('recognition').map((recognition, i) => {
      return <li key={i} style={this.getCopyColor()}>{recognition}</li>;
    });
  },
  getRecognitionContent () {
    if (this.hasRecognition()) {
      return (
        <div className={this.getSidebarBoxClass()} id='sidebar-recognition'>
          <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
            recognition
          </div>
          <div className={styles.sidebar_body}>
            <ul style={this.getCopyColor()}>
              {this.getRecognition()}
            </ul>
          </div>
        </div>
      );
    }
  },
  getHeadlineColor () {
    return {
      color: this.props.data.get('sidebar').headlineColor || '#fff'
    };
  },
  getSidebarBoxClass () {
    return (this.hasRecognition()) ? 'sidebar-box sidebar-three' : 'sidebar-box sidebar-two';
  },

  getShareButtonStroke () {
    return this.props.data.get('shareButton').strokeColor || '#fff';
  },
  getShareButtonCopyColor () {
    return this.props.data.get('shareButton').copyColor || '#fff';
  },
  hasRecognition () {
    return !(isEmpty(this.props.data.get('recognition')));
  },
  render () {
    return (
      <div className={styles.sidebar}>
        <div className={this.getSidebarBoxClass()} id='sidebar-client'>
          <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
            client
          </div>
          <div className={styles.sidebar_body}>
            <Logo color={this.getLogoColor()} clientName={this.getClient()}/>
          </div>
        </div>
        {this.getServiceContent()}
        {this.getRecognitionContent()}
      </div>
    );
  }
});

export default Sidebar;

        // <div className={this.getSidebarBoxClass()} id='sidebar-share'>
        //   <ShareButton copyColor={this.getShareButtonCopyColor()} strokeColor={this.getShareButtonStroke()} color={this.props.data.get('sidebarLogoColor')} />
        // </div>
