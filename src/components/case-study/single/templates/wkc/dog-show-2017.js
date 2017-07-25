import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import LoopingVideo from 'components/video/looping-video';

export class DogShow extends BaseTemplate {
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
          <article className='strategy'>
            <h1 style={this.getHeadlineStyle()} className='section_headline study_headline'>social strategy</h1>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>Through social innovation combined with a focused strategy, GLOW launched Westminster Kennel Club into a new and exciting era. Our teams worked together to understand and define clear goals to modernize communication flow and ignite fan engagement in order to reach our younger fan base without isolating the traditional core Westminster demographic.</p>
                <p style={copyStyle}>Following the 140th dog show in February 2016, GLOW crafted a year-round strategy, the Road to Westminster, to sustain and organically grow social conversation, with no budget for paid support. This strategy elevated the Westminster brand as a relevant source of dog-show news, educate and grow new audiences and build momentum for the 2017 dog show.</p>
                <p style={copyStyle}>In 2017, the 141st dog show, GLOW set out to extend this prestigious live event on a global scale. We did so by developing and executing a comprehensive strategy keeping the social content relevant to what was happening in real-time, serving the viewers and fans the content and information they wanted, and above all, making sure to showcase the event's true stars, the dogs. This included real-time content development such as Facebook Live voting polls, Instagram Stories, reactionary GIFs, and scorecards, in addition to, attentive community management.</p>
                <p style={copyStyle}>To extend the global reach of Westminster, we partnered with Snapchat's editorial team to launch a featured Live Story. The branded story was curated by content creators and show attendees, featured custom Westminster geo-filters, and available to view to all Snapchat users for 24 hours. </p>
                <p style={copyStyle}>Westminster was one of the first brands to partner with Giphy on their new Giphy Frame social booth. The booth allowed show exhibitors and spectators to create a digital souvenir at the event to be shared on their personal social profiles. The frame GIFs were populated into a custom Giphy page accompanied with real-time content. </p>
                <p style={copyStyle}>GLOW continued to bring the event to life to viewers at home by working hand-in-hand with Fox Sports. This included an on-air broadcast from Westminster's first social correspondent, Katie Nolan, discussing the Westminster social feeds and user conversations. Additionally, we partnered with social influencers and media outlets to further expand the dog show's reach.</p>
                <p style={copyStyle}>Following the 141st show, GLOW attended and captured real-time content during the Best in Show media tour to sustain the social momentum and elevate the winner's new popularity.</p>
              </div>
            </div>
            <div className='img-single inner_section'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/wkc_2017_content_wall_static.jpg' alt='' />
            </div>
            <div className='img-single inner_section'>
              <LoopingVideo style={{maxWidth: '100%', width: '100%'}} videoSrc='https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/wkc_2017_content_wall.mp4' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default DogShow;
