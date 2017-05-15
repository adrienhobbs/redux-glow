import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';

export class Sharknado extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  render () {
    const copyStyle = this.getCopyStyle();
    const ResultsSection = this.getResultsTemplate();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} />
          <ResultsSection data={this.props.data} />
          <article className='approach'>
            {this.createHeadlineEl('‘nado never sleeps')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>GLOW’s strategy, creative, and always-on community management proved that the ‘Nado was still a social force to be reckoned with. Our campaign utilized Facebook, Twitter, and Instagram to reach die-hard fans. With the launch on Snapchat, we were able Sharknado is a pop culture phenomenon that should never go dark on social media, especially between premieres. GLOW developed and executed an off-season strategy that had Sharknado take a big bite out of Twitter’s most talked about events.</p>
                <p style={copyStyle}>GLOW made @SharknadoSyfy one of the most popular Twitter handles during the most talked about events. We created a tweet storm of real-time content to push out on Twitter during the Golden Globes, SAG Awards, Super Bowl, and Oscars. Pre-made content was produced based on moments we knew were going to resonate well with fans during each event. We developed impactful and hilarious creative in the moment to accommodate funny tweets.  speak to a younger audience by serving them exclusive and interactive content they couldn’t find on other platforms.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <video width='100%' playsinline preload muted autoPlay loop>
                <source src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/syfy_sharknado_wall.mp4' type='video/mp4'/>
              </video>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('twitter war room')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>For this third installment of the franchise, we were armed and ready to slay a "night of" event that led to 2 Billion Twitter impressions. Our War Room consisted of 8 community managers tasked with pushing out hilarious GIFs and statics of the movie, responding to fans while tracking hashtags, @ mentions, keywords, influencers, Facebook mentions, cast, and brand sponsors. We also deployed 3 social managers, who handled trend alerts and curated tweets to feature on-air, along with art directors and designers who churned out social content to feed the social frenzy.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-02.jpg' alt='' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Sharknado;
