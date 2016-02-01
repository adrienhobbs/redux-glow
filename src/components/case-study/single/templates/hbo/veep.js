import React, { PropTypes } from 'react';
import Sidebar from 'components/ui/sidebar';
import BaseTemplate from '../base-study-template';
import Results from 'components/ui/results';

export class Veep extends BaseTemplate {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <h1 style={this.getHeadlineStyle()} className='page-title'>about</h1>
          <div className='copy' id='about'>
            <div className='about-left'></div>
            <div className='about-center'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>Veep was a favorite among critics in its inaugural season. However, critical acclaim is simply not enough. GLOW approached HBO and took this opportunity to do what we do best - build audience and expand the social footprint with a smart, strong strategy and quality social content...and lots of it. <br/><br/> All the while, we were striving to redefine how a thirty-minute comedy is marketed on social media. <br/><br/> And it worked.</p>
              </div>
            </div>
            <Sidebar data={this.props.data}/>
          </div>
          <Results data={this.props.data} />
          <div className='social-strategy'>
            <h2 className='page-title' style={this.getHeadlineStyle()}>social strategy</h2>
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>From the beginning, our goal for Season 2 of Veep was to give it the social attention we believed it deserved by igniting the base going into the premiere and every week after, launching two new social accounts, surfacing content themes, providing social recommendations to the cast, and creating more than 1000 sharable pieces of content.</p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-device.png' className='' alt='' />
            </div>
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>Our campaign to launch Veep Season 3 needed to increase social and industry buzz, while keeping a low barrier to entry. We know the Veep’s staff are constantly on their phones, thus, in concert with HBO, GLOW developed a brand new way to engage the smart and savvy Veep fans.  Instead of building yet another social app to sign up for, GLOW designed an immersive Veep experience using phone calls, texting, and Twitter.<br /> <br /> We called this our Robocall execution.  This is a new way to engage Veep fans in social, had not been done before, all while using a “mature” existing medium. <br/><br/> All told, 15,000 total voice minutes were used and over 40,000 texts were exchanged. <br /> <br /> In a world governed by LIKES and Retweets, sometimes all it takes to succeed is a phone call.</p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-1.png' alt='' />
            </div>
            <div className='copy'>
              <div className='copy-inner' lang='en'>
                <p style={this.getCopyStyle()}>Having previously raised the bar again after a successful third season, GLOW challenged ourselves to create the strongest effort yet for S4.  Season 4 social activations included partnerships with VO app dubsmash, a successful #AskSelina Q&A, and a private DM group chat on Twitter. <br /> <br />Volume and conversation on Twitter for S4 premiere was up 36% from the S3 premiere. GLOW and HBO are currently planning for a larger and even more successful S5, coming in 2016.</p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-2.png' alt='' />
            </div>
            <div className='img-triple'>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-3.jpg' alt='' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-4.jpg' alt='' />
              </div>
              <div>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-3.jpg' alt='' />
              </div>
            </div>
            <div className='media-campaign'>
              <h2 className='page-title'>media campaign</h2>
              <div className='copy'>
                <div className='copy-inner'>
                  <p style={this.getCopyStyle()}>Glow also partnered to create the digital media campaigns for Veep.  As both social and display partner, we were able to work with HBO to integrate the robocall number into key art on all display units in the campaign, adding a significant element of reach and awareness to the effort.</p>
                </div>
                </div>
                <div className='img-single'>
                <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-media.png' alt='' />
              </div>
            <div className='end'>

              <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
                <polygon style={{fill:  this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
              </svg>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Veep;