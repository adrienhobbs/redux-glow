import React from 'react';
import './sidebar.scss';
import ShareButton from 'components/ui/share-button';
import Logo from 'components/ui/logo-sprites/logo-sprite';

const Sidebar = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },
  getInitialState () {
    return null;
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
        <div style={this.getHeadlineColor()} className='sidebar-header'>
          services
        </div>
        <div className='sidebar-body'>
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
          <div style={this.getHeadlineColor()} className='sidebar-header'>
            recognition
          </div>
          <div className='sidebar-body'>
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
    return (this.hasRecognition()) ? 'sidebar-box sidebar-four' : 'sidebar-box sidebar-three';
  },

  getShareButtonStroke () {
    return this.props.data.get('shareButton').strokeColor || '#fff';
  },
  getShareButtonCopyColor () {
    return this.props.data.get('shareButton').copyColor || '#fff';
  },
  hasRecognition () {
    return !(_.isEmpty(this.props.data.get('recognition')));
  },
  render () {
    return (
      <div className='sidebar'>
        <div className={this.getSidebarBoxClass()} id='sidebar-client'>
          <div style={this.getHeadlineColor()} className='sidebar-header'>
            client
          </div>
          <div className='sidebar-body'>
            <Logo color={this.getLogoColor()} clientName={this.getClient()}/>
          </div>
        </div>
        {this.getServiceContent()}
        {this.getRecognitionContent()}
        <div className={this.getSidebarBoxClass()} id='sidebar-share'>
          <ShareButton copyColor={this.getShareButtonCopyColor()} strokeColor={this.getShareButtonStroke()} color={this.props.data.get('sidebarLogoColor')} />
        </div>
      </div>
    );
  }
});

export default Sidebar;
