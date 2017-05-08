import React, { PropTypes } from 'react';
import styles from './about-content-module.css';
import {startCase} from 'lodash';

export class AboutSection extends React.Component {

  static propTypes = {
    data: PropTypes.object,
    children: PropTypes.element
  };

  constructor () {
    super();
  }

  getCopyStyle () {
    return {
      color: this.props.data.get('copyColor') || '#fff'
    };
  }

  getHeadlineStyle () {
    return {
      color: this.props.data.get('headlineColor') || '#000',
      marginTop: 0,
      marginBottom: 10
    };
  }

  createMarkup (markup) {
    return {__html: markup};
  }

  createHeadlineEl (headline) {
    return <h1 style={this.getHeadlineStyle()} className={styles.section_headline}> {headline} </h1>;
  }

  createParagraphEl (paragraph) {
    return this.createMarkup(this.props.data.get('aboutCopy'));
  }

  getServices () {
    const serviceStyle = {
      margin: '0px 0 10px 0',
      color: this.props.data.get('copyColor') || '#A7A7A7',
      lineHeight: 1
    };
    return this.props.data.get('services').map((service, i) => {
      return <p key={i} style={serviceStyle}>{service}</p>;
    });
  }

  render () {
    const tweetText = escape('Check out this case study from GLOW!');
    const itemStyle = {
      margin: '0px 0 10px 0',
      color: this.props.data.get('copyColor') || '#A7A7A7',
      lineHeight: 1
    };
    const projectInfoStyle = {
      color: this.props.data.get('headlineColor'),
      textAlign: 'left'
    };
    const getEmailBody = () => {
      return encodeURI(`Take a look at GLOW\'s work on ${startCase(this.props.data.get('client'))}'s ${startCase(this.props.data.get('project'))}. \n \n ${window.location.href}`);
    };

    return (
      <article className={styles.about_content_module_container}>
        <div className={styles.about_content_module}>
          <div style={{marginBottom: 20}} className='project-info'>
            <div style={projectInfoStyle} className='project-title'>
              <span style={projectInfoStyle} className='client-name'>{this.props.data.get('client')}</span>
              <span style={projectInfoStyle} className='sep'> | </span>
              <span style={{...projectInfoStyle, fontWeight: 'bold', fontFamily: 'GT-Walsheim'}} className='project-name' >{this.props.data.get('title')}</span>
            </div>
          </div>
          <div className={styles.about}>
            {this.createHeadlineEl('about')}
            <div className='' lang='en' style={this.getCopyStyle()} dangerouslySetInnerHTML={this.createParagraphEl()} />
          </div>
          <div className={styles.services}>
            {this.createHeadlineEl('services')}
            {this.getServices()}
          </div>
          <div className={styles.share}>
            {this.createHeadlineEl('share')}
            <p style={itemStyle}><a style={{color: this.props.data.get('copyColor')}} href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${window.location.href}`} target='_blank'>twitter</a></p>
            <p style={itemStyle}><a style={{color: this.props.data.get('copyColor')}} href={`mailto:?subject=${tweetText}&body=${getEmailBody()}`}>mail</a></p>
          </div>
        </div>
        <div style={{width: '100%', marginTop: 30}}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
export default AboutSection;
// <div className={styles.about_content_module} id='about'>
//   <div className={styles.about_left}></div>
//   <div className={styles.about_center}>
//     <div className='copy-inner' lang='en' style={this.getCopyStyle()} dangerouslySetInnerHTML={this.createParagraphEl()} />
//   </div>
//   <div className={styles.about_right}>
//     <Sidebar data={this.props.data}/>
//   </div>
// </div>
