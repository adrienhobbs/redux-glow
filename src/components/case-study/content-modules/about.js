import React, { PropTypes } from 'react';
import Sidebar from 'components/ui/sidebar';
import styles from './about-content-module.css';

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
      marginTop: 0
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

  render () {
    return (
      <article className={styles.about_content_module_container}>
        {this.createHeadlineEl('about')}
        <div className={styles.about_content_module} id='about'>
          <div className={styles.about_left}></div>
          <div className={styles.about_center}>
            <div className='copy-inner' lang='en' style={this.getCopyStyle()} dangerouslySetInnerHTML={this.createParagraphEl()} />
          </div>
          <div className={styles.about_right}>
            <Sidebar data={this.props.data}/>
          </div>
        </div>
        {this.props.children}
      </article>
    );
  }
}
export default AboutSection;

