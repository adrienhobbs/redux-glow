import React from 'react';
import styles from './sidebar.css';
import Logo from 'components/ui/svg-sprites/svg-sprite.js';
import isEmpty from 'lodash/isEmpty';

const Sidebar = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  getInitialState () {
    return null;
  },
  componentWillUnmount () {
    const icon = document.getElementsByClassName(this.getClient());
    TweenLite.set(icon, {fill: '#666'});
  },
  getClient () {
    return this.props.data.get('sidebar').customClientLogo || this.props.data.get('client').replace(/\s+/g, '-');
  },
  hasCstLogo () {
    /*eslint-disable */
    return (this.props.data.get('sidebar').customClientLogo) ? true : false;
    /*eslint-enable */
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
        <div className={styles.inner_box}>
          <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
            services
          </div>
          <div className={styles.sidebar_body}>
            <ul style={this.getCopyColor()}>
              {this.getServices()}
            </ul>
          </div>
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
          <div className={styles.inner_box}>
            <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
              recognition
            </div>
            <div className={styles.sidebar_body}>
              <ul style={this.getCopyColor()}>
                {this.getRecognition()}
              </ul>
            </div>
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
  getSidebarCtrClass () {
    return (this.hasRecognition()) ? styles.sidebar_ctr_three : styles.sidebar_ctr_two;
  },
  render () {
    return (
      <div className={this.getSidebarCtrClass()}>
        <div className={this.getSidebarBoxClass()} id='sidebar-client'>
          <div className={styles.inner_box}>
            <div style={this.getHeadlineColor()} className={styles.sidebar_header}>
              client
            </div>
            <div className={styles.sidebar_body}>
              <Logo isCustom={this.hasCstLogo()} color={this.getLogoColor()} clientName={this.getClient()}/>
            </div>
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
