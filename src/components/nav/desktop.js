import React, {PropTypes} from 'react';
import styles from './desktop.css';
import CustomLink from './custom-link.js';
import Links from 'constants/page-links';
import Twitter from 'components/ui/icons/twitter';

export class DesktopNav extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    currentPath: PropTypes.string,
    restartSliderPos: PropTypes.func
  };

  static contextTypes = {
    transitionToNewRoute: PropTypes.func
  };

  constructor (props) {
    super(props);
  }
  getLinks () {
    return Links.map((link, i) => {
      return (
        <div key={i} className={styles.link_ctr}>
          <div className={styles.link_ctr_inner}>
            <CustomLink className={styles.hoverline} activeClassName={styles.hoverline_active} {...this.props} linkNum={i} data={link} />
          </div>
        </div>
      );
    });
  }
  getLinkColor () {
    return this.props.color;
  }
  logoClick () {
    if (this.props.currentPath === '/') {
      this.props.restartSliderPos();
    } else {
      this.context.transitionToNewRoute('/');
    }
  }
  render () {
    return (
      <nav className={styles.desktop}>
        <div onClick={this.logoClick.bind(this)} className={styles.logo}>
          <svg ref='logo' role='img' >
            <use xlinkHref='#glow-logo'></use>
          </svg>
        </div>
        <div className={styles.left}></div>
        <div className={styles.right}>
          {this.getLinks()}
          <div className={styles.link_ctr}>
            <div className={styles.link_ctr_inner}>
              <a className={styles.twitter_link} target='_blank' href='http://www.twitter.com/glow'><Twitter ref='twitterSVG' color={this.getLinkColor()}/></a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default DesktopNav;
